/* Metadata Repository Functionality: technical topics (audience: "technical").
   Written for developers and technical audiences from the Metadata Repository app (release 1.2.9).
   Concepts, technologies and patterns only. Never add share paths, drive letters, server names,
   web addresses, user names, credentials, licence text, source code, or exact internal
   file, class or command names. No Easter eggs. The admin area gets one line in the overview only. */

window.TECH_AREAS = [
    "Tech: How it's built",
    "Tech: Architecture",
    "Tech: Editing internals",
    "Tech: UI & layout",
    "Tech: Data & storage",
    "Tech: Security & roles",
    "Tech: Releases",
    "Tech: Feature internals",
    "Tech: Design & quality"
];
window.TOPIC_AREAS = (window.TOPIC_AREAS || []).concat(window.TECH_AREAS);
window.TOPICS = window.TOPICS || [];

/* ============================== How it's built ============================== */
window.TOPICS.push(
{
    id: "t-stack",
    audience: "technical",
    area: "Tech: How it's built",
    title: "The tech stack at a glance",
    question: "What is the tech stack?",
    summary: "The Metadata Repository is a Windows desktop app written in C# on .NET 8, with a WPF window that hosts a modern web UI (HTML, CSS and JavaScript) through WebView2.",
    keywords: ["tech stack", "stack", "built with", "built in", "technology", "technologies", "framework", "language", "languages", "platform"],
    synonyms: ["what is it built in", "what is it built with", "what is it written in", "what language", "what framework", "how is it made", "tools used"],
    steps: [
        ".NET 8: Microsoft's free runtime and framework. It runs the desktop app and provides file, network and database access.",
        "C#: the programming language of the desktop side (the “host”). It reads and writes the repository, checks permissions and runs exports.",
        "WPF (Windows Presentation Foundation): the .NET toolkit for Windows desktop windows. It provides the main window, splash screen and native dialogs.",
        "XAML: the markup language WPF uses to lay out windows, a bit like HTML for desktop screens.",
        "WebView2: Microsoft's embeddable Edge (Chromium) browser control. It shows the web UI inside the WPF window.",
        "HTML: the structure of every page you see, such as menus, forms, cards and the phone panel.",
        "CSS: the styling, including the dark theme, layout, spacing and scrollbars.",
        "JavaScript (not Java; they are unrelated languages): the page behaviour, such as menus, forms, filters, the editor toolbar, the phone apps and talking to the host.",
        "JSON: the text data format every record is stored in, from data elements to establishments, roles and messages.",
        "Windows authentication: you are identified by your Windows sign-in, so there is no separate login.",
        "SQL Server client library: used by the Data Warehouse page to query SQL Server with Windows Integrated Security.",
        "Velopack: an open-source installer and auto-update framework that packages releases and updates the app when it starts.",
        "EPPlus: a public .NET library for Excel files. In 1.2.9 it reads spreadsheets in an admin import tool. User exports are CSV, JSON, HTML or PNG, not Excel.",
        "CodeMirror and highlight.js: open-source web libraries for the SQL code editor in data element forms and SQL highlighting in dictionaries.",
        "Visual Studio, Git and GitHub: the tools used to build, version and review the code."
    ],
    who: "Technical audiences. Nothing here changes how users work.",
    tips: [
        "Think of the Metadata Repository app as a small website that runs inside its own private browser, with a C# back office next to it on your PC.",
        "There is no web server or central database for the repository itself. Data lives as JSON files in a shared folder."
    ],
    under: ["C# / .NET 8", "WPF + XAML", "WebView2 (Chromium)", "HTML / CSS / JavaScript", "JSON", "Velopack", "SQL Server client", "EPPlus", "CodeMirror", "highlight.js"],
    related: ["t-architecture", "t-wpf-xaml", "t-webview2", "t-html-css-js", "t-libraries"]
},
{
    id: "t-dotnet-csharp",
    audience: "technical",
    area: "Tech: How it's built",
    title: ".NET 8 and C#",
    question: "What are .NET 8 and C# used for?",
    summary: "The desktop host is a C# application on .NET 8 for Windows. It does everything that needs the file system, the network, Windows or a database.",
    keywords: [".net", "dotnet", "net 8", "c#", "csharp", "c sharp", "backend", "back end", "host", "desktop"],
    synonyms: ["what is .net", "what is c#", "server side", "back-end code", "desktop code"],
    steps: [
        ".NET 8 is the runtime: it runs the compiled app and supplies libraries for files, JSON, HTTP, Windows identity and SQL.",
        "C# is the language the host is written in. The main window's code is split into partial classes, roughly one per feature area (establishments, ownership, exports, the phone, Metabot networking and so on).",
        "The host reads and writes the JSON repository, enforces roles and ownership on every write, runs the native Save and Open dialogs, produces some exports, and talks to SQL Server and the AI services.",
        "It never draws the main UI itself. It sends data to the web pages and reacts to messages they send."
    ],
    who: "Technical audiences.",
    tips: [
        "“Backend” in the Metadata Repository app means this local C# host on each PC, not a server.",
        "The project targets Windows only, because WPF and WebView2 are Windows technologies."
    ],
    under: [".NET 8 (Windows)", "C# partial classes", "System.Text.Json", "async/await"],
    related: ["t-stack", "t-bridge", "t-wpf-xaml"]
},
{
    id: "t-wpf-xaml",
    audience: "technical",
    area: "Tech: How it's built",
    title: "WPF and XAML",
    question: "What are WPF and XAML?",
    summary: "WPF is the Windows desktop toolkit that provides the Metadata Repository app's window, and XAML is the markup that describes that window.",
    keywords: ["wpf", "xaml", "window", "windows presentation foundation", "splash", "window chrome", "desktop ui"],
    synonyms: ["what is xaml", "what is wpf", "native window", "title bar buttons", "maximise", "maximize"],
    steps: [
        "XAML is an XML-based markup language. The Metadata Repository app uses it to declare the main window, the splash screen and the styles of the window buttons.",
        "The main window is borderless: it draws its own minimise, maximise and close buttons in the dark theme, and a small helper makes it maximise exactly into the monitor's work area, taskbar included, on any screen or scaling.",
        "Almost the whole window is one WebView2 control, so the visible app is web content.",
        "WPF still supplies native pieces: the splash screen (version and update status), Windows Save and Open dialogs, folder pickers, and the startup “repository unavailable” dialog.",
        "Native dialogs are opened once the current web message has finished, so the web view never freezes partway through a request."
    ],
    who: "Technical audiences.",
    tips: [
        "If you know HTML, XAML will feel familiar: nested elements with attributes, but for desktop controls.",
        "Most UI work in the Metadata Repository app happens in HTML and CSS, not XAML."
    ],
    under: ["WPF", "XAML", "Borderless window with custom chrome", "Per-monitor DPI awareness"],
    related: ["t-webview2", "t-stack", "t-dialogs", "t-startup"]
},
{
    id: "t-webview2",
    audience: "technical",
    area: "Tech: How it's built",
    title: "WebView2",
    question: "What is WebView2?",
    summary: "WebView2 is Microsoft's embedded Edge browser control. The Metadata Repository app uses it to run its HTML pages inside the desktop window.",
    keywords: ["webview", "webview2", "edge", "chromium", "browser control", "embedded browser", "virtual host"],
    synonyms: ["what is webview2", "how does the web ui run", "browser inside the app", "frontend host"],
    steps: [
        "At startup the host creates a WebView2 environment with its own private browser profile on the PC, so the app's cookies and local storage are separate from your normal browser.",
        "The app's web files ship next to the program. The host maps them to a private virtual web address, so pages load as if from a website but come straight from local disk.",
        "A second private address serves your local Gallery captures to the phone panel.",
        "Pages talk to the host through WebView2's built-in messaging channel (see Shell and web UI messaging).",
        "Because it is Chromium, the pages can use modern HTML, CSS and JavaScript without old-browser workarounds."
    ],
    who: "Technical audiences.",
    tips: [
        "The WebView2 runtime ships with modern Windows and updates with Edge.",
        "The code editor and SQL highlighting libraries load from a public CDN. If that isn't reachable, the code field falls back to a plain text box."
    ],
    under: ["Microsoft Edge WebView2", "Virtual host-to-folder mapping", "Private user-data folder", "Web messaging"],
    related: ["t-bridge", "t-html-css-js", "t-wpf-xaml"]
},
{
    id: "t-html-css-js",
    audience: "technical",
    area: "Tech: How it's built",
    title: "HTML, CSS and JavaScript (not Java)",
    question: "How are HTML, CSS and JavaScript used (and is it Java)?",
    summary: "Every screen is a plain HTML page styled with CSS and driven by vanilla JavaScript, with no front-end framework and no build step.",
    keywords: ["html", "css", "javascript", "js", "java", "frontend", "front end", "vanilla", "framework", "dom"],
    synonyms: ["is it java", "java or javascript", "react", "angular", "front-end code", "web ui", "client side"],
    steps: [
        "HTML: each area (Home, Data Elements, Dictionaries, Data Models, Establishments, Data Warehouse, Compare CSV and so on) is its own page. Moving between areas is a normal page navigation.",
        "CSS: each area has its own stylesheet, and components built in script carry inline styles in the same palette. See Theming and CSS.",
        "JavaScript: plain browser JavaScript with no React, Angular or bundler. A shared core script on every page provides menus, forms, dirty tracking, save handling and host messaging. Each page adds its own script, and the phone panel has one large script of its own.",
        "JavaScript is not Java. Java is a separate language that the Metadata Repository app does not use anywhere.",
        "State that must survive a page change (for example which collection is open) is kept in the browser's session storage; personal preferences go in local storage."
    ],
    who: "Technical audiences.",
    tips: [
        "Changing a page usually means editing its HTML, CSS and script; there is nothing to compile on the web side.",
        "This guide is built the same way: plain HTML, CSS and JavaScript."
    ],
    under: ["HTML5", "CSS3", "Vanilla JavaScript (ES2015+)", "Session and local storage", "No framework, no bundler"],
    related: ["t-layout", "t-theming", "t-bridge", "t-stack"]
},
{
    id: "t-json",
    audience: "technical",
    area: "Tech: How it's built",
    title: "JSON as the data format",
    question: "Why is JSON the data format?",
    summary: "JSON is a simple text format for structured data. The Metadata Repository app stores almost everything as JSON files and sends JSON between the pages and the host.",
    keywords: ["json", "data format", "file format", "schema", "record format", "serialisation", "serialization"],
    synonyms: ["what is json", "what format", "text files"],
    steps: [
        "JSON writes data as named values, lists and nested objects in plain text, so it is human-readable and easy for both C# and JavaScript to work with.",
        "Each data element is one JSON file holding a list of its versions, newest first.",
        "Data models, dictionaries, establishments, ownership records, roles, feedback, messages and subscriptions are JSON files too.",
        "The host reads and writes JSON with .NET's built-in JSON support. Pages receive it as ready-to-use JavaScript objects.",
        "Fields added in newer releases are filled in with defaults when an older file is opened, so old files keep working."
    ],
    who: "Technical audiences.",
    tips: [
        "Because records are plain files, they can be backed up, compared and versioned like any document.",
        "Rich text is stored as HTML text inside JSON fields."
    ],
    under: ["JSON", "System.Text.Json", "JavaScript objects", "Schema-tolerant loading"],
    related: ["t-storage", "t-concurrency", "t-toolbar"]
},
{
    id: "t-libraries",
    audience: "technical",
    area: "Tech: How it's built",
    title: "Libraries and packages used",
    question: "Which libraries and packages are used?",
    summary: "The Metadata Repository app keeps third-party dependencies small: a handful of NuGet packages on the host and two web libraries on the pages.",
    keywords: ["libraries", "packages", "nuget", "dependencies", "epplus", "velopack", "sqlclient", "codemirror", "highlight.js", "excel library"],
    synonyms: ["third party", "what packages", "excel export library", "open source", "dependency list"],
    steps: [
        "WebView2 SDK: hosts the web UI in the WPF window.",
        "Velopack: packages each release and handles the startup update check, download, install and restart.",
        "Microsoft SQL Server client: connects the Data Warehouse page to SQL Server using Windows Integrated Security.",
        "Windows account management (part of .NET): reads your display name for your profile and the signature block.",
        "EPPlus: reads Excel workbooks for an admin import tool. User-facing exports don't use Excel; they are CSV, JSON, HTML or PNG.",
        "CodeMirror (web): a code editor with line numbers and SQL highlighting, used for the derivation logic field.",
        "highlight.js (web): colours SQL in dictionary pages."
    ],
    who: "Technical audiences.",
    tips: [
        "Everything else, including the rich-text toolbar, the diagram, filters and CSV compare, is written in-house in plain JavaScript.",
        "Library licensing is handled in the project settings and isn't covered here."
    ],
    under: ["NuGet", "WebView2 SDK", "Velopack", "Microsoft.Data.SqlClient", "EPPlus", "CodeMirror 5", "highlight.js 11"],
    related: ["t-stack", "t-exports", "t-releases"]
},
{
    id: "t-tools",
    audience: "technical",
    area: "Tech: How it's built",
    title: "Development tools: Visual Studio, Git and GitHub",
    question: "Which development tools are used?",
    summary: "The app is built in Visual Studio, versioned with Git, and reviewed and merged through pull requests on GitHub.",
    keywords: ["visual studio", "git", "github", "pull request", "pr", "branch", "solution", "build", "ide"],
    synonyms: ["how do developers work", "source control", "version control", "code review", "dev workflow"],
    steps: [
        "Visual Studio opens the solution, builds the .NET 8 desktop app, and runs and debugs it on a developer's PC.",
        "Git records every change as a commit. Work happens on feature branches so the main branch stays stable.",
        "GitHub hosts the private repository. Changes go up as pull requests, are reviewed, and are merged into the main branch.",
        "A developer tests a branch locally in Visual Studio before it is merged.",
        "Releases are cut from the main branch (see Releases and updates)."
    ],
    who: "Technical audiences.",
    tips: [
        "Small, focused pull requests per feature keep merges low-risk.",
        "Web files are copied next to the program at build time, so a UI change still needs a build to appear in the app."
    ],
    under: ["Visual Studio", "Git", "GitHub pull requests", "Feature branches"],
    related: ["t-releases", "t-stack"]
}
);

