# Metadata Repository Functionality

A small, self-contained help page for **MV64-2** users. Type a question such as
*"How do establishment filters work?"* and it shows a plain-English explanation of that feature:
a one-line summary, how it works step by step, who can use it, tips, and related topics.

- Pure HTML, CSS and vanilla JavaScript. No build step, no installs, no internet access needed.
- Works when opened straight from a shared folder or from your own computer.
- Looks like MV64-2: same dark theme, Segoe UI, scrollbars and the green accent.
- Two kinds of topic: **user topics** (what the app does, for everyone) and **technical topics**
  (how it is built: tech stack, architecture, editing internals, layout, storage, roles, releases).
  Technical topics explain concepts, technologies and patterns for presentations to the dev team,
  without internal locations, names or code.

Current content: **guide v1.1.0, last updated for MV64-2 1.2.9** (43 user topics, 31 technical topics).

## How to open it

1. Copy the whole folder (keep `index.html` next to the `css`, `js` and `data` folders).
2. Double-click `index.html`. It opens in your default browser (Edge or Chrome work best).

Using it:

- **Ask a question** in the box at the top and press Enter or **Ask**. You get the best answer, plus up to
  three related topics. If nothing matches, you get a few suggestions to start from.
- **Browse** the topic list on the left, grouped by area. Type in **Filter topics** to narrow it.
- **Everyone / Technical** (top right) sets the audience. *Everyone* (the default) ranks all topics
  equally. *Technical* favours technical topics when ranking answers and lists the technical groups
  first. The choice is remembered on that computer. A link can set it too: `index.html?aud=technical`.
- Technical topics have an extra **Under the hood** card listing the technologies and patterns involved.
- Press `/` to jump to the question box.
- Every topic has its own link (for example `index.html#est-filters`) that you can bookmark or share.
  A question can be linked too: `index.html?q=how do filters work`.

## Folder layout

| Path | What it is |
| --- | --- |
| `index.html` | The page. |
| `css/style.css` | Theme and layout (MV64-2 dark theme). |
| `js/app.js` | Question matching, the topic list and the explanation panel. |
| `data/topics.js` | User content: guide version, area order and the user topics. |
| `data/topics-technical.js` | Technical content: the technical areas and topics (loaded after `topics.js`). |

The content is a script file rather than a separate data file on purpose: browsers block pages opened
from a folder from fetching data files, but they allow a script file.

## Adding or updating a topic

User topics are in `data/topics.js` and technical topics in `data/topics-technical.js`. Topics are added in groups with `window.TOPICS.push( ... );`,
one group per area. To add a topic, copy an existing one in the right group and change it:

```js
{
    id: "est-filters",                       // unique, lower-case, used in links (#est-filters)
    area: "Establishments",                  // must match a name in window.TOPIC_AREAS
    title: "Establishment filters",          // short, shown in the list and as the heading
    summary: "One sentence that answers the question.",
    keywords: ["filter", "filters", "status"],          // words people will type (strong match)
    synonyms: ["narrow down", "refine", "only show"],   // other ways to say it, phrases are fine
    steps: [                                 // "How it works", one plain step per line
        "Open Library > Establishments.",
        "Tick a value in the Filters sidebar."
    ],
    who: "Everyone.",                        // "Who can use it": roles in plain words
    tips: ["Filter first, then export."],    // optional
    related: ["est-browse", "est-export"]   // ids of other topics (either file)
}
```

Technical topics use the same fields plus two more:

```js
{
    id: "t-toolbar",                         // technical ids start with "t-"
    audience: "technical",                   // marks it as technical (boosted by the Technical toggle)
    area: "Tech: Editing internals",         // must match a name in window.TECH_AREAS
    ...
    under: ["contentEditable", "Synthetic input events"]  // optional "Under the hood" list
}
```

How matching works: the question is split into words, common words ("how", "does", "the", ...) are
ignored, and each remaining word is compared with the topic's title (strongest), keywords and synonyms,
area and summary. Close spellings and word starts also count, so "establishmnet" or "filt" still match.
A keyword or synonym phrase that appears word-for-word in the question gets a bonus. If a question
lands on the wrong topic, add the user's wording to the right topic's `keywords` or `synonyms`.
A few technical spellings are normalised before matching: "C#" and "C sharp" become `csharp`,
".NET" becomes `dotnet`, "web view" becomes `webview`, and "front end" / "back end" become one word.
With the **Technical** audience on, technical topics' scores are multiplied by 1.4.
Avoid giving a technical topic the exact everyday phrasing of a user topic (for example
"how does metabot work"), so that *Everyone* still gets the user answer first.

Other things you can change at the top of the file:

- `window.GUIDE_META.version`: bump it when you change the content (shown in the footer).
- `window.GUIDE_META.mv64Version` and `updated`: the MV64-2 release the content matches, and the date.
- `window.GUIDE_META.suggestions` and `exampleQuestions`: what is offered when nothing matches.
- `window.TOPIC_AREAS`: the order of the areas in the left list. A new area also needs adding here.
  Technical areas are listed in `window.TECH_AREAS` at the top of `data/topics-technical.js`.

### Writing rules

- User topics: write for non-technical users. Short sentences, menu names as they appear on screen (File > Export).
- Technical topics: concepts, technologies and patterns are fine (for example "WebView2", "JSON messages",
  "last save wins"). Name public technologies and libraries, but not the app's own files, classes,
  commands or message names, and never paste code.
- Base every statement on what the current MV64-2 release actually does. Check the app or its code.
- **Leave out anything sensitive:** network or share paths, server or machine names, web addresses,
  user names or emails, file names, class or command names, licence details and code.
- Leave out Easter eggs entirely. The Command Centre gets one line only (in the architecture overview,
  saying an admin area exists) and no detail. Developer-only tools are not covered in user topics;
  technical topics mention what the Developer role adds at a high level only.
- Use plain text only (no HTML). Use curly quotes (“ ”) inside text rather than escaped quotes.

Before committing, open `index.html`, ask a couple of questions, and search the content for things that
should never appear, for example drive letters followed by a backslash, double backslashes, or
code or data file extensions.

### Testing in the browser

Press F12 in the browser, open the Console tab and run `__guide.rank("your question")` to see each
topic's score for a question.
