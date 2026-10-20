/* Metadata Repository Functionality: minimalist question-and-answer page.
   Content comes from data/topics.js and data/topics-technical.js (window.TOPICS).
   Ask a question and the single best-matching topic is shown. No network requests,
   so it works from GitHub Pages, a shared folder or file://. */
(function () {
    'use strict';

    var TOPICS = Array.isArray(window.TOPICS) ? window.TOPICS : [];
    var byId = {};
    TOPICS.forEach(function (t) { byId[t.id] = t; });

    var $ = function (id) { return document.getElementById(id); };
    var answerEl = $('answer');
    var askForm = $('ask-form');
    var askInput = $('ask-input');
    var MIN_SCORE = 3;

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
     'app thing things something way anything any some happen happens im ive id ill youre lets also just really').split(/\s+/)
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
            return { t: e.t, score: scoreEntry(e, qToks, qNorm) };
        }).filter(function (r) { return r.score > 0; })
          .sort(function (a, b) { return b.score - a.score; });
    }

    // ------------------------------------------------------------------ answer card
    function list(items, cls, tag) {
        if (!items || !items.length) return '';
        return '<' + tag + ' class="' + cls + '">' + items.map(function (s) {
            return '<li>' + esc(s) + '</li>';
        }).join('') + '</' + tag + '>';
    }

    function areaLabel(t) {
        return t.audience === 'technical'
            ? 'Technical · ' + String(t.area || '').replace(/^Tech:\s*/, '')
            : (t.area || '');
    }

    function section(title, body) {
        return body ? '<section class="part"><h3>' + esc(title) + '</h3>' + body + '</section>' : '';
    }

    function showTopic(id) {
        var t = byId[id];
        if (!t) return false;
        answerEl.innerHTML =
            '<article class="card">' +
                '<div class="area">' + esc(areaLabel(t)) + '</div>' +
                '<h2 class="title">' + esc(t.title) + '</h2>' +
                '<p class="summary">' + esc(t.summary) + '</p>' +
                section('How it works', list(t.steps, 'steps', 'ol')) +
                section('Who can use it', t.who ? '<p>' + esc(t.who) + '</p>' : '') +
                section('Tips', list(t.tips, 'tips', 'ul')) +
                section('Under the hood', t.audience === 'technical' ? list(t.under, 'under', 'ul') : '') +
            '</article>';
        document.body.classList.add('has-answer');
        return true;
    }

    function showMessage(text) {
        answerEl.innerHTML = '<p class="quiet">' + esc(text) + '</p>';
        document.body.classList.add('has-answer');
    }

    function clearAnswer() {
        answerEl.innerHTML = '';
        document.body.classList.remove('has-answer');
    }

    function setUrl(q, id) {
        try {
            var url = location.pathname + (q ? '?q=' + encodeURIComponent(q) : '') + (id ? '#' + id : '');
            history.replaceState(null, '', url);
        } catch (e) { /* some browsers block this on file:// */ }
    }

    // Matches across all topics (user and technical) and shows only the single best one.
    function ask(question, opts) {
        question = String(question || '').trim();
        opts = opts || {};
        if (!question) { clearAnswer(); if (!opts.noUrl) setUrl('', ''); return null; }
        var ranked = rank(question);
        var best = ranked.length && ranked[0].score >= MIN_SCORE ? ranked[0].t : null;
        if (best) showTopic(best.id);
        else showMessage('No match \u2014 try rephrasing.');
        if (!opts.noUrl) setUrl(question, best ? best.id : '');
        return best ? best.id : null;
    }

    // ------------------------------------------------------------------ events
    askForm.addEventListener('submit', function (e) {
        e.preventDefault();
        ask(askInput.value);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === '/' && document.activeElement !== askInput) {
            e.preventDefault();
            askInput.focus();
            askInput.select();
        }
    });

    // Console hook for checking matches: __guide.rank('your question').
    window.__guide = { rank: rank, ask: ask, show: showTopic };

    // ------------------------------------------------------------------ start: empty until asked
    var hashId = decodeURIComponent((location.hash || '').replace(/^#/, ''));
    var qMatch = /[?&]q=([^&#]*)/.exec(location.search || '');
    var q0 = qMatch ? decodeURIComponent(qMatch[1].replace(/\+/g, ' ')) : '';
    if (q0) askInput.value = q0;
    if (byId[hashId]) showTopic(hashId);
    else if (q0) ask(q0, { noUrl: true });
})();