/* ============================== Architecture ============================== */
window.TOPICS.push(
{
    id: "t-architecture",
    audience: "technical",
    area: "Tech: Architecture",
    title: "Architecture overview",
    question: "What is the architecture?",
    summary: "Three layers: a web UI inside the app, a C# desktop host on each PC, and a shared folder of JSON files that everyone's copy reads and writes.",
    keywords: ["architecture", "overview", "design", "layers", "components", "how it fits together", "system design", "backend", "frontend"],
    synonyms: ["big picture", "how does it all work", "high level design", "structure of the app", "client server"],
    steps: [
        "Web UI (front end): HTML pages running in WebView2. They draw everything, hold page state, and send requests to the host.",
        "Desktop host (back end): the C# app on the same PC. It owns file access, permission checks, native dialogs, exports, SQL and the AI calls.",
        "Repository: a shared network folder of JSON files organised by category (configuration, data elements, data models, dictionaries, establishments and so on). It is the single source of truth.",
        "Every PC runs its own host against the same shared folder. There is no central application server; coordination happens through the files.",
        "A background timer on each PC picks up role, ownership and watched-item changes made by other people.",
        "Optional outside services: SQL Server for the Data Warehouse, and an AI provider for Metabot.",
        "There is also an admin area for administrators."
    ],
    who: "Technical audiences.",
    tips: [
        "Treat the host as an API: pages never touch files directly; they ask the host by named command.",
        "Most features follow the same path: page asks, host checks, host reads or writes JSON, host replies."
    ],
    under: ["Embedded web UI", "Local host process", "File-based shared repository", "Polling for changes"],
    related: ["t-bridge", "t-storage", "t-startup", "t-auth-roles"]
},
{
    id: "t-bridge",
    audience: "technical",
    area: "Tech: Architecture",
    title: "How the shell and web UI talk to each other",
    question: "How do the shell and web UI talk to each other?",
    summary: "Pages send small JSON messages naming a command; the host runs it and answers by calling a function in the page.",
    keywords: ["messages", "message", "bridge", "commands", "command", "host messages", "interop", "ipc", "api", "request", "response"],
    synonyms: ["how does javascript talk to c#", "how does the frontend talk to the backend", "communication", "message passing", "callback"],
    steps: [
        "When a page needs something (load a record, save, export, list tables), it posts a JSON message through WebView2's messaging channel. Each message names a command and carries its arguments.",
        "The host has one message handler that reads the command name and routes it to the matching C# method. There are well over a hundred named commands, grouped by feature.",
        "The host answers by running a named function in the page, passing the result as JSON. Some answers are pushed without a request, such as role changes, offline status or watched-item updates.",
        "Writes use a request ID: the page sends a unique ID, and the host replies with success or failure for that ID. The page only says “Saved” after a successful reply.",
        "If the shared folder can't be reached during a command, the host catches it, switches to offline mode, and tells the page, so a dropped connection never crashes the app.",
        "On every page load the host injects who you are, your role and the offline state before the page asks for anything."
    ],
    who: "Technical audiences.",
    tips: [
        "Pattern: request/response by command name, plus host-to-page push notifications. Similar to a tiny local API without HTTP.",
        "Because both sides speak JSON, the same objects flow from file to host to page without conversion layers."
    ],
    under: ["WebView2 web messaging", "Command routing", "Request IDs for writes", "Host-to-page script calls", "Push notifications"],
    related: ["t-architecture", "t-editing-flow", "t-offline-cache", "t-webview2"]
},
{
    id: "t-startup",
    audience: "technical",
    area: "Tech: Architecture",
    title: "What happens at startup",
    question: "What happens at startup?",
    summary: "Splash and update check, repository check, WebView2 start-up, role lookup, then the Home page and the background timer.",
    keywords: ["startup", "start up", "launch", "boot", "splash", "initialise", "initialize", "loading"],
    synonyms: ["what happens when it opens", "startup sequence", "app start", "load order"],
    steps: [
        "The splash screen shows the version and checks for an update. If one exists it downloads, installs and restarts (see Releases and updates).",
        "The main window checks it can reach the shared repository. If not, it offers Retry, Browse for a folder, Continue with limited features, or Quit.",
        "WebView2 starts with the app's private browser profile, and the local web files are mapped to the app's private address.",
        "Your role is looked up from your Windows sign-in (User if you aren't listed).",
        "The Home page loads. On each page load the host injects your identity, role and offline state.",
        "A 15-second background timer starts to pick up changes and reconnect after outages (see Background refresh)."
    ],
    who: "Technical audiences.",
    tips: [
        "A slow first start is usually the update check or the shared folder being slow to answer.",
        "“Continue with limited features” stops the timer, and the session stays offline until restart."
    ],
    under: ["Velopack startup hook", "Repository reachability probe", "WebView2 environment", "Dispatcher timer"],
    related: ["t-releases", "t-timer", "t-offline-cache", "t-auth-roles"]
},
{
    id: "t-timer",
    audience: "technical",
    area: "Tech: Architecture",
    title: "Background refresh timer",
    question: "How does the background refresh timer work?",
    summary: "Every 15 seconds each copy of the app re-checks roles, ownership and watched items, and retries the repository after an outage.",
    keywords: ["timer", "polling", "poll", "refresh", "background", "15 seconds", "live update", "backoff"],
    synonyms: ["how do changes appear", "auto refresh", "real time", "how often does it check"],
    steps: [
        "A timer on the host's UI thread fires every 15 seconds.",
        "It re-reads your role and the open collection's ownership, and pushes the result to the page, which switches between read-only and editable without a reload.",
        "It checks watched items (by comparing file change times with when you last saw them) and pushes subscription badges and ownership request updates.",
        "If the repository was unreachable, it probes it first. On failure it backs off (doubling the wait, up to two minutes). On success it clears offline mode and tells the page.",
        "In limited mode, chosen at startup, the timer stops entirely."
    ],
    who: "Technical audiences.",
    tips: [
        "Polling a shared folder is simple and robust, but changes take up to about 15 seconds to appear on other PCs.",
        "Writes never rely on the timer: every write re-checks permissions at the moment it happens."
    ],
    under: ["Polling", "Exponential backoff", "Last-write-time comparison", "Host-to-page push"],
    related: ["t-offline-cache", "t-auth-roles", "watch-subscriptions"]
}
);

