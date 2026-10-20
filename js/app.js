/* Metadata Repository Functionality: minimalist question-and-answer page.
   Content comes from data/topics.js and data/topics-technical.js (window.TOPICS).
   Ask a question and the single best-matching topic is shown. Typing offers up to four
   suggested questions; asking "help" lists every question. No network requests,
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
    var clearBtn = $('clear-btn');
    var suggestEl = $('suggest');
    var MIN_SCORE = 3;
    var MAX_SUGGEST = 4;
    var AREAS = Array.isArray(window.TOPIC_AREAS) ? window.TOPIC_AREAS : [];
    var TECH_AREAS = Array.isArray(window.TECH_AREAS) ? window.TECH_AREAS : [];

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

    function isHelp(q) {
        q = String(q || '').trim().toLowerCase();
        return q === 'help' || q === '?';
    }

    // Every topic's question, grouped by area: user areas first, then technical areas.
    function showHelp() {
        var areas = AREAS.slice();
        TOPICS.forEach(function (t) { if (areas.indexOf(t.area) < 0) areas.push(t.area); });
        var userAreas = areas.filter(function (a) { return TECH_AREAS.indexOf(a) < 0; });
        var techAreas = areas.filter(function (a) { return TECH_AREAS.indexOf(a) >= 0; });
        var html = '<div class="card help"><h2 class="help-title">All questions</h2>';
        userAreas.concat(techAreas).forEach(function (area) {
            var items = TOPICS.filter(function (t) { return t.area === area; });
            if (!items.length) return;
            var label = TECH_AREAS.indexOf(area) >= 0 ? 'Technical · ' + area.replace(/^Tech:\s*/, '') : area;
            html += '<section class="help-group"><h3>' + esc(label) + '</h3><ul>' +
                items.map(function (t) {
                    return '<li><button type="button" class="help-item" data-id="' + esc(t.id) + '">' +
                        esc(questionOf(t)) + '</button></li>';
                }).join('') + '</ul></section>';
        });
        answerEl.innerHTML = html + '</div>';
        document.body.classList.add('has-answer');
    }

    function questionOf(t) {
        return t.question || t.title;
    }

    // Show a specific topic as the answer, with its question in the box and a shareable URL.
    function askTopic(id) {
        var t = byId[id];
        if (!t) return;
        askInput.value = questionOf(t);
        syncClear();
        closeSuggest();
        showTopic(id);
        setUrl(askInput.value, id);
        window.scrollTo(0, 0);
    }

    // Matches across all topics (user and technical) and shows only the single best one.
    function ask(question, opts) {
        question = String(question || '').trim();
        opts = opts || {};
        if (!question) { clearAnswer(); if (!opts.noUrl) setUrl('', ''); return null; }
        if (isHelp(question)) { showHelp(); if (!opts.noUrl) setUrl(question, ''); return 'help'; }
        var ranked = rank(question);
        var best = ranked.length && ranked[0].score >= MIN_SCORE ? ranked[0].t : null;
        if (best) showTopic(best.id);
        else showMessage('No match \u2014 try rephrasing.');
        if (!opts.noUrl) setUrl(question, best ? best.id : '');
        return best ? best.id : null;
    }

    // Show the clear button only when there is text in the box.
    function syncClear() {
        if (clearBtn) clearBtn.hidden = !askInput.value;
    }

    // ------------------------------------------------------------------ suggestions (combobox)
    var sugItems = [];
    var sugIndex = -1;
    var sugTimer = null;

    function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

    // Subtly mark the typed words where they start a word in the question.
    function highlight(text, typed) {
        var words = String(typed || '').toLowerCase().split(/[^a-z0-9#+.]+/)
            .filter(function (w) { return w.length >= 2; })
            .sort(function (a, b) { return b.length - a.length; });
        if (!words.length) return esc(text);
        var re = new RegExp('(^|[^a-z0-9])(' + words.map(escRe).join('|') + ')', 'ig');
        var out = '', last = 0, m;
        while ((m = re.exec(text))) {
            var start = m.index + m[1].length;
            out += esc(text.slice(last, start)) + '<mark>' + esc(m[2]) + '</mark>';
            last = start + m[2].length;
            if (m[0].length === 0) re.lastIndex++;
        }
        return out + esc(text.slice(last));
    }

    // Ranked with the same scoring as answers; word starts in the question help short partial words.
    function suggestionsFor(typed) {
        var q = norm(typed);
        if (q.replace(/\s/g, '').length < 2 || isHelp(typed)) return [];
        var scores = {};
        rank(typed).forEach(function (r) { scores[r.t.id] = r.score; });
        var last = q.split(' ').pop();
        return TOPICS.map(function (t) {
            var qq = ' ' + norm(questionOf(t)) + ' ' + norm(t.title) + ' ';
            var prefix = (' ' + qq).indexOf(' ' + q) >= 0 ? 4 : (last.length >= 2 && qq.indexOf(' ' + last) >= 0 ? 1.5 : 0);
            return { t: t, s: (scores[t.id] || 0) + prefix };
        }).filter(function (r) { return r.s >= 2; })
          .sort(function (a, b) { return b.s - a.s; })
          .filter(function (r, i, all) { return r.s >= all[0].s * 0.4; })
          .slice(0, MAX_SUGGEST)
          .map(function (r) { return r.t; });
    }

    function renderSuggest() {
        if (!suggestEl) return;
        var typed = askInput.value;
        sugItems = suggestionsFor(typed);
        sugIndex = -1;
        if (!sugItems.length) { closeSuggest(); return; }
        suggestEl.innerHTML = sugItems.map(function (t, i) {
            return '<li role="option" id="sug-' + i + '" class="sug" data-id="' + esc(t.id) + '" aria-selected="false">' +
                highlight(questionOf(t), typed) + '</li>';
        }).join('');
        suggestEl.hidden = false;
        askInput.setAttribute('aria-expanded', 'true');
        askInput.removeAttribute('aria-activedescendant');
    }

    function isSuggestOpen() { return !!suggestEl && !suggestEl.hidden; }

    function closeSuggest() {
        clearTimeout(sugTimer);
        if (!suggestEl) return;
        suggestEl.hidden = true;
        suggestEl.innerHTML = '';
        sugItems = [];
        sugIndex = -1;
        askInput.setAttribute('aria-expanded', 'false');
        askInput.removeAttribute('aria-activedescendant');
    }

    function moveSuggest(delta) {
        if (!sugItems.length) return;
        sugIndex = sugIndex + delta;
        if (sugIndex < -1) sugIndex = sugItems.length - 1;
        if (sugIndex >= sugItems.length) sugIndex = -1;
        var opts = suggestEl.querySelectorAll('.sug');
        for (var i = 0; i < opts.length; i++) {
            var on = i === sugIndex;
            opts[i].classList.toggle('active', on);
            opts[i].setAttribute('aria-selected', on ? 'true' : 'false');
        }
        if (sugIndex >= 0) askInput.setAttribute('aria-activedescendant', 'sug-' + sugIndex);
        else askInput.removeAttribute('aria-activedescendant');
    }

    // Back to the empty state: no text, no answer or help list, clean URL, focus in the box.
    function resetPage() {
        closeSuggest();
        askInput.value = '';
        syncClear();
        clearAnswer();
        setUrl('', '');
        askInput.focus();
    }

    // ------------------------------------------------------------------ events
    askForm.addEventListener('submit', function (e) {
        e.preventDefault();
        closeSuggest();
        ask(askInput.value);
    });

    askInput.addEventListener('input', function () {
        syncClear();
        clearTimeout(sugTimer);
        if (norm(askInput.value).replace(/\s/g, '').length < 2) { closeSuggest(); return; }
        sugTimer = setTimeout(renderSuggest, 120);
    });

    askInput.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown' || e.key === 'Down') {
            if (isSuggestOpen()) { e.preventDefault(); moveSuggest(1); }
        } else if (e.key === 'ArrowUp' || e.key === 'Up') {
            if (isSuggestOpen()) { e.preventDefault(); moveSuggest(-1); }
        } else if (e.key === 'Enter') {
            if (isSuggestOpen() && sugIndex >= 0) {
                e.preventDefault();
                askTopic(sugItems[sugIndex].id);
            }
        } else if (e.key === 'Escape' || e.key === 'Esc') {
            e.preventDefault();
            if (isSuggestOpen()) closeSuggest();
            else resetPage();
        }
    });

    askInput.addEventListener('blur', function () { closeSuggest(); });

    if (suggestEl) {
        // Keep focus in the box while clicking a suggestion, so blur doesn't close it first.
        suggestEl.addEventListener('mousedown', function (e) { e.preventDefault(); });
        suggestEl.addEventListener('click', function (e) {
            var li = e.target.closest ? e.target.closest('.sug') : null;
            if (li) askTopic(li.getAttribute('data-id'));
        });
    }

    // Help list: each question asks itself.
    answerEl.addEventListener('click', function (e) {
        var b = e.target.closest ? e.target.closest('.help-item') : null;
        if (b) askTopic(b.getAttribute('data-id'));
    });

    document.addEventListener('click', function (e) {
        if (isSuggestOpen() && !(e.target.closest && e.target.closest('.ask-wrap'))) closeSuggest();
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', function (e) {
            e.preventDefault();
            resetPage();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === '/' && document.activeElement !== askInput) {
            e.preventDefault();
            askInput.focus();
            askInput.select();
        }
    });

    // Short placeholder on narrow screens so the help hint isn't cut off mid-word.
    var fullPlaceholder = askInput.getAttribute('placeholder') || '';
    function syncPlaceholder() {
        var narrow = window.matchMedia && window.matchMedia('(max-width: 600px)').matches;
        askInput.setAttribute('placeholder', narrow ? 'Ask, or type help' : fullPlaceholder);
    }
    syncPlaceholder();
    if (window.addEventListener) window.addEventListener('resize', syncPlaceholder);

    // Console hook for checking matches: __guide.rank('your question').
    window.__guide = { rank: rank, ask: ask, show: showTopic, clear: resetPage, suggest: suggestionsFor, askTopic: askTopic };

    // ------------------------------------------------------------------ start: empty until asked
    var hashId = decodeURIComponent((location.hash || '').replace(/^#/, ''));
    var qMatch = /[?&]q=([^&#]*)/.exec(location.search || '');
    var q0 = qMatch ? decodeURIComponent(qMatch[1].replace(/\+/g, ' ')) : '';
    if (q0) askInput.value = q0;
    syncClear();
    if (byId[hashId]) showTopic(hashId);
    else if (q0) ask(q0, { noUrl: true });
})();
