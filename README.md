# Metadata Repository Functionality

A minimalist "ask how anything works" page for the **Metadata Repository** desktop app.
Type a question such as *"How does the toolbar work?"* and it shows the single best-matching
explanation in one clean card: a one-line summary, how it works step by step, who can use it,
tips, and (for technical topics) what is under the hood.

- Pure HTML, CSS and vanilla JavaScript. No build step, no installs, no network requests.
- Works on GitHub Pages, from a shared folder, or opened straight from your own computer.
- Dark theme with the brand green (#005B38), Segoe UI, large type that stays readable when projected.
- Two kinds of topic, matched together with no audience bias: **user topics** (what the app does)
  and **technical topics** (how it is built: tech stack, architecture, editing internals, layout,
  storage, roles, releases). Technical topics explain concepts, technologies and patterns,
  without internal locations, names or code.

Current content: **guide v1.3.2, written for Metadata Repository app release 1.2.9**
(43 user topics, 31 technical topics). The version is recorded here only; the page has no footer.

## How to use it

- The page starts empty: a heading, a subtitle and one question box.
- **Suggestions:** after two or more characters, up to four suggested questions drop down under the box,
  with the typed words subtly highlighted. Click one, or use Up/Down and Enter, to ask it straight away.
  Enter with nothing highlighted asks what you typed. Escape closes the list first; a second Escape clears.
- **Help:** ask `help` (or `?`) to list every question, grouped by area (user areas first, then technical).
  Click any question to see its answer.
- The **?** at the end of the subtitle is the help hint: on the empty page it flashes softly green twice,
  first about 1.5 s after the page opens and then every 10 s. It stays still while you type, while
  suggestions, an answer or the help list are showing, while the tab is hidden, and always when the
  system asks for reduced motion. Click it, or focus it and press Enter or Space, to open the help list.
  A no-match answer also offers "see all questions".
- **Ask a question** and press Enter or **Ask**. The best-matching topic appears below the box.
  If nothing matches well enough, you see a single line: "No match — try rephrasing, or see all questions".
- Press `/` anywhere to jump to the question box.
- Click **×** (shown only when there is text, set well apart from Ask) or press **Esc** in the box
  to clear the question and the answer (or help list) and return to the empty page with a clean link.
- After you ask, the address bar holds a shareable link, for example
  `index.html?q=how%20does%20the%20toolbar%20work#t-toolbar`. Links work in either form:
  `index.html?q=how do filters work` (asks the question) or `index.html#est-filters` (opens that topic).

To use it offline, copy the whole folder (keep `index.html` next to the `css`, `js` and `data` folders)
and double-click `index.html`.

## Folder layout

| Path | What it is |
| --- | --- |
| `index.html` | The page. |
| `css/style.css` | Minimalist dark theme. |
| `js/app.js` | Question matching, suggestions, the help list and the answer card. |
| `data/topics.js` | User topics, plus a small note of the app release the content describes. |
| `data/topics-technical.js` | Technical topics (loaded after `topics.js`). |

The content is a script file rather than a separate data file on purpose: browsers block pages opened
from a folder from fetching data files, but they allow a script file.

## Adding or updating a topic

User topics are in `data/topics.js` and technical topics in `data/topics-technical.js`. Topics are added in groups with `window.TOPICS.push( ... );`,
one group per area. To add a topic, copy an existing one in the right group and change it:

```js
{
    id: "est-filters",                       // unique, lower-case, used in links (#est-filters)
    area: "Establishments",                  // shown as the small label above the title
    title: "Establishment filters",          // short, shown as the heading
    question: "How do establishment filters work?",  // natural question used in suggestions and help
    summary: "One sentence that answers the question.",
    keywords: ["filter", "filters", "status"],          // words people will type (strong match)
    synonyms: ["narrow down", "refine", "only show"],   // other ways to say it, phrases are fine
    steps: [                                 // "How it works", one plain step per line
        "Open Library > Establishments.",
        "Tick a value in the Filters sidebar."
    ],
    who: "Everyone.",                        // "Who can use it": roles in plain words
    tips: ["Filter first, then export."],    // optional
    related: ["est-browse", "est-export"]   // optional; kept for editors, not shown on the page
}
```

Technical topics use the same fields plus two more:

```js
{
    id: "t-toolbar",                         // technical ids start with "t-"
    audience: "technical",                   // marks it as technical (adds the Under the hood section)
    area: "Tech: Editing internals",         // shown as "Technical · Editing internals"
    ...
    under: ["contentEditable", "Synthetic input events"]  // optional "Under the hood" list
}
```

How matching works: the question is split into words, common words ("how", "does", "the", ...) are
ignored, and each remaining word is compared with every topic's title (strongest), keywords and synonyms,
area and summary. Close spellings and word starts also count, so "establishmnet" or "filt" still match.
A keyword or synonym phrase that appears word-for-word in the question gets a bonus. Only the single
highest-scoring topic is shown, and only if it scores at least 3. If a question lands on the wrong topic,
add the user's wording to the right topic's `keywords` or `synonyms`.
A few technical spellings are normalised before matching: "C#" and "C sharp" become `csharp`,
".NET" becomes `dotnet`, "web view" becomes `webview`, and "front end" / "back end" become one word.
Avoid giving a technical topic the exact everyday phrasing of a user topic (for example
"how does metabot work"), so everyday questions still get the user answer.

`window.GUIDE_META` at the top of `data/topics.js` records the app release the content describes and
the date it was last checked. It is not shown on the page; update it alongside the version above.

### Writing rules

- User topics: write for non-technical users. Short sentences, menu names as they appear on screen (File > Export).
- Technical topics: concepts, technologies and patterns are fine (for example "WebView2", "JSON messages",
  "last save wins"). Name public technologies and libraries, but not the app's own files, classes,
  commands or message names, and never paste code.
- Base every statement on what the current Metadata Repository app release actually does. Check the app or its code.
- **Leave out anything sensitive:** network or share paths, server or machine names, web addresses,
  user names or emails, file names, class or command names, licence details and code.
- Leave out Easter eggs entirely. The Command Centre gets one line only (in the architecture overview,
  saying an admin area exists) and no detail. Developer-only tools are not covered in user topics;
  technical topics mention what the Developer role adds at a high level only.
- Use plain text only (no HTML). Use curly quotes (“ ”) inside text rather than escaped quotes.

Before committing, open `index.html`, ask a couple of questions, and search the content for things that
should never appear, for example drive letters followed by a backslash, double backslashes, web addresses,
or code or data file extensions. The repository and its GitHub Pages site are **public**, so treat
every line as published.

### Testing in the browser

Press F12 in the browser, open the Console tab and run `__guide.rank("your question")` to see each
topic's score for a question.