/* ============================== Editing internals ============================== */
window.TOPICS.push(
{
    id: "t-editing-flow",
    audience: "technical",
    area: "Tech: Editing internals",
    title: "How editing works end to end",
    question: "How does editing work end to end?",
    summary: "Open, edit, track unsaved changes, save with Ctrl+S, version, delete and restore, with the host re-checking permissions before every write.",
    keywords: ["editing", "edit flow", "end to end", "save flow", "write path", "lifecycle", "editor internals"],
    synonyms: ["how does editing work", "how does saving work", "what happens when i save", "how does an edit get saved", "editing pipeline"],
    steps: [
        "Open: the page asks the host for the record. The host reads the JSON file and sends it back, and the page builds the form (plain inputs, rich-text fields, code fields, permitted-value grids).",
        "Read-only or editable: the host also sends what you may do with this collection. Without edit rights, inputs are locked and edit menu items are removed.",
        "Edit: listeners on the form mark the page as having unsaved changes. Toolbar actions raise the same signal.",
        "Save (Ctrl+S or File > Save): the page commits the field in focus, collects the form into a JSON object, and posts a write command with a request ID.",
        "Host checks, in order: is the repository reachable (not offline); your role re-read from the roles file now, not the cached one; and the collection's ownership re-read now. Any failure refuses the write with a reason.",
        "Write: the host writes the file, refreshes the collection's index so lists update, and replies OK for that request ID. The page clears the unsaved state and shows Saved.",
        "Failure: the page puts the unsaved state back and shows the reason, so nothing is silently lost.",
        "Save New Version: the host closes the current version the day before today, adds the new version from today with an open end date, and keeps all versions in the same file, newest first.",
        "Delete is a soft delete: the file moves into the collection's deleted area. Restore moves it back, and offers a rename to the next free ID if the original is taken."
    ],
    who: "Technical audiences. Users see this as Save, Save New Version, Delete and Deleted Items.",
    tips: [
        "The UI hiding a button is a convenience; the host check is the real gate.",
        "The “Saved” message is host-confirmed, never optimistic."
    ],
    under: ["Form generation from JSON", "Dirty flag", "Request-ID writes", "Server-side-style re-validation", "Soft delete", "Effective-dated versions"],
    related: ["t-dirty-ctrls", "t-toolbar", "t-auth-roles", "t-concurrency", "de-versions"]
},
{
    id: "t-dirty-ctrls",
    audience: "technical",
    area: "Tech: Editing internals",
    title: "Unsaved-change tracking and Ctrl+S under the hood",
    question: "How do unsaved-change tracking and Ctrl+S work under the hood?",
    summary: "One shared dirty flag per page, set by input and change events and cleared only after a confirmed save, with a single Ctrl+S handler routing to the right save.",
    keywords: ["dirty flag", "dirty", "unsaved", "ctrl+s", "keyboard", "beforeunload", "navigation guard", "input event"],
    synonyms: ["how does unsaved tracking work", "how does ctrl s work", "save shortcut internals", "leave page warning"],
    steps: [
        "The shared core script keeps one unsaved-changes flag per page.",
        "Capture-phase input and change listeners on the form area set the flag and show “Unsaved changes”. They ignore read-only users and tool panels that have nothing to save.",
        "Browser formatting commands don't always fire an input event in WebView2, so the editor toolbar sends one itself after every action.",
        "Leaving through the app's own navigation shows a Save / Discard / Cancel dialog. Closing or reloading the page triggers the browser's own leave-page check.",
        "Ctrl+S is one document-level key handler. It blocks the browser default, blurs the focused field so its value commits, checks you can edit, then calls the page's save. Pages with their own save (dictionaries, establishment folders) register their own handler.",
        "The flag is cleared only when the host confirms the write. A refused write sets it again."
    ],
    who: "Technical audiences.",
    tips: [
        "When adding a new control that changes data without typing, make it fire an input event so it joins dirty tracking.",
        "Tool panels opt out of dirty tracking so using them never triggers a false warning."
    ],
    under: ["Event capture", "Synthetic InputEvent", "beforeunload", "Single keydown handler", "Host-confirmed save"],
    related: ["t-editing-flow", "t-toolbar", "saving", "unsaved-changes"]
},
{
    id: "t-toolbar",
    audience: "technical",
    area: "Tech: Editing internals",
    title: "The HTML editing toolbar (rich text)",
    question: "How does the HTML editing toolbar work?",
    summary: "A small in-house rich-text editor: a toolbar of formatting buttons above an editable HTML area, with the result saved as HTML inside the JSON record.",
    keywords: ["toolbar", "rich text", "editor", "formatting", "bold", "italic", "heading", "table", "list", "link", "wysiwyg", "contenteditable"],
    synonyms: ["how does the toolbar work", "text editor", "formatting buttons", "html editor", "rich text editor", "word processor"],
    steps: [
        "Where it appears: on data element rich-text fields (Definition, Guide for use, Examples and Notes), and on dictionary pages in edit mode (cover title, preamble, disclaimer, appendix, signature and element content). A couple of admin screens reuse it.",
        "How it is built: the field is an HTML element with the browser's content-editable mode switched on. The toolbar is created in script and placed directly above the field, in the dark theme.",
        "Buttons: Bold, Italic, Underline, Strikethrough, Clear formatting, text colour, Heading 1 to 3, Quote, numbered and bullet lists, indent and outdent, Insert link, and table tools (insert a table with chosen rows and columns, add or delete rows and columns, widen or narrow a column).",
        "What they apply to: the current selection or the paragraph the cursor is in. Most use the browser's built-in formatting commands. Lists and tables have custom code that keeps the markup valid (for example, no list inside a paragraph, no stray list items).",
        "Behaviour: pasting is forced to plain text so outside styling can't sneak in; links open only with Ctrl+click; Tab moves between table cells and adds a new row from the last cell.",
        "Every action raises an input event, so the unsaved-changes flag and Ctrl+S see toolbar edits the same as typing.",
        "Storage: on save, the field's HTML is cleaned of trailing empty lines and stored as an HTML string in the record's JSON. Older content in a previous rich-text format is turned into HTML when it is opened."
    ],
    who: "Technical audiences. Users with edit access see the toolbar on rich-text fields.",
    tips: [
        "Because content is stored as HTML, dictionaries and exports can show it with its formatting intact.",
        "Derivation logic uses a separate code editor, not this toolbar (see Code fields)."
    ],
    under: ["contentEditable", "document.execCommand", "Selection and Range APIs", "Custom list and table normalisation", "Plain-text paste", "Synthetic input events"],
    related: ["t-code-field", "t-dirty-ctrls", "t-editing-flow", "dict-edit"]
},
{
    id: "t-code-field",
    audience: "technical",
    area: "Tech: Editing internals",
    title: "Code fields (derivation logic)",
    question: "How do code fields (derivation logic) work?",
    summary: "The derivation logic field is a real code editor with line numbers and SQL highlighting, stored as plain text.",
    keywords: ["code editor", "derivation logic", "sql field", "codemirror", "syntax highlighting", "line numbers"],
    synonyms: ["sql editor in the form", "code box", "monospace field", "highlighted sql"],
    steps: [
        "Data element forms show derivation logic in an embedded CodeMirror editor: dark theme, line numbers, line wrapping, SQL mode, and Tab inserts four spaces.",
        "The editor sits on top of a plain text box. If the editor library can't load, you still get the text box.",
        "The value is stored as plain text in the record, not HTML.",
        "Dictionary pages show the same SQL with colour highlighting, and the HTML export can include or leave out derivation logic.",
        "For read-only users the editor is switched to read-only."
    ],
    who: "Technical audiences.",
    tips: [
        "Keep SQL in this field formatted; it's shown as written in dictionaries.",
        "This is separate from the Data Warehouse query box, which runs SQL."
    ],
    under: ["CodeMirror 5 (SQL mode)", "highlight.js", "Progressive enhancement"],
    related: ["t-toolbar", "dict-export", "t-libraries"]
}
);

