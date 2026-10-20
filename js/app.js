/* Metadata Repository Functionality: question matching and rendering.
   Content comes from data/topics.js (user topics, window.TOPIC_AREAS, window.GUIDE_META)
   and data/topics-technical.js (technical topics, window.TECH_AREAS).
   No network requests: works from a shared folder or file://. */
(function () {
    'use strict';

    var TOPICS = Array.isArray(window.TOPICS) ? window.TOPICS : [];
    var AREAS = Array.isArray(window.TOPIC_AREAS) ? window.TOPIC_AREAS : [];
    var META = window.GUIDE_META || {};
    var byId = {};
    TOPICS.forEach(function (t) { byId[t.id] = t; });

    var $ = function (id) { return document.getElementById(id); };
    var panel = $('panel');
    var listEl = $('topic-list');
    var filterEl = $('topic-filter');
    var askForm = $('ask-form');
    var askInput = $('ask-input');
    var activeId = null;

    // Audience: 'everyone' (default, all topics ranked equally) or 'technical' (technical topics favoured).
    var TECH_AREAS = Array.isArray(window.TECH_AREAS) ? window.TECH_AREAS : [];
    var AUD_KEY = 'mrf-guide-audience';
    var TECH_BOOST = 1.4;
    var audience = 'everyone';
    try { if (localStorage.getItem(AUD_KEY) === 'technical') audience = 'technical'; } catch (e) { /* storage blocked */ }
    var audMatch = /[?&]aud=(everyone|technical)/.exec((typeof location !== 'undefined' && location.search) || '');
    if (audMatch) audience = audMatch[1];
    function isTech(t) { return t && t.audience === 'technical'; }

    // ------------------------------------------------------------------ text helpers
    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    var STOP = {};
    ('a an the and or but of to in on at for from by with without into onto is are was were be been being am ' +
     'do does did doing done how what why when where which who whom whose can could should would will shall may might must ' +
     'i me my mine we us our you your it its this that these those there here then than so if as about ' +
     'work works working worked use using used get got make made tell explain please help want need know ' +
     'mv64 app thing things something way anything any some happen happens im ive id ill youre lets also just really').split(/\s+/)
        .forEach(function (w) { if (w) STOP[w] = true; });

    function stem(w) {
        if (w.length > 5 && /ies$/.test(w)) return w.slice(0, -3) + 'y';
        if (w.length > 5 && /ing$/.test(w)) return w.slice(0, -3);
        if (w.length > 4 && /ed$/.test(w)) return w.slice(0, -2);
        if (w.length > 4 && /es$/.test(w) && /(ch|sh|x|ss)es$/.test(w)) return w.slice(0, -2);
        if (w.length > 3 && /s$/.test(w) && !/ss$/.test(w)) return w.slice(0, -1);
        return w;
    }

    function norm(s) {
        return String(s || '').toLowerCase()
            .replace(/c\s*#|c\s+sharp/g, ' csharp ')
            .replace(/(^|[^a-z0-9])\.net\b|\bdot\s+net\b/g, '$1 dotnet ')
            .replace(/\bweb\s+view\s*2?\b/g, function (m) { return /2/.test(m) ? ' webview2 ' : ' webview '; })
            .replace(/\bfront[\s-]+end\b/g, ' frontend ')
            .replace(/\bback[\s-]+end\b/g, ' backend ')
            .replace(/[\u2018\u2019']/g, '')
            .replace(/[^a-z0-9+]+/g, ' ')
            .trim();
    }

    function tokens(s, keepStop) {
        return norm(s).split(' ').filter(function (w) {
            return w && (keepStop || !STOP[w]);
        }).map(stem);
    }

    function lev(a, b, max) {
        if (Math.abs(a.length - b.length) > max) return max + 1;
        var prev = [], cur = [], i, j;
        for (j = 0; j <= b.length; j++) prev[j] = j;
        for (i = 1; i <= a.length; i++) {
            cur = [i];
            var rowMin = i;
            for (j = 1; j <= b.length; j++) {
                var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
                cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
                if (cur[j] < rowMin) rowMin = cur[j];
            }
            if (rowMin > max) return max + 1;
            prev = cur;
        }
        return prev[b.length];
    }

    // How alike two single words are (0..1).
    function sim(q, w) {
        if (q === w) return 1;
        var shorter = Math.min(q.length, w.length);
        if (shorter >= 4 && (w.indexOf(q) === 0 || q.indexOf(w) === 0)) return 0.75;
        if (shorter === 3 && q.length === 3 && w.indexOf(q) === 0) return 0.6;
        if (q.length >= 4 && w.length >= 4) {
            var max = (q.length >= 7 && w.length >= 7) ? 2 : 1;
            var d = lev(q, w, max);
            if (d <= max) return d === 1 ? 0.7 : 0.5;
        }
        return 0;
    }

    // ------------------------------------------------------------------ index
    var INDEX = TOPICS.map(function (t) {
        var phrases = [].concat(t.keywords || [], t.synonyms || [], [t.title])
            .map(norm).filter(function (p) { return p.indexOf(' ') > 0; });
        return {
            t: t,
            fields: [
                { w: 5, toks: unique(tokens(t.title)) },
                { w: 4, toks: unique(tokens((t.keywords || []).join(' ') + ' ' + (t.synonyms || []).join(' '))) },
                { w: 2, toks: unique(tokens(t.area)) },
                { w: 1, toks: unique(tokens(t.summary)) }
            ],
            phrases: phrases
        };
    });

    function unique(arr) {
        var seen = {}, out = [];
        arr.forEach(function (x) { if (!seen[x]) { seen[x] = true; out.push(x); } });
        return out;
    }

    function scoreEntry(entry, qToks, qNorm) {
        if (!qToks.length) return 0;
        var total = 0, matched = 0;
        qToks.forEach(function (q) {
            var best = 0;
            entry.fields.forEach(function (f) {
                for (var i = 0; i < f.toks.length; i++) {
                    var s = sim(q, f.toks[i]) * f.w;
                    if (s > best) best = s;
                }
            });
            if (best > 0) matched++;
            total += best;
        });
        var padded = ' ' + qNorm + ' ';
        entry.phrases.forEach(function (p) {
            if (padded.indexOf(' ' + p + ' ') >= 0) total += 6;
        });
        var coverage = matched / qToks.length;
        return total * (0.5 + 0.5 * coverage);
    }

    function rank(query) {
        var qNorm = norm(query);
        var qToks = unique(tokens(query));
        if (!qToks.length) qToks = unique(tokens(query, true));
        return INDEX.map(function (e) {
            var sc = scoreEntry(e, qToks, qNorm);
            if (audience === 'technical' && isTech(e.t)) sc *= TECH_BOOST;
            return { t: e.t, score: sc };
        }).filter(function (r) { return r.score > 0; })
          .sort(function (a, b) { return b.score - a.score; });
    }

    // ------------------------------------------------------------------ sidebar
    function renderList(filter) {
        var shown;
        if (filter && filter.trim()) {
            var f = norm(filter);
            var ranked = rank(filter).filter(function (r) { return r.score >= 2; });
            var ids = {};
            ranked.forEach(function (r) { ids[r.t.id] = true; });
            TOPICS.forEach(function (t) { if (norm(t.title).indexOf(f) >= 0) ids[t.id] = true; });
            shown = TOPICS.filter(function (t) { return ids[t.id]; });
        } else {
            shown = TOPICS.slice();
        }

        var html = '';
        var areas = AREAS.slice();
        TOPICS.forEach(function (t) { if (areas.indexOf(t.area) < 0) areas.push(t.area); });
        var userAreas = areas.filter(function (a) { return TECH_AREAS.indexOf(a) < 0; });
        var techAreas = areas.filter(function (a) { return TECH_AREAS.indexOf(a) >= 0; });
        var groups = audience === 'technical'
            ? [{ label: 'Technical', areas: techAreas }, { label: 'Using MV64-2', areas: userAreas }]
            : [{ label: 'Using MV64-2', areas: userAreas }, { label: 'Technical', areas: techAreas }];
        groups.forEach(function (g) {
            var any = shown.some(function (t) { return g.areas.indexOf(t.area) >= 0; });
            if (!any) return;
            if (techAreas.length) html += '<div class="group-divider">' + esc(g.label) + '</div>';
            g.areas.forEach(function (area) {
                var items = shown.filter(function (t) { return t.area === area; });
                if (!items.length) return;
                html += '<div class="area-heading">' + esc(area.replace(/^Tech:\s*/, '')) + '</div>';
                items.forEach(function (t) {
                    html += '<button type="button" class="topic-link' + (t.id === activeId ? ' active' : '') +
                        '" data-id="' + esc(t.id) + '">' + esc(t.title) + '</button>';
                });
            });
        });
        listEl.innerHTML = html || '<div class="empty-list">No topics match. Try a shorter word, or ask a question above.</div>';
        $('topic-count').textContent = shown.length === TOPICS.length
            ? TOPICS.length + ' topics'
            : shown.length + ' of ' + TOPICS.length + ' topics';
    }

    function markActive() {
        var links = listEl.querySelectorAll('.topic-link');
        for (var i = 0; i < links.length; i++) {
            var on = links[i].getAttribute('data-id') === activeId;
            links[i].classList.toggle('active', on);
            if (on && links[i].scrollIntoView) links[i].scrollIntoView({ block: 'nearest' });
        }
    }

    // ------------------------------------------------------------------ explanation panel
    function list(items, cls, tag) {
        if (!items || !items.length) return '';
        return '<' + tag + ' class="' + cls + '">' + items.map(function (s) {
            return '<li>' + esc(s) + '</li>';
        }).join('') + '</' + tag + '>';
    }

    function chips(ids) {
        var html = (ids || []).map(function (id) {
            var t = byId[id];
            return t ? '<button type="button" class="chip" data-id="' + esc(t.id) + '">' + esc(t.title) + '</button>' : '';
        }).join('');
        return html ? '<div class="chips">' + html + '</div>' : '';
    }

    function topicHtml(t) {
        var related = (t.related || []).filter(function (id) { return byId[id]; });
        return '<div class="area-chip' + (isTech(t) ? ' tech' : '') + '">' + esc(t.area) + '</div>' +
            '<h1 class="topic-title">' + esc(t.title) + '</h1>' +
            '<p class="topic-summary">' + esc(t.summary) + '</p>' +
            '<section class="card"><h3>How it works</h3>' + list(t.steps, 'steps', 'ol') + '</section>' +
            '<section class="card"><h3>Who can use it</h3><div class="who"><span class="role-pill">Role</span><div>' + esc(t.who) + '</div></div></section>' +
            (t.under && t.under.length ? '<section class="card"><h3>Under the hood</h3>' + list(t.under, 'under', 'ul') + '</section>' : '') +
            (t.tips && t.tips.length ? '<section class="card"><h3>Tips</h3>' + list(t.tips, 'tips', 'ul') + '</section>' : '') +
            (related.length ? '<section class="card"><h3>Related</h3>' + chips(related) + '</section>' : '');
    }

    function showTopic(id, opts) {
        var t = byId[id];
        if (!t) return;
        opts = opts || {};
        activeId = id;
        var html = '<div class="panel-inner">';
        if (opts.question) {
            html += '<div class="answer-for">Best answer for <strong>“' + esc(opts.question) + '”</strong></div>';
        }
        html += topicHtml(t);
        if (opts.alsoIds && opts.alsoIds.length) {
            html += '<div class="related-box"><h3>Related topics</h3>' + chips(opts.alsoIds) + '</div>';
        }
        html += '</div>';
        panel.innerHTML = html;
        panel.scrollTop = 0;
        markActive();
        if (!opts.noHash) {
            try { history.replaceState(null, '', '#' + id); } catch (e) { /* file:// in some browsers */ }
        }
    }

    function showNoMatch(question) {
        activeId = null;
        markActive();
        var starters = (META.suggestions || []).filter(function (id) { return byId[id]; });
        if (!starters.length) starters = TOPICS.slice(0, 8).map(function (t) { return t.id; });
        var examples = (META.exampleQuestions || []).map(function (q) {
            return '<button type="button" class="chip" data-ask="' + esc(q) + '">' + esc(q) + '</button>';
        }).join('');
        panel.innerHTML = '<div class="panel-inner no-match">' +
            '<h2>I couldn’t find a clear match for “' + esc(question) + '”</h2>' +
            '<p>Try naming the screen or feature, for example “filters”, “export”, “ownership” or “Metabot”. ' +
            'You can also pick a topic from the list on the left, or start with one of these:</p>' +
            '<section class="card"><h3>Popular topics</h3>' + chips(starters) + '</section>' +
            (examples ? '<section class="card"><h3>Questions you can ask</h3><div class="chips">' + examples + '</div></section>' : '') +
            '</div>';
        panel.scrollTop = 0;
    }

    function ask(question) {
        question = String(question || '').trim();
        if (!question) return;
        var ranked = rank(question);
        if (!ranked.length || ranked[0].score < 3) { showNoMatch(question); return; }
        var best = ranked[0];
        var also = ranked.slice(1).filter(function (r) { return r.score >= best.score * 0.4; })
            .slice(0, 3).map(function (r) { return r.t.id; });
        (best.t.related || []).forEach(function (id) {
            if (also.length < 3 && id !== best.t.id && also.indexOf(id) < 0 && byId[id]) also.push(id);
        });
        showTopic(best.t.id, { question: question, alsoIds: also });
    }

    // ------------------------------------------------------------------ events
    document.addEventListener('click', function (e) {
        var el = e.target.closest ? e.target.closest('[data-id],[data-ask]') : null;
        if (!el) return;
        if (el.hasAttribute('data-ask')) {
            askInput.value = el.getAttribute('data-ask');
            ask(askInput.value);
            return;
        }
        showTopic(el.getAttribute('data-id'));
    });

    askForm.addEventListener('submit', function (e) {
        e.preventDefault();
        ask(askInput.value);
    });

    // Audience toggle (subtle, in the header).
    var audBtns = document.querySelectorAll ? document.querySelectorAll('[data-aud]') : [];
    function syncAudience() {
        for (var i = 0; i < audBtns.length; i++) {
            var on = audBtns[i].getAttribute('data-aud') === audience;
            audBtns[i].classList.toggle('on', on);
            audBtns[i].setAttribute('aria-pressed', on ? 'true' : 'false');
        }
    }
    function setAudience(a) {
        audience = a === 'technical' ? 'technical' : 'everyone';
        try { localStorage.setItem(AUD_KEY, audience); } catch (e) { /* storage blocked */ }
        syncAudience();
        renderList(filterEl.value);
        markActive();
    }
    for (var ai = 0; ai < audBtns.length; ai++) {
        audBtns[ai].addEventListener('click', function (e) { setAudience(e.currentTarget.getAttribute('data-aud')); });
    }
    syncAudience();

    filterEl.addEventListener('input', function () { renderList(filterEl.value); });

    document.addEventListener('keydown', function (e) {
        if (e.key === '/' && document.activeElement !== askInput && document.activeElement !== filterEl) {
            e.preventDefault();
            askInput.focus();
        }
    });

    // Small hook for testing in the browser console: __guide.rank('your question').
    window.__guide = { rank: rank, ask: ask, show: showTopic, audience: function (a) { if (a) setAudience(a); return audience; } };

    // ------------------------------------------------------------------ start
    $('footer-version').textContent = 'Guide v' + (META.version || '1.0.0');
    $('footer-updated').textContent = 'Last updated for MV64-2 ' + (META.mv64Version || '') +
        (META.updated ? ' (' + META.updated + ')' : '');

    renderList('');
    if (!TOPICS.length) {
        panel.innerHTML = '<div class="panel-inner"><p class="muted">No topics loaded. Check that the data folder sits next to this page.</p></div>';
        return;
    }
    var start = decodeURIComponent((location.hash || '').replace(/^#/, ''));
    var qMatch = /[?&]q=([^&#]*)/.exec(location.search || '');
    var q0 = qMatch ? decodeURIComponent(qMatch[1].replace(/\+/g, ' ')) : '';
    if (q0 && !byId[start]) {
        askInput.value = q0;
        ask(q0);
    } else {
        showTopic(byId[start] ? start : TOPICS[0].id, { noHash: !byId[start] });
    }
})();