/* ============================== UI & layout ============================== */
window.TOPICS.push(
{
    id: "t-layout",
    audience: "technical",
    area: "Tech: UI & layout",
    title: "How pages are laid out",
    question: "How are pages laid out?",
    summary: "A consistent shell: a title bar with navigation and menus, then a resizable sidebar list beside a detail panel, plus modals and the phone panel.",
    keywords: ["layout", "page layout", "laid out", "shell", "title bar", "menu bar", "sidebar", "detail panel", "master detail", "ui structure"],
    synonyms: ["how are pages laid out", "how is the ui structured", "screen layout", "page structure", "ui pattern"],
    steps: [
        "Window shell: a borderless WPF window with its own window buttons. Inside it, one web page at a time fills the window.",
        "Home: a top bar with the logo and area menus (Library, Metadata, Sources, Tools, Data, plus Admin for admins). Clicking a menu drops a panel with a grid of buttons. Home also has the patch notes panel and subscription and phone buttons.",
        "Every other page has the same title bar: Back and Home buttons on the left, the page name, a menu bar (File, Edit, Ownership as relevant), a centre slot for the document title or a search box, and on the right the status text, Watch, and the phone toggle.",
        "Below that is the sidebar plus detail pattern: a list on the left (elements, tables, folders, filters) with a draggable divider, and the selected item's form or view on the right.",
        "Selector pages (choose a collection, dictionary, data model or folder) show cards in a grid with a filter box.",
        "File menus are drop-downs with sub-menus (for example Export ▸), built in script with the same markup on every page and role-based items removed rather than greyed out.",
        "Overlays: modal dialogs for confirmations and choices, and the slide-in phone panel."
    ],
    who: "Technical audiences.",
    tips: [
        "Reusing the same title bar and sidebar pattern on a new page makes it feel native straight away.",
        "Menu items a role can't use are removed, which keeps menus short and avoids dead buttons."
    ],
    under: ["Title bar + menu bar", "Sidebar + detail (master/detail)", "Card grids", "Drop-down menus with sub-menus", "Resizable splitter"],
    related: ["t-dialogs", "t-phone-panel", "t-theming", "home-navigation"]
},
{
    id: "t-dialogs",
    audience: "technical",
    area: "Tech: UI & layout",
    title: "Modals and dialogs",
    question: "How do modals and dialogs work?",
    summary: "In-page dark modals for confirmations and choices, and native Windows dialogs from the host for files and folders.",
    keywords: ["modal", "modals", "dialog", "dialogs", "popup", "confirm", "prompt", "save dialog", "file picker"],
    synonyms: ["pop up box", "message box", "are you sure box", "save as window", "open file window"],
    steps: [
        "In-page modals: a dimmed full-window overlay with a centred dark card. They are used for Save / Discard / Cancel on leave, delete confirmations, name prompts, and export choices (JSON, CSV, include derivation logic).",
        "Shared helpers create the simple confirm and prompt dialogs, so wording and styling stay the same everywhere.",
        "Native dialogs: when a file must be saved or picked (Save As for an export, choosing a source file or folder), the page asks the host and the host opens the standard Windows dialog.",
        "The host opens native dialogs only after the current web message has finished, then returns the result to the page. This avoids freezing the web view mid-request.",
        "Startup issues use native windows too, because the web UI isn't running yet."
    ],
    who: "Technical audiences.",
    tips: [
        "New features should reuse the existing modal helpers and the native-dialog pattern rather than inventing new ones.",
        "Exports built entirely in the page (for example CSV compare) use a normal browser download instead of a native dialog."
    ],
    under: ["Overlay modals", "Shared confirm and prompt helpers", "WPF Save and Open dialogs", "Deferred dialog opening"],
    related: ["t-layout", "t-exports", "t-wpf-xaml"]
},
{
    id: "t-phone-panel",
    audience: "technical",
    area: "Tech: UI & layout",
    title: "How the phone panel is built",
    question: "How is the phone panel built?",
    summary: "The phone is an HTML fragment loaded into every page by script, with each app as a screen inside one phone frame.",
    keywords: ["phone panel", "phone", "mobile panel", "apps", "fragment", "widget", "lock screen", "phone internals"],
    synonyms: ["how does the phone work", "how is the phone built", "side phone", "mobile view"],
    steps: [
        "One phone script is included on every page. It loads the phone's HTML fragment and inserts it into the page, so the phone is the same everywhere.",
        "Inside the phone frame, each app (Metabot, Mail, Feedback, Gallery, Settings, Theme, Torch, Profile, DM, Contacts, Signature, Camera) is a screen that is shown or hidden. There is no page navigation inside the phone.",
        "Apps call the host through the same messaging channel as the pages (for example Feedback filing, DMs, gallery storage, profile and Metabot).",
        "Personal state such as Mail, preferences, widget choices and Metabot settings is kept in the app's local browser storage on that PC. Captures are stored as image files in a local folder on the PC.",
        "Camera captures hide the phone briefly so it doesn't appear in the picture."
    ],
    who: "Technical audiences.",
    tips: [
        "Because the phone travels with every page, the phone script is one of the largest scripts in the app.",
        "Mail is built on the PC from feedback, ownership and subscription updates; it isn't a mail server."
    ],
    under: ["HTML fragment injection", "Single-frame screen switching", "Local storage", "Host messaging"],
    related: ["phone-basics", "t-layout", "t-metabot-internals"]
},
{
    id: "t-theming",
    audience: "technical",
    area: "Tech: UI & layout",
    title: "Theming and the CSS approach",
    question: "How do theming and the CSS work?",
    summary: "A hand-written dark theme: per-page stylesheets plus inline styles on script-built components, sharing one palette, with no CSS framework.",
    keywords: ["theme", "theming", "css", "dark theme", "colours", "colors", "palette", "styles", "scrollbar", "font"],
    synonyms: ["how is it styled", "design system", "look and feel", "brand colour", "branding"],
    steps: [
        "Each area has its own stylesheet (home and menus, editor, dictionary, data warehouse, CSV compare, phone and so on). There is no single shared theme file.",
        "Components built in JavaScript (modals, forms, cards, toolbars) set inline styles in the same palette.",
        "Palette: near-black backgrounds, dark grey cards and inputs, light grey text, cyan for headings and highlights, and the brand green for primary and positive actions.",
        "Typography is Segoe UI; code uses a monospace font.",
        "Scrollbars are thin and dark with rounded thumbs. Checkboxes, dialogs and form controls are restyled to match the dark theme.",
        "The theme follows conventions rather than enforced tokens, so new work copies existing colours and patterns."
    ],
    who: "Technical audiences.",
    tips: [
        "Match an existing page's stylesheet when adding UI, and keep guidance subtle (muted text, small badges) rather than loud banners.",
        "This guide reuses the same palette, font and scrollbar style."
    ],
    under: ["Per-page CSS", "Inline component styles", "Custom scrollbars", "Segoe UI", "No CSS framework"],
    related: ["t-layout", "t-html-css-js"]
}
);

/* ============================== Data & storage ============================== */
window.TOPICS.push(
{
    id: "t-storage",
    audience: "technical",
    area: "Tech: Data & storage",
    title: "How data is stored",
    question: "How is data stored?",
    summary: "The repository is a shared network folder of JSON files: a configuration area plus content areas by category, with one folder per collection.",
    keywords: ["storage", "data storage", "repository", "shared folder", "files", "database", "where is data", "folder structure", "manifest", "index"],
    synonyms: ["where is the data kept", "is there a database", "how is data saved", "file storage", "data layer"],
    steps: [
        "Configuration area: the roles list, per-user folders (profile, subscriptions, direct messages), the ownership request queue and audit log, and the published patch notes.",
        "Content area, by category: data elements and Data Model Elements (one folder per collection), data models, dictionaries grouped by category, the Establishment List folders and their combined front-end record, the glossary, user feedback, and templates.",
        "Inside a collection: one JSON file per item, named by a number. Data element files hold every version.",
        "Each collection has a small hidden folder beside its items for its index (so lists load quickly without opening every file) and its ownership record.",
        "Deleted items go to a deleted area inside the same collection, so they keep their context and can be restored.",
        "The SQL Server data the Data Warehouse shows is separate. The Metadata Repository app only reads it."
    ],
    who: "Technical audiences.",
    tips: [
        "Because everything is files, the shared folder's own backups and permissions protect the data.",
        "Indexes are rebuilt by the host after deletes, restores and some saves."
    ],
    under: ["File-based repository", "JSON per item", "Per-collection index", "Per-collection ownership record", "Soft-delete folders"],
    related: ["t-concurrency", "t-offline-cache", "t-json", "t-architecture"]
},
{
    id: "t-concurrency",
    audience: "technical",
    area: "Tech: Data & storage",
    title: "Concurrency and safe writes",
    question: "How do concurrency and safe writes work?",
    summary: "There is no locking: for most records the last save wins. Establishment edits detect conflicts and use safe write-then-swap file writes.",
    keywords: ["concurrency", "locking", "lock", "last save wins", "last write wins", "conflict", "simultaneous", "atomic", "race"],
    synonyms: ["two people editing", "same time", "overwrite", "conflict detection", "who wins"],
    steps: [
        "Every PC writes straight to the shared folder, and there is no central lock. If two people save the same data element, the later save replaces the earlier one.",
        "Shared lists such as direct messages, feedback and the roles file are read, changed and written whole, so the same last-save-wins rule applies.",
        "Establishment edits are safer. When a form opens, the host records a stamp for each file behind it. On save, if any file changed in the meantime, the save is refused and you are offered Reload values.",
        "Establishment and ownership writes go to a temporary file first and then swap it into place, so a dropped connection can't leave a half-written file. Multi-file changes are all-or-nothing with rollback.",
        "Structural changes (such as editing a folder's structure) take a backup first."
    ],
    who: "Technical audiences.",
    tips: [
        "Agree who edits what. Ownership (custodians and editors) narrows the set of people who can write a collection, which lowers the chance of clashes.",
        "Watching an item tells you within about 15 seconds when someone else changed it."
    ],
    under: ["Last-writer-wins", "Optimistic concurrency stamps", "Write-temp-then-replace", "All-or-nothing with rollback", "Backups"],
    related: ["t-storage", "t-editing-flow", "est-edit"]
},
{
    id: "t-offline-cache",
    audience: "technical",
    area: "Tech: Data & storage",
    title: "Offline mode and local caching",
    question: "How do offline mode and local caching work?",
    summary: "If the shared folder can't be reached, the host goes into offline mode and refuses writes. Some personal data is cached on the PC.",
    keywords: ["offline", "limited mode", "caching", "cache", "local storage", "reconnect", "probe", "network failure"],
    synonyms: ["how does offline mode work", "what is cached", "no network internals", "vpn drop"],
    steps: [
        "At startup the host probes the repository roots. If they can't be reached, you choose Retry, Browse (pick a folder for this session), Continue limited, or Quit.",
        "Limited mode: the app runs without shared content, every write is refused, the background timer is off, and an Offline mode badge shows.",
        "Mid-session outage: any file error that looks like a network failure is caught centrally, switches the app to offline, and tells the page. The timer then probes with backoff and clears offline mode once the folder is back.",
        "Caching on the PC: your profile summary (shown when offline, with its timestamp), Gallery captures, Mail, phone preferences, Metabot settings, Data Warehouse history and saved queries.",
        "In memory for the session: the glossary used for hover definitions. It reloads after a glossary change."
    ],
    who: "Technical audiences.",
    tips: [
        "The badge is only a UI hint; the host is what actually blocks writes.",
        "Clearing cached data in phone Settings removes the profile cache and loaded DM images only."
    ],
    under: ["Reachability probe", "Central I/O failure handling", "Backoff", "Local caches", "Session cache"],
    related: ["offline-mode", "t-timer", "t-storage"]
}
);

/* ============================== Security & roles ============================== */
window.TOPICS.push(
{
    id: "t-auth-roles",
    audience: "technical",
    area: "Tech: Security & roles",
    title: "Authentication, roles and permission checks",
    question: "How do authentication, roles and permission checks work?",
    summary: "Windows sign-in identifies you, a central roles file gives you a role (User to Developer), and per-collection ownership narrows who can write. Every write is re-checked on the host.",
    keywords: ["authentication", "auth", "windows authentication", "roles", "permissions", "developer", "admin", "authorisation", "authorization", "security", "ownership model"],
    synonyms: ["how do permissions work", "how does login work", "permission model", "access control", "who can do what"],
    steps: [
        "Identity: the host uses your Windows sign-in name. There is no password prompt. Your display name comes from your Windows account.",
        "Roles: a central roles file maps sign-ins to one of five levels: User (0), Editor (1), Custodian (2), Admin (3), Developer (4). Anyone not listed is a User. Values outside the range are clamped.",
        "Global rules: Editor and above can edit areas open to editors (for example establishments and unowned establishment folders). Custodian and above can create data models and Data Model Element collections and request ownership. Admin and above can edit everything and decide requests. Developer adds the establishment template, filter definition and Build tools.",
        "Ownership: an owned collection can only be written by its Data Custodian, Co-custodians and Editors (plus Admin and Developer). Unowned collections are read-only except for Admin and Developer, apart from unowned establishment folders. Dictionaries inherit ownership from the matching collection. The glossary is Admin and Developer only.",
        "Enforcement: before any write the host re-reads the roles file and the ownership record. If either can't be read, the write is refused rather than guessed. Limited mode refuses all writes.",
        "Live updates: the timer re-pushes your access every 15 seconds so pages switch between read-only and editable without a reload. Ownership changes are audited."
    ],
    who: "Technical audiences.",
    tips: [
        "Identity comes from the Windows sign-in rather than a directory group check, which is fine for an internal tool on managed PCs.",
        "The UI hides what you can't do, but the host decides."
    ],
    under: ["Windows identity", "Role levels 0 to 4", "Per-collection ACL (custodian, co-custodians, editors)", "Fail-closed checks", "Audit log"],
    related: ["roles", "ownership", "t-editing-flow", "t-timer"]
}
);

/* ============================== Releases ============================== */
window.TOPICS.push(
{
    id: "t-releases",
    audience: "technical",
    area: "Tech: Releases",
    title: "Releases, updates and patch notes",
    question: "How do releases and updates work?",
    summary: "Features land through GitHub pull requests, a release commit sets the version, Velopack packages it, and every PC updates itself at startup.",
    keywords: ["release", "releases", "version", "versioning", "update", "auto update", "deployment", "deploy", "velopack", "patch notes"],
    synonyms: ["how do updates work", "how is it deployed", "how do releases work", "ci", "shipping", "rollout"],
    steps: [
        "Development: each feature or fix is built on its own branch, tested locally in Visual Studio, and opened as a pull request on GitHub. After review it is merged into the main branch.",
        "Version: the version number lives in the project file (product, assembly and file versions together). A release is marked by a commit titled with the new version, for example 1.2.9.",
        "Packaging: the release is packaged with Velopack and published to a shared releases location.",
        "Updating: at startup the splash screen asks Velopack for a newer version. If there is one, it downloads it, applies it and restarts the app, so users always run the latest release.",
        "Patch notes are stored centrally, written by an Admin, and shown in the Home panel with the version badge. They are user-focused."
    ],
    who: "Technical audiences.",
    tips: [
        "A copy run straight from Visual Studio isn't “installed”, so it skips the update check.",
        "Bump the version in one place; the splash screen and patch notes badge pick it up."
    ],
    under: ["GitHub pull requests", "Semantic-style versions", "Velopack packaging and updates", "Central patch notes"],
    related: ["t-tools", "patch-notes", "t-startup"]
}
);

/* ============================== Feature internals ============================== */
window.TOPICS.push(
{
    id: "t-search-filters",
    audience: "technical",
    area: "Tech: Feature internals",
    title: "Search and establishment filters internals",
    question: "How do search and establishment filters work internally?",
    summary: "Search and filtering run in the page over data already loaded. Filter values come from a precomputed filter index, so counts are instant.",
    keywords: ["search", "filters", "facets", "faceted search", "filter index", "counts", "lazy loading", "intersection observer"],
    synonyms: ["how does search work", "how do filters work technically", "how are counts calculated", "performance"],
    steps: [
        "The Establishments page loads a light list of every establishment (code, name, number). Search matches name or number as you type, in the page.",
        "Filter values come from a small filter index file that a Developer's Build step writes. It holds, for each establishment, the raw value of each filter field (by default Status, Type, Public / private and HSP).",
        "Matching rules: values ticked within one group are OR'd together, and groups are AND'd. Each value's count reflects the other active groups plus the search, so counts show what you would get.",
        "Labels show the mapped description for each raw code (see Code-to-description mapping).",
        "Cards are built in chunks as you scroll, and each card's fields are fetched in batches only when it comes into view. Full details load on first expand.",
        "If the filter fields change without a rebuild, the sidebar says the index is stale."
    ],
    who: "Technical audiences.",
    tips: [
        "Precomputing the filter index keeps the page fast without opening hundreds of files on every visit.",
        "Exports and Copy use the list currently shown, so filters and search apply."
    ],
    under: ["Client-side search", "Precomputed facet index", "OR within group, AND across groups", "IntersectionObserver lazy loading", "Batched requests"],
    related: ["est-filters", "t-mapping", "t-exports"]
},
{
    id: "t-mapping",
    audience: "technical",
    area: "Tech: Feature internals",
    title: "Code-to-description mapping internals",
    question: "How does code-to-description mapping work internally?",
    summary: "Mapping files pair codes with descriptions per field. They are generated from data element permitted values and merged by the Establishments page.",
    keywords: ["mapping", "lookups", "code description", "permitted values", "mapped values", "mapping file", "lookup table"],
    synonyms: ["how does mapping work", "how are codes translated", "code lookup", "decode internals"],
    steps: [
        "A data element's permitted values are a list of code and description pairs.",
        "File > Export > Mapping File (Editor and above) reads every element in the open collection, takes each element's current permitted values, and writes a mapping file: field name to code to description.",
        "Field names are normalised (upper case, separators turned into underscores) and matched to the establishment template's properties, so a data element and an establishment field line up even if they are spelled slightly differently.",
        "The Establishments page merges all mapping files in its mapping folder and uses them for card text, filter labels, edit-time hints and the extra description column in exports.",
        "Raw codes are always what's stored; descriptions are added only for display."
    ],
    who: "Technical audiences.",
    tips: [
        "Re-run Mapping File after changing permitted values that establishments use.",
        "Keeping raw codes in storage means a description change never rewrites establishment records."
    ],
    under: ["Generated lookup files", "Key normalisation", "Display-time mapping"],
    related: ["est-mapped", "de-export", "t-search-filters"]
},
{
    id: "t-exports",
    audience: "technical",
    area: "Tech: Feature internals",
    title: "How exports are produced",
    question: "How are exports produced?",
    summary: "Small exports are built in the page and downloaded; larger or repository-aware exports are built by the host and saved through a Windows Save dialog.",
    keywords: ["exports", "export", "csv", "json", "html export", "png", "download", "save dialog", "excel"],
    synonyms: ["how does export work", "how are files generated", "export internals", "does it export to excel"],
    steps: [
        "Built in the page (browser download): the data element record and specification exports (JSON or CSV), Compare CSV results, Data Warehouse CSV, and the data model diagram (the drawing is turned into an image, then PNG).",
        "Built by the host (Windows Save dialog): the collection Code List (CSV), Dictionary Specs (JSON or CSV), and the Data Dictionary document. For that one, the page prepares a standalone HTML copy of the rendered pages and the host saves it.",
        "Establishments export runs on a background thread on the host, reading each listed record, reporting progress, writing to a temporary file and then swapping it into place. It adds a description column for every mapped field.",
        "Mapping File is the one export that writes into the repository, so it requires Editor and above.",
        "There is no Excel export. Output is CSV, JSON, HTML or PNG, which Excel and Word open happily."
    ],
    who: "Technical audiences.",
    tips: [
        "Only one establishment export runs at a time.",
        "Copy for Word / Excel puts both a tab-separated version and an HTML table on the clipboard, so pastes keep their table shape."
    ],
    under: ["Blob downloads", "Host Save dialogs", "Background thread with progress", "Clipboard with multiple formats", "SVG to PNG"],
    related: ["export-overview", "t-mapping", "t-dialogs"]
},
{
    id: "t-metabot-internals",
    audience: "technical",
    area: "Tech: Feature internals",
    title: "Metabot integration (high level)",
    question: "How is Metabot integrated?",
    summary: "Metabot sends your message, recent chat and a cleaned summary of the current page to the AI provider you chose, then carries out any action it asks for.",
    keywords: ["metabot", "ai", "llm", "integration", "provider", "tools", "context", "prompt", "api"],
    synonyms: ["metabot internals", "metabot integration", "how is ai used", "what data goes to the ai", "ai architecture", "chatbot internals"],
    steps: [
        "Settings: you choose a provider (xAI or Google Gemini), a model and your own key. These are kept in the app's local storage on your PC and handed to the host.",
        "Context: each page publishes a small summary of what you're looking at (page, open element's title and type, selected table and its columns). The host removes anything that looks like data rows or query results before sending.",
        "The host calls the provider's API over HTTPS with your message, the recent chat and that context.",
        "Actions: the reply can include a simple action line, for example navigate, find or open an element, list warehouse tables, put SQL in the query box, or file feedback. The host reads it and the page carries it out.",
        "Network check: each response is classified as reached, intercepted (for example a corporate “acknowledge AI use” page) or failed. Interception shows the acknowledgement prompt with Retry, which resends the same request.",
        "Without a provider, built-in rule-based replies still handle simple questions and navigation."
    ],
    who: "Technical audiences.",
    tips: [
        "Query results never leave the PC through Metabot. That's a host rule, not just a page rule.",
        "Drafted SQL is placed in the editor for a person to check and run; Metabot never runs it."
    ],
    under: ["HTTPS calls to an AI provider", "Context sanitising", "Simple action protocol", "Response classification", "Rule-based fallback"],
    related: ["metabot", "metabot-network", "t-warehouse-internals"]
},
{
    id: "t-warehouse-internals",
    audience: "technical",
    area: "Tech: Feature internals",
    title: "Data Warehouse query safety",
    question: "How are Data Warehouse queries kept safe?",
    summary: "Queries run with your own Windows credentials, and the host only allows a single read-only SELECT or WITH statement, with row caps and a timeout.",
    keywords: ["sql", "query", "read only", "validation", "integrated security", "timeout", "row limit", "sql server", "injection"],
    synonyms: ["how is sql restricted", "can i run updates", "is the warehouse safe", "query validation"],
    steps: [
        "Connections use the SQL Server client with Windows Integrated Security, so the database's own permissions apply to you.",
        "Before running, the host strips comments and string literals, then checks there is a single statement and that it starts with SELECT or WITH.",
        "It rejects any statement containing data-changing or risky keywords (insert, update, delete, merge, exec, create, drop, select-into, bulk and similar), and over-long scripts.",
        "Rows are capped at fixed sizes (25 up to 2,500), and commands time out after 60 seconds. Cancel stops a running query.",
        "Table lists and column details come from the database's own catalog, limited to what you can see."
    ],
    who: "Technical audiences.",
    tips: [
        "The page also shows “Read-only · single SELECT / WITH · Integrated Security” as a reminder.",
        "History and saved queries are local to your PC."
    ],
    under: ["SQL Server client", "Integrated Security", "Statement validation", "Keyword blocklist", "Row caps and timeouts"],
    related: ["dw-query", "dw-connect", "t-metabot-internals"]
},
{
    id: "t-lookup-internals",
    audience: "technical",
    area: "Tech: Feature internals",
    title: "Hover definitions (glossary) internals",
    question: "How do hover definitions (glossary) work internally?",
    summary: "The host loads the glossary once per session, and the page underlines matching terms in labels and shows definitions on hover.",
    keywords: ["glossary", "hover", "tooltip", "metadata lookup", "definitions", "term matching", "regex"],
    synonyms: ["how do hover definitions work", "how are terms underlined", "tooltip internals"],
    steps: [
        "When a form renders, the page asks the host for the glossary. The host reads every glossary file once, builds a name-to-entry map, and caches it in memory.",
        "The page builds one case-insensitive whole-word pattern from all the terms, longest first, so longer phrases win over words inside them.",
        "It walks only label-like areas (field labels, headings, collection names), never editable content, and wraps matches in an underlined span.",
        "Hovering shows the definition after a short delay. Clicking opens a detail window with the full entry.",
        "Adding, renaming or deleting glossary entries clears the host cache, so the next form picks up the change."
    ],
    who: "Technical audiences.",
    tips: [
        "Scanning labels only keeps the DOM changes safe and fast.",
        "Glossary changes are Admin and Developer only."
    ],
    under: ["Session cache", "Regex term matching", "DOM text-node walking", "Tooltips"],
    related: ["lookup", "t-storage"]
}
);

/* ============================== Design & quality ============================== */
window.TOPICS.push(
{
    id: "t-why-wpf-html",
    audience: "technical",
    area: "Tech: Design & quality",
    title: "Why WPF plus HTML instead of a web app",
    question: "Why WPF plus HTML instead of a web app?",
    summary: "A desktop host with a web UI gives Windows sign-in, direct access to the shared folder and native dialogs without running a server, while keeping a modern HTML interface.",
    keywords: ["why wpf", "why not a web app", "desktop vs web", "design decision", "trade-offs", "hybrid", "rationale"],
    synonyms: ["why wpf plus html", "why not a website", "why a desktop app", "why webview2", "why not blazor", "why not react"],
    steps: [
        "What the desktop host gives: identity from the Windows sign-in with no separate login; direct reads and writes to the shared repository folder; native Save and Open dialogs; a self-updating installer; and it keeps working with limited features when the network drops.",
        "What the web UI gives: HTML, CSS and JavaScript are quick to build and change, flexible for rich layouts like dictionaries, cards and diagrams, and can reuse web libraries such as a code editor and SQL highlighting. WebView2 is Chromium, so modern web features work.",
        "What it avoids: a web app would need a hosted server, a database or file service behind it, web sign-in and deployment pipelines. This design has no central application server to run.",
        "Trade-offs: Windows only; every PC needs access to the shared folder; and with no central server there's no locking, so most records are last save wins.",
        "The two halves talk through JSON messages, so the UI could in principle be moved behind a server later without rewriting it from scratch."
    ],
    who: "Technical audiences.",
    tips: [
        "Most day-to-day feature work is in the web UI; the host handles files, permissions and Windows integration."
    ],
    under: [
        "WPF host",
        "WebView2 web UI",
        "Windows identity",
        "No application server",
        "JSON messaging"
    ],
    related: ["t-architecture", "t-stack", "t-scale", "t-bridge"]
},
{
    id: "t-scale",
    audience: "technical",
    area: "Tech: Design & quality",
    title: "How it would scale",
    question: "How would it scale?",
    summary: "Today each PC works directly against a shared folder, which suits a team-sized group. Larger scale would mainly pressure concurrency and network reads rather than the UI.",
    keywords: ["scale", "scaling", "scalability", "performance", "more users", "growth", "limits", "capacity"],
    synonyms: ["how would it scale", "how many users", "can it handle more", "bottlenecks", "what are the limits"],
    steps: [
        "How it works now: every PC runs its own copy and reads and writes JSON files on the shared repository. There's no central server to scale.",
        "What keeps it fast: each collection keeps a small index so lists load without opening every file; establishment filter values are precomputed; establishment cards load in chunks as you scroll.",
        "What grows with more users: more chance of two people saving the same item (last save wins for most records); more network reads, which a slow VPN feels first; and each running copy checks for watched-item changes about every 15 seconds.",
        "What grows with more data: very large collections mean bigger indexes and more files per folder, and exports take longer (the establishment export already runs in the background with progress).",
        "Typical next steps if it needed to scale further, as considerations rather than plans: per-record conflict checks like establishments already have, more precomputed indexes, or moving storage behind a central service or database so locking and search happen in one place."
    ],
    who: "Technical audiences.",
    tips: [
        "The JSON message boundary between UI and host is what would make a move to a central service practical."
    ],
    under: [
        "File-based storage",
        "Per-collection indexes",
        "Precomputed facets",
        "Polling",
        "Last-writer-wins"
    ],
    related: ["t-storage", "t-concurrency", "t-why-wpf-html", "t-timer"]
},
{
    id: "t-testing",
    audience: "technical",
    area: "Tech: Design & quality",
    title: "How it's tested and released",
    question: "How is it tested and released?",
    summary: "Changes are built and tested by hand on feature branches, reviewed in GitHub pull requests, then packaged as a numbered release that every PC installs at startup.",
    keywords: ["testing", "tested", "qa", "quality", "test", "release process", "pull request", "review"],
    synonyms: ["how is it tested", "how is it tested and released", "is there automated testing", "unit tests", "quality assurance"],
    steps: [
        "Each feature or fix is built on its own branch and run locally from Visual Studio.",
        "Testing is manual: the change is exercised in the running app, including role and offline cases. Some features include built-in ways to simulate conditions that are hard to reproduce, such as an intercepted network connection.",
        "There isn't an automated test suite or build pipeline in the repository at 1.2.9.",
        "The change goes up as a pull request on GitHub, is reviewed, and is merged into the main branch.",
        "A release sets the version number, is packaged with Velopack and published to a shared release location. Each PC checks for it at startup, installs it and restarts.",
        "User-facing changes are written up as patch notes and shown on Home."
    ],
    who: "Technical audiences.",
    tips: [
        "Adding automated tests around the host's permission checks and file writes would give the most safety for the least effort."
    ],
    under: [
        "Feature branches",
        "Manual testing",
        "GitHub pull requests",
        "Velopack releases",
        "Patch notes"
    ],
    related: ["t-releases", "t-tools", "patch-notes"]
},
{
    id: "t-security",
    audience: "technical",
    area: "Tech: Design & quality",
    title: "How secure it is (high level)",
    question: "How secure is it?",
    summary: "It relies on Windows sign-in and the shared folder's own permissions, and adds role and ownership checks on every write, read-only database access and careful handling of AI requests.",
    keywords: ["security", "secure", "safe", "risk", "protection", "privacy", "audit"],
    synonyms: ["how secure is it", "is it safe", "security model", "can people see my data", "is data protected"],
    steps: [
        "Identity: the app uses your Windows sign-in, so it stores no passwords of its own.",
        "Foundation: the repository is a shared network folder, so its network permissions and backups are the base layer of protection.",
        "Writes: every save, delete and ownership change is re-checked by the desktop host at that moment against the roles list and the collection's ownership. If anything can't be read, the change is refused rather than guessed.",
        "Audit: ownership changes are recorded, and refused write attempts are logged.",
        "Database: the Data Warehouse uses your own Windows credentials and only allows a single read-only query, with row limits and a timeout.",
        "AI: Metabot uses a key you provide, sends only a cleaned summary of the page (no data rows or query results), and never runs SQL itself.",
        "The web UI runs from local files inside a private browser profile, separate from your normal browser."
    ],
    who: "Technical audiences.",
    tips: ["The UI hiding a button is only convenience; the host's checks are the real gate."],
    under: [
        "Windows identity",
        "Fail-closed authorisation",
        "Audit logging",
        "Read-only SQL",
        "Context sanitising"
    ],
    related: ["t-auth-roles", "t-warehouse-internals", "t-metabot-internals", "t-storage"]
}
);
