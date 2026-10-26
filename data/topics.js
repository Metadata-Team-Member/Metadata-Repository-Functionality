/* Metadata Repository Functionality: topic content.
   Plain text only. Describe behaviour for users; never add share paths, server names, web addresses,
   user names, file or code names, licence details or anything from Developer-only tools.
   See README.md for the field list and how to add a topic. */

window.GUIDE_META = {
    appRelease: "1.3.2",   // the app release this content describes (not shown on the page)
    updated: "26 Oct 2026"
};

window.TOPIC_AREAS = [
    "Concepts",
    "Data quality & governance",
    "Everyday tasks",
    "Getting the app",
    "Getting started",
    "Establishments",
    "Reference Data",
    "Data Elements",
    "Data Models",
    "Dictionaries / Collections",
    "Metadata Lookup",
    "Data Warehouse",
    "Compare CSV",
    "Permissions / roles",
    "Offline mode",
    "Phone apps",
    "Metabot Insight",
    "Mail and Feedback",
    "Saving / unsaved changes / Ctrl+S",
    "Export options",
    "Troubleshooting",
    "What's new"
];

window.TOPICS = [];

/* ============================== Getting started ============================== */
window.TOPICS.push(
{
    id: "home-navigation",
    area: "Getting started",
    title: "Getting around the Metadata Repository",
    question: "How do I get around the Metadata Repository?",
    summary: "The Home screen's top menu takes you to every part of the metadata repository.",
    keywords: ["home", "menu", "navigation", "library", "metadata", "sources", "tools", "data", "back button", "home button"],
    synonyms: ["where is", "find a page", "open", "main menu", "start", "navigate", "getting started", "overview"],
    steps: [
        "Hover over or click a menu at the top of the Home screen to open its panel of buttons.",
        "Library holds Dictionaries, Data Models and Establishments.",
        "Metadata holds Data Elements and Data Model Elements (the building blocks the other pages use).",
        "Sources holds the Data Warehouse, Tools holds Compare CSV and Dictionary Review Merge, and Data holds the Establishment List folders and the Reference Data lists.",
        "On every other page, the arrow button at the top left goes back one step and the house button returns to Home.",
        "The phone button at the top right opens the phone panel with Metabot, Mail, Feedback and the other phone apps."
    ],
    who: "Everyone. Some buttons only appear for roles that can use them (for example, Admins see an extra Admin menu).",
    tips: [
        "If a page asks about unsaved changes when you leave, choose Save, Discard or Cancel. Nothing is thrown away without asking.",
        "Metabot can take you to most pages for you. Try asking it to open a dictionary or a collection.",
        "A small orange “Offline mode” pill in the title bar means the repository can't be reached. See Offline mode."
    ],
    related: ["watch-subscriptions", "patch-notes", "phone-basics", "roles"]
},
{
    id: "patch-notes",
    area: "Getting started",
    title: "Updates and patch notes",
    question: "How do updates and patch notes work?",
    summary: "The Metadata Repository app updates itself when it starts, and the Patch Notes panel on Home tells you what changed.",
    keywords: ["patch notes", "update", "version", "release", "new features", "changelog"],
    synonyms: ["patch notes", "upgrade", "auto update", "restart", "update the app"],
    steps: [
        "Each time the Metadata Repository app starts, the splash screen checks for a newer version.",
        "If there is one, it downloads it, installs it and restarts the app automatically. You don't need to do anything.",
        "On the Home screen, the Patch Notes panel in the corner shows the current version number.",
        "Click the panel header to expand it and read the notes for recent releases, then click again to collapse it."
    ],
    who: "Everyone can read patch notes and receives updates. Only Admins publish the notes.",
    tips: [
        "If the app restarts by itself right after you open it, it has most likely just installed an update.",
        "Close the Metadata Repository app at the end of the day so you pick up the latest version next time."
    ],
    related: ["home-navigation", "offline-mode"]
},
{
    id: "watch-subscriptions",
    area: "Getting started",
    title: "Watching items and the notifications bell",
    question: "How do I watch items and get notifications?",
    summary: "Watch a data element, dictionary or data model and the Metadata Repository app tells you when someone changes it.",
    keywords: ["watch", "subscribe", "subscription", "bell", "notification", "star", "changed", "alert"],
    synonyms: ["notify me", "follow", "keep track", "watched items", "unwatch", "mark as seen", "badge"],
    steps: [
        "Open the item you care about and click the Watch button in its title bar. It lights up when you are watching.",
        "The Metadata Repository app checks your watched items in the background about every 15 seconds.",
        "When a watched item changes, a badge appears on the Watch button and on the subscriptions button on Home.",
        "Open the subscriptions panel on Home to see what changed and when. Click an entry to jump straight to it.",
        "Click Clear to mark everything as seen. You keep watching the items; only the badge resets.",
        "Ownership request updates also show here, and the same changes are copied into the phone's Mail app."
    ],
    who: "Everyone. Watching is personal: only you see your watched list.",
    tips: [
        "Click Watch again to stop watching (the tooltip says “Unwatch this item”).",
        "Watching works best for items you depend on but don't edit yourself, such as a dictionary you publish from."
    ],
    related: ["mail", "ownership-requests", "home-navigation"]
}
);

/* ============================== Establishments ============================== */
window.TOPICS.push(
{
    id: "est-browse",
    area: "Establishments",
    title: "Browsing and searching establishments",
    question: "How do I browse and search establishments?",
    summary: "The Establishments page shows every establishment as a card that you can search and expand.",
    keywords: ["establishments", "establishment", "card", "cards", "search", "hospital", "site", "facility", "expand"],
    synonyms: ["find an establishment", "look up a hospital", "establishment details", "estab", "card view"],
    steps: [
        "Open Library > Establishments from the Home screen.",
        "Each establishment appears as a card with its name, number, type, public or private status, address, suburb, postcode, active status and HSP.",
        "Type in the search box in the title bar to narrow the list by name or number as you type.",
        "Click “Expand for more info” on a card to load its other details. Click “Show less” to fold it up again.",
        "Cards load in batches as you scroll, so very long lists stay quick."
    ],
    who: "Everyone can browse and search. Editing depends on your role (see Editing establishments).",
    tips: [
        "Combine search with the Filters sidebar to get to a short list fast.",
        "Codes are shown with their meaning where one is known, for example a type code followed by its description."
    ],
    related: ["est-filters", "est-mapped", "est-edit", "est-export"]
},
{
    id: "est-filters",
    area: "Establishments",
    title: "Establishment filters",
    question: "How do establishment filters work?",
    summary: "The Filters sidebar narrows the establishment list by values such as Status, Type, Public / private and HSP.",
    keywords: ["filter", "filters", "sidebar", "status", "type", "public", "private", "hsp", "count", "clear filters"],
    synonyms: ["narrow down", "refine", "facet", "only show", "hide filters", "show filters", "n of m", "how many"],
    steps: [
        "On the Establishments page the Filters sidebar sits on the left. Each group (for example Status or Type) lists the values in use, with a count beside each value.",
        "Tick one or more values to show only the establishments that match. Ticks within one group widen the match; ticks across groups narrow it.",
        "The count at the top shows how many establishments are listed out of the total, for example “42 of 310”.",
        "Click Clear filters to untick everything and show the full list again.",
        "Use the filter button at the top of the sidebar to hide the sidebar for more room, and click it again to bring it back.",
        "Filters work together with the search box in the title bar."
    ],
    who: "Everyone.",
    tips: [
        "Exports use the establishments currently listed, so filter first, then export.",
        "If the sidebar says the filter list needs updating, the data has changed since it was last refreshed. Let your Admin know."
    ],
    related: ["est-browse", "est-export", "est-mapped"]
},
{
    id: "est-mapped",
    area: "Establishments",
    title: "Code descriptions (mapped values)",
    question: "How do code descriptions (mapped values) work?",
    summary: "Establishment codes are shown with plain-English descriptions, for example a Public/Private or HSP code with its name.",
    keywords: ["mapping", "mapped", "code", "description", "lookup", "public private", "hsp", "meaning", "hint"],
    synonyms: ["what does this code mean", "code to description", "decode", "translate code", "mapped values"],
    steps: [
        "The Metadata Repository app keeps lists that pair each code with its description. These lists are built from the permitted values on the matching data elements.",
        "Wherever a code has a known description, the card shows it as “code — description”.",
        "While you edit an establishment, a small hint under a coded field shows the description of the code you typed, so you can check it before saving.",
        "Exports keep the original code and add a second column with the description."
    ],
    who: "Everyone sees descriptions. Editors and above can refresh the lists from Data Elements (File > Export > Mapping File).",
    tips: [
        "If a code shows without a description, it isn't in the permitted values yet. Ask the element's custodian to add it, then refresh the mapping file.",
        "See Data Element exports for how the Mapping File is made."
    ],
    related: ["est-browse", "de-export", "est-edit"]
},
{
    id: "est-edit",
    area: "Establishments",
    title: "Editing, adding and deleting establishments",
    question: "How do I edit, add or delete an establishment?",
    summary: "Editors can update an establishment's details from its card, and Admins can add or delete establishments.",
    keywords: ["edit establishment", "add establishment", "new establishment", "delete establishment", "save", "form", "establishment number"],
    synonyms: ["change an establishment", "update address", "create establishment", "remove establishment", "modify"],
    steps: [
        "Select a card, then choose Edit in the title bar. The card turns into a form.",
        "Change the fields you need and click Save (or use File > Save). Cancel leaves without saving.",
        "Fields can be marked Required, Locked (the establishment code never changes) or Read-only. A read-only field names the folder it comes from when another team owns that data.",
        "To add an establishment, choose File > New. A draft card appears at the top and a new code is assigned automatically. Codes are never reused.",
        "The establishment number is required. If the number is already used by another establishment, the Metadata Repository app warns you and lets you save anyway if that is intended.",
        "If someone else saved the same establishment while you were editing, you are asked to reload the latest values instead of overwriting their work.",
        "To delete, select the card and choose File > Delete. The record is moved to a deleted area rather than wiped, so it can be recovered."
    ],
    who: "Edit: Editor and above. New and Delete: Admin only. Fields owned by another team are read-only unless you are one of that folder's custodians or editors.",
    tips: [
        "Your draft for a new establishment is kept until you save or cancel, even if you move around the page.",
        "Editing is turned off in Offline mode."
    ],
    related: ["est-list", "ownership", "est-mapped", "saving"]
},
{
    id: "est-list",
    area: "Establishments",
    title: "Establishment List folders",
    question: "What are Establishment List folders?",
    summary: "Data > Establishment List shows the folders that feed the Establishments page, each holding one part of every establishment's data.",
    keywords: ["establishment list", "folder", "folders", "raw view", "raw json", "form view", "edit structure", "property", "new establishment"],
    synonyms: ["source folders", "establishment data folders", "team folders", "add property", "structure"],
    steps: [
        "Open Data > Establishment List on Home. You see one card per folder. Type in the filter box to find a folder.",
        "Open a folder to see its establishments on the left. Use the search box to find one.",
        "Pick an establishment to edit it. Edit > Form and Edit > Raw JSON switch between the form and every value at once.",
        "Choose File > Save (or Ctrl+S) to write your changes.",
        "Use File > New establishment to add one to the folder, or File > Delete to move one to the deleted area. Admins create a new folder with File > New Folder on the folder list.",
        "Edit > Edit structure lets you add, rename or remove a property across every record in the folder in one go. You see a preview first, and a backup is kept. Edit > Ownership shows who looks after the folder."
    ],
    who: "Editor and above can edit unowned folders. When a folder has a Data Custodian, only its custodians and editors (and Admins) can edit it. In the main establishments folder, adding, deleting and Edit structure are Admin only. Creating a new folder is Admin only.",
    tips: [
        "A banner at the top tells you whether the folder is owned, who looks after it, and offers Request ownership when you can.",
        "The establishment code is locked everywhere so records stay linked across folders.",
        "Menus only show what your role can use. If nothing is left for your role, the menu bar is hidden."
    ],
    related: ["est-edit", "ownership", "ownership-requests"]
},
{
    id: "est-export",
    area: "Establishments",
    title: "Exporting establishments",
    question: "How do I export establishments?",
    summary: "Export the establishments you are looking at to CSV or JSON, copy them for Word or Excel, or print them.",
    keywords: ["export establishments", "csv", "json", "copy", "word", "excel", "print", "pdf"],
    synonyms: ["download establishments", "save list", "spreadsheet", "establishment report"],
    steps: [
        "Use the Filters sidebar and search to list only the establishments you want.",
        "Open File > Export. The menu shows how many establishments will be exported.",
        "Choose “Listed establishments as CSV” or “Listed establishments as JSON”, then pick where to save.",
        "Coded fields get an extra column with the description beside the original code.",
        "“Copy for Word / Excel” copies the selected establishment's details as a table you can paste straight into a document.",
        "“Print / Save as PDF” opens the print window, where you can also choose to save as PDF."
    ],
    who: "Everyone. Exporting only reads data; it never changes the repository.",
    tips: [
        "Large exports show progress in the status area at the top right. Only one export runs at a time.",
        "See Export options for a summary of every export in the Metadata Repository app."
    ],
    related: ["est-filters", "export-overview", "est-mapped"]
}
);

/* ============================== Data Elements ============================== */
window.TOPICS.push(
{
    id: "de-open",
    area: "Data Elements",
    title: "Opening and editing data elements",
    question: "How do I open and edit a data element?",
    summary: "Data elements describe each field in a data collection: its name, definition, type, format and permitted values.",
    keywords: ["data element", "data elements", "collection", "field", "definition", "permitted values", "editor", "form"],
    synonyms: ["metadata record", "element", "edit a field", "data dictionary entry", "attribute", "variable"],
    steps: [
        "Open Metadata > Data Elements on Home and choose a collection.",
        "The left panel lists the elements in that collection. Click one to open it in the form on the right.",
        "The form shows the element's details, such as title, field name, definition, data type, format, size, requirement status and permitted values (code and description pairs).",
        "Edit the fields you need. “Unsaved changes” appears at the top until you save.",
        "Save with File > Save or Ctrl+S. Use File > Save New Version when the change should start a new dated version.",
        "To add an element, choose File > New, fill in the form and save it.",
        "Words that have a Metadata Lookup definition are underlined in labels. Hover to see the definition, or click for full details."
    ],
    who: "Everyone can read. Editing needs edit access to that collection (its custodians and editors, or an Admin). See Collection ownership.",
    tips: [
        "Changing the title updates the name in the left panel straight away; it's kept when you save.",
        "Read-only users still see File > Export.",
        "Click the CODE heading in the permitted values table to sort the codes."
    ],
    related: ["de-versions", "de-delete-restore", "de-export", "de-sort-codes", "lookup", "ownership"]
},
{
    id: "de-versions",
    area: "Data Elements",
    title: "Save vs Save New Version",
    question: "What is the difference between Save and Save New Version?",
    summary: "Save corrects the current version; Save New Version keeps history by starting a new version from today.",
    keywords: ["version", "versions", "save new version", "history", "from date", "to date", "effective date"],
    synonyms: ["new version", "versioning", "keep history", "date range", "previous version", "superseded", "what does save new version do", "save new version"],
    steps: [
        "Every data element keeps a list of versions, newest first. Each version has a From date and a To date.",
        "File > Save writes your changes into the current version. Use it for corrections, such as a typo.",
        "File > Save New Version adds a new version with your changes. It starts today and has an open-ended To date.",
        "The version that was current is closed off the day before today, so the two never overlap.",
        "If the newest version already starts today, a second Save New Version on the same day offers “Update today's version” instead, so no version ends before it starts.",
        "Save New Version is refused while the newest version starts in the future. Fix its From date first.",
        "Save New Version only works after you have changed something, and not while you are still creating a brand-new element (save that normally first).",
        "Dates are always shown and saved as year-month-day, whatever your computer's regional settings."
    ],
    who: "Anyone with edit access to the collection.",
    tips: [
        "Use Save New Version when the meaning or the permitted values really change, so reports for earlier periods stay accurate.",
        "If you saved a new version by mistake, ask the collection's custodian for help rather than deleting the element.",
        "Version dates also set the dates in the Code List export. See “Why am I warned about version dates when I save?”."
    ],
    related: ["de-open", "saving", "de-delete-restore", "de-version-dates"]
},
{
    id: "de-delete-restore",
    area: "Data Elements",
    title: "Deleting and restoring data elements",
    question: "How do I delete or restore a data element?",
    summary: "Deleting moves an element to a deleted area for its collection, and Deleted Items lets you bring it back.",
    keywords: ["delete", "restore", "deleted items", "undo delete", "recover", "bin", "remove element"],
    synonyms: ["recycle bin", "undelete", "get back", "lost element", "trash"],
    steps: [
        "Open the element and choose File > Delete. Confirm when asked.",
        "The element is moved to its collection's deleted area. It is not permanently removed.",
        "To bring it back, choose File > Deleted Items. A list shows each deleted element and when it was deleted.",
        "Click Restore beside the one you want.",
        "If a live element is already in the same place, the Metadata Repository app offers “Rename & Restore” so both are kept."
    ],
    who: "Anyone with edit access to the collection.",
    tips: [
        "A new element that hasn't been saved yet can't be deleted. Just discard it.",
        "Deleted Items only lists the collection you have open."
    ],
    related: ["de-open", "de-versions", "ownership"]
},
{
    id: "de-export",
    area: "Data Elements",
    title: "Data Element exports",
    question: "How do I export data elements?",
    summary: "File > Export on a data element offers a record export, specifications, a code list and a mapping file.",
    keywords: ["export", "data element export", "element specifications", "collection specifications", "code list", "mapping file", "csv", "json"],
    synonyms: ["download element", "specs", "spec sheet", "list of codes", "permitted values export", "lookups"],
    steps: [
        "Open an element, then File > Export.",
        "Data Element: exports the record you have open as JSON or CSV. (Fixed-width is shown as coming soon.)",
        "Element Specifications: exports the technical details of the open element (field name, data type, format, size, precision, requirement status) as JSON or CSV.",
        "Collection Specifications: the same kind of details for every element in the collection, as JSON or CSV.",
        "Code List: a CSV of every code and description across the collection, with start and end dates taken from the element versions. Codes are matched across versions by the code itself, so reordering permitted values doesn't create false start or end dates. Only rows with a field name, a code and a description are included.",
        "If anything about the dates or codes looks wrong, an anomalies report is saved next to the Code List, and the completion message says how many issues were found.",
        "Mapping File: builds the code-to-description list that the Establishments page uses, from the permitted values in this collection, and saves it into the repository."
    ],
    who: "Everyone can use the first four. Mapping File is Editor and above because it saves into the repository.",
    tips: [
        "If Code List says no rows were found, check that the permitted values have both a code and a description.",
        "After updating permitted values that establishments use, run Mapping File so the Establishments page shows the new descriptions.",
        "Export file names use your local date."
    ],
    related: ["export-overview", "est-mapped", "de-open"]
},
{
    id: "de-sort-codes",
    area: "Data Elements",
    title: "Sorting permitted values by code",
    question: "How do I sort permitted values by code?",
    summary: "Click the CODE heading in an element's permitted values table to put the codes in natural order.",
    keywords: ["sort", "sort codes", "sort permitted values", "code heading", "order codes", "permitted values order"],
    synonyms: ["put codes in order", "reorder codes", "arrange codes", "sort by code", "numeric order"],
    steps: [
        "Open a data element and scroll to its permitted values.",
        "Click the CODE heading at the top of the table.",
        "The codes are sorted in natural order: 1, 2, 10 rather than 1, 10, 2, then codes with letters, with blank codes last.",
        "Save the element if you want to keep the new order."
    ],
    who: "Anyone with edit access to the collection.",
    tips: [
        "Changing the order doesn't affect Code List dates, because codes are matched by the code itself, not their position."
    ],
    related: ["de-open", "de-export"]
},
{
    id: "de-version-dates",
    area: "Data Elements",
    title: "Version date checks when saving",
    question: "Why am I warned about version dates when I save?",
    summary: "The app checks an element's version dates when you save, because they also set the start and end dates in the Code List export.",
    keywords: ["version dates", "date warning", "from date", "to date", "save anyway", "date check", "1600", "9999"],
    synonyms: ["dates warning", "wrong dates", "half typed date", "blank date", "code list dates", "date error on save"],
    steps: [
        "A new element starts with one version running from 1600-01-01 to 9999-01-01, so it covers every period until you change it.",
        "If the oldest From date or the newest To date is left blank, it is filled back in when you save.",
        "A half-typed date is highlighted so you can finish it.",
        "When a save would move the oldest From date, end the newest version by hand, change codes with a plain Save, or edit an older version, a message explains the effect. Choose Save anyway or Cancel.",
        "Hints next to the dates point out edits that would move the Code List dates."
    ],
    who: "Anyone with edit access to the collection.",
    tips: [
        "To change what a code means from a certain date, use File > Save New Version rather than editing the dates by hand.",
        "Cancel is always safe; nothing is saved until you choose Save anyway."
    ],
    related: ["de-versions", "de-export", "saving"]
}
);

/* ============================== Data Models ============================== */
window.TOPICS.push(
{
    id: "dm-overview",
    area: "Data Models",
    title: "Data models and their tables",
    question: "How do data models and their tables work?",
    summary: "A data model describes a table: its type (fact, dimension or view), where it lives, its keys and which data elements make up its columns.",
    keywords: ["data model", "data models", "table", "fact", "dim", "dimension", "view table", "columns", "keys", "primary key"],
    synonyms: ["star schema", "model a table", "table design", "foreign key", "surrogate key", "add collection"],
    steps: [
        "Open Library > Data Models on Home and pick a data model. Its tables are listed on the left.",
        "Open a table to see its form: table name, table type (FACT TABLE, DIM TABLE or VIEW TABLE) and where the table lives (server, database and schema, if known).",
        "Columns come from data element collections. Use Add Collection to pick a collection, then Edit columns to choose which elements belong to this table.",
        "Mark a column as a key from its row, or use Add key. Keys can be Primary, Foreign or Surrogate.",
        "Remove a single column, or a whole collection group, with the remove buttons beside them.",
        "Save with File > Save or Ctrl+S."
    ],
    who: "Everyone can read. Editing needs edit access to the data model (its custodians and editors, or an Admin).",
    tips: [
        "Switch between Form and Diagram at the top of the table to see how it connects to other tables.",
        "Hover over an underlined term to see its Metadata Lookup definition."
    ],
    related: ["dm-related", "dm-diagram", "dm-new", "de-open"]
},
{
    id: "dm-related",
    area: "Data Models",
    title: "Related tables and key mismatches",
    question: "How do related tables and key mismatches work?",
    summary: "Related tables record how one table joins to another, and the Metadata Repository app warns you when the join keys don't line up.",
    keywords: ["related table", "relationship", "join", "key mismatch", "foreign key", "link tables"],
    synonyms: ["relate tables", "connect tables", "joins", "relationships between tables", "mismatch warning"],
    steps: [
        "In a table's Form view, use Add Related Table and pick another table in the data model.",
        "Choose the keys that join them. The Metadata Repository app offers the other table's keys, or its columns if it has no keys yet.",
        "If a chosen key isn't a key or column on the other table, a “Key mismatch” warning shows which names don't match.",
        "Fix the warning by choosing a matching key, or by adding the key to the other table.",
        "Open a related table straight from the form; a Back link returns you to where you were."
    ],
    who: "Anyone with edit access to the data model can change relationships. Everyone can view them.",
    tips: [
        "Mismatch warnings also appear on the diagram, so problems are easy to spot.",
        "Add keys to dimension tables first; it makes linking fact tables much quicker."
    ],
    related: ["dm-overview", "dm-diagram"]
},
{
    id: "dm-diagram",
    area: "Data Models",
    title: "Relationship diagram",
    question: "How does the relationship diagram work?",
    summary: "The Diagram view draws the open table and its related tables as cards, with curved lines labelled with the keys that join them.",
    keywords: ["diagram", "erd", "picture", "relationship diagram", "png", "zoom", "edges", "cards", "expanded view", "expand diagram", "full screen"],
    synonyms: ["entity relationship", "draw", "visualise", "visualize", "chart of tables", "export png", "bigger diagram", "move tables around"],
    steps: [
        "Open a data model table and click Diagram at the top of the form.",
        "Each table is a card showing its name, a badge for its type (fact, dimension or view) and its fields. Key fields are tagged PK, FK or SK.",
        "The open table sits in the middle, with related fact tables on the same row and other tables to the side. Lines show the keys that join them.",
        "Cards show up to six fields with a “+N more” row. Hover over a card or line to highlight the keys on both ends, and click a card to open that table.",
        "Click the expand button to open the diagram in a full window. There you can drag the background to move around, scroll to zoom, drag cards to new places, and use Fit, Reset and the zoom buttons. Close it with Escape, × or by clicking outside.",
        "Card positions you set are kept while the app is open and also used in the smaller preview. Reset puts them back.",
        "Use the Edges list to show all lines, keys only, or only Primary, Foreign or Surrogate keys, and click Export PNG to save the current view as an image."
    ],
    who: "Everyone. The diagram is view-only; make changes in Form view.",
    tips: [
        "If the diagram says there are no related tables yet, add some in Form view first.",
        "Exported pictures are handy for documents and meetings.",
        "Use + and − on a card to show or hide the tables one more step away."
    ],
    related: ["dm-related", "dm-overview"]
},
{
    id: "dm-new",
    area: "Data Models",
    title: "Creating data models and Data Model Element collections",
    question: "How do I create a data model or a Data Model Element collection?",
    summary: "Custodians can create a new data model or a new Data Model Element collection, and become its custodian straight away.",
    keywords: ["create data model", "new data model", "data model elements", "new collection"],
    synonyms: ["add data model", "start a model", "data model element collection", "create collection"],
    steps: [
        "For a new data model: open Library > Data Models and click the create button in the title bar.",
        "For a new set of model elements: open Metadata > Data Model Elements and click its create button.",
        "Give it a name. The Metadata Repository app creates it and, if you are not an Admin, makes you its Data Custodian.",
        "Data Model Elements work like Data Elements: open a collection, pick an element and edit it in the form."
    ],
    who: "Custodian role and above. The create buttons are hidden for other roles.",
    tips: [
        "As custodian you can then add Editors and Co-custodians from the Ownership menu.",
        "Every change to ownership is recorded."
    ],
    related: ["dm-overview", "ownership", "roles"]
}
);

/* ============================== Dictionaries / Collections ============================== */
window.TOPICS.push(
{
    id: "dict-overview",
    area: "Dictionaries / Collections",
    title: "Dictionaries",
    question: "What is a dictionary?",
    summary: "A dictionary is a document-style view of a collection's data elements, with a cover page, preamble, abbreviations and a page per element.",
    keywords: ["dictionary", "dictionaries", "data dictionary", "cover page", "preamble", "abbreviations", "sensitivity"],
    synonyms: ["publication", "document", "open dictionary", "read dictionary", "guide for use", "examples", "notes", "what is a dictionary"],
    steps: [
        "Open Library > Dictionaries on Home and choose a collection.",
        "Each dictionary appears as a card. Click it (or right-click > Open Dictionary) to open it.",
        "The dictionary shows a cover page, a preamble, an abbreviations page, then one page per element, including sections such as Guide for use, Examples and Notes.",
        "The left panel lists the elements so you can jump to any page.",
        "Each page carries a sensitivity label (OFFICIAL, OFFICIAL: SENSITIVE or UNOFFICIAL)."
    ],
    who: "Everyone can read dictionaries.",
    tips: [
        "Right-click a dictionary card for quick actions such as Export Dictionary.",
        "Watch a dictionary to be told when it changes."
    ],
    related: ["dict-edit", "dict-export", "collections", "watch-subscriptions"]
},
{
    id: "dict-edit",
    area: "Dictionaries / Collections",
    title: "Creating and editing a dictionary",
    question: "How do I create and edit a dictionary?",
    summary: "Edit mode lets you change a dictionary's text, add collections of elements, and set its sensitivity.",
    keywords: ["edit dictionary", "new dictionary", "save as", "add collection", "edit mode", "sensitivity label", "formatting toolbar"],
    synonyms: ["create dictionary", "change dictionary", "copy dictionary", "duplicate dictionary"],
    steps: [
        "Open a dictionary and click Edit in the title bar to turn on edit mode.",
        "Click into the editable text (for example the preamble or an element's notes) and type your changes.",
        "One formatting toolbar is pinned just under the save status bar. It works on the rich text field you last clicked into (Disclaimer, Preamble, Appendix or Signature), and is greyed out until you click into one.",
        "Each collection in Dictionary Contents has a search box in edit mode. Type to filter its elements.",
        "Use + Add Collection in the left panel to bring in elements from another collection. Remove a group you don't need.",
        "Click a page's sensitivity label to change it; all pages are kept in step.",
        "Save with File > Save Dictionary or Ctrl+S. File > Save As makes a copy under a new name.",
        "File > New Dictionary starts a new one inside the collection you are in."
    ],
    who: "Anyone with edit access to the collection the dictionary belongs to. A dictionary follows the ownership of the collection with the same name.",
    tips: [
        "If you try to export while in edit mode, you are asked to save and leave edit mode first so the export matches what's saved.",
        "Read-only users don't see New, Save or Save As; export is still there."
    ],
    related: ["dict-overview", "dict-export", "dict-search", "rich-text", "ownership", "saving"]
},
{
    id: "dict-export",
    area: "Dictionaries / Collections",
    title: "Exporting a dictionary",
    question: "How do I export a dictionary?",
    summary: "Export a dictionary as a print-ready document, or export its element specifications as JSON or CSV.",
    keywords: ["export dictionary", "data dictionary export", "dictionary specs", "html", "derivation logic", "print"],
    synonyms: ["publish dictionary", "download dictionary", "share dictionary", "dictionary document", "pdf"],
    steps: [
        "Open the dictionary, then File > Export.",
        "Data Dictionary: asks whether to include Derivation Logic. Choose Include or Exclude, then pick where to save. The result is a web page you can open in a browser, print or save as PDF.",
        "Dictionary Specs: exports the specifications of the elements currently in the dictionary as JSON or CSV.",
        "Review: saves a draft copy that reviewers can add comments to. See “How do I send a dictionary out for review?”.",
        "If you are in edit mode, choose “Save & export” when asked. The Metadata Repository app saves first and only exports once the save has worked."
    ],
    who: "Everyone.",
    tips: [
        "Choose Exclude for derivation logic when the audience doesn't need the technical detail.",
        "Sensitivity labels are kept on the exported pages."
    ],
    related: ["dict-overview", "export-overview", "dict-edit", "dict-review-export"]
},{
    id: "dict-search",
    area: "Dictionaries / Collections",
    title: "Searching Dictionary Contents",
    question: "How do I find an element in a big dictionary while editing?",
    summary: "In edit mode, each collection in Dictionary Contents has its own search box that filters its elements as you type.",
    keywords: ["dictionary search", "search collection", "dictionary contents", "find element", "filter elements", "search box"],
    synonyms: ["search the dictionary", "find a field in a dictionary", "filter contents", "look for an element", "too many elements"],
    steps: [
        "Open a dictionary and click Edit to turn on edit mode.",
        "Under each collection in Dictionary Contents there is a Search box.",
        "Type part of an element's title or field name. The list filters as you type, and capital letters don't matter. “No matches” shows when nothing fits.",
        "Click × or press Escape to clear the search and see every element again."
    ],
    who: "Anyone with edit access to the dictionary. The search boxes only appear in edit mode.",
    tips: [
        "Searching only hides elements on screen. It doesn't change the dictionary, its order, what you save or what you export."
    ],
    related: ["dict-edit", "dict-overview"]
},
{
    id: "dict-review-export",
    area: "Dictionaries / Collections",
    title: "Sending a dictionary out for review",
    question: "How do I send a dictionary out for review?",
    summary: "File > Export > Review saves a draft copy of the dictionary that reviewers open in a web browser, comment on and send back.",
    keywords: ["review", "review copy", "export review", "export for review", "draft for review", "annual review", "comments", "watermark"],
    synonyms: ["circulate a dictionary", "send for comment", "get feedback on a dictionary", "commentable dictionary", "review round", "draft copy"],
    steps: [
        "Open the dictionary, then choose File > Export > Review. You can also right-click its card and choose Export for Review.",
        "Choose where to save it. The file is named after the dictionary, the word Review and today's date.",
        "The copy opens in any web browser. Its cover says DRAFT FOR REVIEW with a short “How to review” card, and the pages carry a light DRAFT watermark and can't be changed.",
        "Beside each element page is a Comments box, with General comments on the Preamble page.",
        "Email the copy to your reviewers. They add comments, save their own copy and email it back."
    ],
    who: "Everyone can export a review copy. Anyone with the file can comment on it.",
    tips: [
        "Send review copies by email. Opening them from shared online storage or a team chat doesn't keep the comments people save.",
        "When the copies come back, combine them with Tools > Dictionary Review Merge.",
        "The normal Data Dictionary export is unchanged."
    ],
    related: ["dict-review-comment", "dict-review-merge", "dict-export"]
},
{
    id: "dict-review-comment",
    area: "Dictionaries / Collections",
    title: "Commenting on a review copy",
    question: "How do I add comments to a dictionary review copy?",
    summary: "Open the review copy in a web browser, use Add comment beside a page, then Save my comments and send the saved copy back.",
    keywords: ["add comment", "comment", "comments", "reviewer", "save my comments", "review copy", "jump to commented"],
    synonyms: ["leave a comment", "comment on a dictionary", "give feedback", "how do reviewers comment", "send my comments back"],
    steps: [
        "Open the review copy you were sent in a web browser.",
        "The first time you comment, enter your name. It's shown on each of your comments.",
        "Click Add comment in the Comments box beside a page. Choose the section it's about (and the code, for permitted values), type it and add it. You can edit or delete your own comments.",
        "The floating panel at the bottom right shows how many comments there are and has Jump to commented, Print (with comments or pages only) and Download comments only.",
        "Click Save my comments to save a copy of the file with your comments in it, then email that copy back as asked."
    ],
    who: "Anyone who receives a review copy. The Metadata Repository app isn't needed.",
    tips: [
        "If you close the page without saving, you're warned first, and unsaved comments can usually be restored next time you open it.",
        "Saving again keeps the same file name pattern, ending with your name."
    ],
    related: ["dict-review-export", "dict-review-merge"]
},
{
    id: "dict-review-merge",
    area: "Dictionaries / Collections",
    title: "Merging review comments",
    question: "How do I merge review comments into one document?",
    summary: "Tools > Dictionary Review Merge combines every reviewer's commented copy into one consolidated review copy for final comment and sign-off.",
    keywords: ["review merge", "dictionary review merge", "merge comments", "consolidated", "combine comments", "sign-off", "tools"],
    synonyms: ["merge reviews", "combine reviews", "collate comments", "put all comments together", "consolidate feedback", "one review document"],
    steps: [
        "Open Tools > Dictionary Review Merge on Home.",
        "Drop in the commented review copies, and any comments-only files, or click browse to pick them.",
        "A table lists each file with its commenters, comment count, dictionary, export time and status (Base, OK, Different export, Different dictionary, Unreadable or Not a review file).",
        "Choose the base copy the pages come from. Files from another dictionary are left out unless you tick Include files from a different dictionary.",
        "Click Merge and save. The result is a review copy marked as consolidated, showing how many reviews it was merged from, with a filter to show one commenter's comments."
    ],
    who: "Everyone. It's normally used by the data custodian running the review.",
    tips: [
        "Repeated comments are only kept once. If the same comment was edited differently, the latest edit is kept and you're warned.",
        "Comments on elements that changed or were removed are gathered in an Unmatched comments card.",
        "The consolidated copy still takes comments and can be merged again, so final comments can be added the same way.",
        "Dropped files are only read for their comments; nothing in them is run."
    ],
    related: ["dict-review-export", "dict-review-comment", "c-custodian"]
},
{
    id: "collections",
    area: "Dictionaries / Collections",
    title: "Collections",
    question: "What is a collection?",
    summary: "A collection is a named group of related items, such as the data elements for one data set, and it is what ownership and permissions apply to.",
    keywords: ["collection", "collections", "data collection", "reference data", "group of elements"],
    synonyms: ["data set", "dataset", "folder", "category", "what is a collection"],
    steps: [
        "Data Elements, Data Model Elements, Data Models and Establishment List folders are all organised into collections.",
        "You pick a collection first, then work on the items inside it.",
        "Each collection can have a Data Custodian, Co-custodians, Editors and a Data Steward. They decide who can change it.",
        "A dictionary is built from one or more collections, and follows the ownership of the collection it is named after."
    ],
    who: "Everyone can view collections. Who can edit depends on the collection's ownership.",
    tips: [
        "Your phone's Profile app lists every collection where you hold a role.",
        "Use the Ownership menu on a collection's page to see who looks after it."
    ],
    related: ["ownership", "dict-overview", "de-open", "profile"]
}
);

/* ============================== Metadata Lookup ============================== */
window.TOPICS.push(
{
    id: "lookup",
    area: "Metadata Lookup",
    title: "Metadata Lookup definitions",
    question: "How do Metadata Lookup definitions work?",
    summary: "Metadata Lookup is a shared glossary: terms it knows are underlined in forms, with the definition on hover.",
    keywords: ["metadata lookup", "glossary", "definition", "hover", "tooltip", "term", "incorporation"],
    synonyms: ["what does this word mean", "underlined word", "popup definition", "terms", "lookup"],
    steps: [
        "When a form opens, the Metadata Repository app looks for glossary terms in its field labels and headings.",
        "Matching terms are underlined.",
        "Hover over a term for a moment to see its definition.",
        "Click the term to open a detail window with its name, definition, incorporation and other details.",
        "The glossary is maintained centrally, so everyone sees the same definitions."
    ],
    who: "Everyone sees and uses the definitions. Only Admins can add, rename or delete glossary entries.",
    tips: [
        "If a term is missing or out of date, send a Feature request through the Feedback app.",
        "New glossary entries show up the next time a form is opened."
    ],
    related: ["de-open", "dm-overview", "feedback"]
}
);

/* ============================== Data Warehouse ============================== */
window.TOPICS.push(
{
    id: "dw-connect",
    area: "Data Warehouse",
    title: "Connecting to the Data Warehouse",
    question: "How do I connect to the Data Warehouse?",
    summary: "The Data Warehouse page connects to a SQL Server with your Windows login and lists the tables you can see.",
    keywords: ["data warehouse", "sql", "sql server", "connect", "database", "tables", "columns", "preview"],
    synonyms: ["warehouse", "dw", "browse tables", "look at data", "table preview", "schema"],
    steps: [
        "Open Sources > Data Warehouse on Home.",
        "Enter the server name, and a database name if you want one, then click Connect. Your own Windows login is used; no password is asked for.",
        "The left panel lists the tables you have permission to see. Type in the filter box to find one.",
        "Select a table. The Columns tab shows its columns and types.",
        "The Preview tab shows the first rows. Choose how many rows (25 up to 2,500) and use Load more for extra rows.",
        "Open in query copies the table into the Query tab so you can write your own query."
    ],
    who: "Everyone, but you only see the tables and data your own database permissions allow.",
    tips: [
        "The server and database you last used are remembered on this computer.",
        "Copy CSV, Export CSV and Copy TSV are on both the Preview and Query tabs."
    ],
    related: ["dw-query", "metabot", "export-overview"]
},
{
    id: "dw-query",
    area: "Data Warehouse",
    title: "Running a Data Warehouse query",
    question: "How do I run a Data Warehouse query?",
    summary: "The Query tab runs one read-only SELECT query at a time, with a row limit, history and saved queries.",
    keywords: ["query", "select", "run query", "sql query", "saved queries", "query history", "max rows", "cancel"],
    synonyms: ["write sql", "run sql", "read only query", "with statement", "query tab", "run a data warehouse query", "run a query"],
    steps: [
        "Select the Query tab, type your SQL and click Run.",
        "Only one read-only statement is allowed. It must start with SELECT or WITH. Anything that would change data is refused with a clear message.",
        "Set Max rows to limit how many rows come back. Long queries stop after 60 seconds, or click Cancel to stop sooner.",
        "Query history keeps your recent queries. Saved queries lets you name, keep and delete your favourites. Both are stored on this computer only.",
        "Copy or export the results with Copy CSV, Export CSV or Copy TSV. Your Include headers choice is remembered."
    ],
    who: "Everyone with database access. The query runs with your own permissions.",
    tips: [
        "Metabot can draft a query and put it in the Query box. Always check it, then click Run yourself.",
        "Query results are never sent to Metabot."
    ],
    related: ["dw-connect", "metabot", "export-overview"]
}
);

/* ============================== Compare CSV ============================== */
window.TOPICS.push(
{
    id: "csv-compare",
    area: "Compare CSV",
    title: "Comparing two CSV files",
    question: "How do I compare two CSV files?",
    summary: "Compare CSV shows the rows that are only in file A, only in file B, or in both, and can highlight changed cells.",
    keywords: ["compare csv", "csv", "compare", "diff", "difference", "key columns", "full row", "only a", "only b"],
    synonyms: ["compare files", "compare two files", "reconcile", "spreadsheet compare", "how do i compare two csv files"],
    steps: [
        "Open Tools > Compare CSV on Home.",
        "Load File A and File B. Both need a header row.",
        "Choose a mode. Full row matches records that are identical in every column. Key columns matches rows on the columns you pick and highlights the cells that differ.",
        "In Key columns mode, tick the key columns once both files are loaded.",
        "Click Compare. The summary shows counts, and the tabs show Only A, Only B and Matching rows.",
        "Export Only A, Only B, a Diff report or, in Key columns mode, Paired diffs."
    ],
    who: "Everyone. Files are compared inside the Metadata Repository app on your computer and aren't saved to the repository.",
    tips: [
        "Columns are matched by header name, so the column order doesn't need to be the same.",
        "Spaces at the start and end of values are ignored. Each file is read up to its first 50,000 rows, and you are told if a file was capped.",
        "The tabs show sample rows for speed; the exports include every matching row."
    ],
    related: ["export-overview", "dw-query"]
}
);

/* ============================== Permissions / roles ============================== */
window.TOPICS.push(
{
    id: "roles",
    area: "Permissions / roles",
    title: "Roles: what each one can do",
    question: "What can each role do?",
    summary: "Your role (User, Editor, Custodian or Admin) decides what you can change across the Metadata Repository app.",
    keywords: ["role", "roles", "permission", "permissions", "user", "editor", "custodian", "admin", "access"],
    synonyms: ["read only role", "no access", "rights", "permission denied", "who can", "role levels"],
    steps: [
        "The Metadata Repository app recognises you from your Windows login. There is nothing extra to sign in to.",
        "User: can view and export, but can't change anything.",
        "Editor: can edit where editing is open to Editors, for example establishments and unowned establishment folders, and can be added as an editor of a collection.",
        "Custodian: everything an Editor can do, plus creating data models and Data Model Element collections, and requesting ownership of collections.",
        "Admin: can edit everything, add or delete establishments, look after the glossary, and approve ownership requests.",
        "On top of your role, each collection can have its own custodians and editors. See Collection ownership.",
        "If you haven't been set up yet, you get the User role."
    ],
    who: "Admins assign roles. Ask an Admin if you need a different one.",
    tips: [
        "Role changes apply within about 15 seconds; you don't need to restart.",
        "Every save is checked again when it happens, so a page that still looks editable will refuse a change you are no longer allowed to make.",
        "Your role is shown in the phone's Profile app."
    ],
    related: ["ownership", "ownership-requests", "profile", "offline-mode"]
},
{
    id: "ownership",
    area: "Permissions / roles",
    title: "Collection ownership",
    question: "How does collection ownership work?",
    summary: "Each collection can have a Data Custodian, Co-custodians, Editors and a Data Steward, and only they (and Admins) can change it.",
    keywords: ["ownership", "custodian", "data custodian", "co-custodian", "steward", "data steward", "owner", "owned", "unowned"],
    synonyms: ["who owns", "who looks after", "edit access", "add editor", "read-only banner", "get access", "who owns this collection", "who owns this", "who is the custodian"],
    steps: [
        "Open a collection (for example in Data Elements, Data Models, a dictionary or an Establishment List folder) and click Ownership in the title bar.",
        "The panel shows the Data Steward, the Data Custodian, any Co-custodians and Editors, and what you can do.",
        "Owned collection: its custodian, co-custodians and editors (and Admins) can edit. Everyone else sees it read-only, with a banner naming the custodian.",
        "Unowned collection: read-only for everyone except Admins, until someone takes ownership. Unowned establishment folders are the exception: Editors and above can still edit them.",
        "The custodian and co-custodians add or remove Editors and Co-custodians and set the Steward. Only Admins assign, transfer or remove the custodian.",
        "Every ownership change is recorded."
    ],
    who: "Everyone can see who owns a collection. Custodians and Co-custodians manage its members. Admins manage custodians.",
    tips: [
        "The page switches between read-only and editable by itself within about 15 seconds of a change, without reloading.",
        "Some collections are grouped so that one change applies to every collection in the group. The panel tells you when that happens."
    ],
    related: ["ownership-requests", "roles", "collections", "profile"]
},
{
    id: "ownership-requests",
    area: "Permissions / roles",
    title: "Requesting ownership",
    question: "How do I request ownership of a collection?",
    summary: "Custodians can ask to become the Data Custodian of an unowned collection, or ask for one to be transferred to them.",
    keywords: ["request ownership", "ownership request", "transfer", "approve", "pending", "decision"],
    synonyms: ["become custodian", "take over a collection", "ask for access", "transfer ownership", "my requests"],
    steps: [
        "Open the collection and click Request ownership in the banner or the Ownership panel. If it already has a custodian, the button reads “Request transfer of ownership”.",
        "Your request joins the queue. The current custodian is told about transfer requests.",
        "An Admin approves or declines it. Approving makes you the Data Custodian.",
        "You are told about the decision through the notifications bell and the phone's Mail app.",
        "See your pending and decided requests in the phone's Profile app under My requests."
    ],
    who: "Users with the Custodian role can request. Admins decide.",
    tips: [
        "Need edit access but not ownership? Ask the current custodian to add you as an Editor instead.",
        "You can cancel a request while it is still pending."
    ],
    related: ["ownership", "roles", "mail", "profile"]
}
);

/* ============================== Offline mode ============================== */
window.TOPICS.push(
{
    id: "offline-mode",
    area: "Offline mode",
    title: "Offline mode",
    question: "What happens in offline mode?",
    summary: "If the Metadata Repository app can't reach the shared repository, it keeps running with limited features and shows an “Offline mode” badge.",
    keywords: ["offline", "offline mode", "limited mode", "repository unavailable", "vpn", "network", "retry", "browse"],
    synonyms: ["can't connect", "cant connect", "no network", "working from home", "disconnected", "cannot save", "why am i seeing offline", "offline pill", "offline badge", "why does it say offline"],
    steps: [
        "When the Metadata Repository app starts and can't reach the repository, a window offers Retry, Browse, Continue with limited features, or Quit.",
        "Retry tries again (for example after connecting to VPN). Browse lets you choose the repository folder yourself.",
        "Continue with limited features opens the app without the shared content. Nothing can be saved, and an orange “Offline mode” pill shows in the title bar.",
        "If the connection drops while you are working, the Metadata Repository app shows the same pill, stops saving, and keeps checking quietly. When the connection comes back, the pill goes away and you can carry on.",
        "Any save attempted while offline is refused with a message, and your changes stay on screen as unsaved."
    ],
    who: "Everyone. Editing is off for every role while offline.",
    tips: [
        "If you chose Continue with limited features, restart the Metadata Repository app once you are connected to get everything back.",
        "Some phone apps show cached information while offline, for example your Profile."
    ],
    related: ["saving", "roles", "phone-basics"]
}
);

/* ============================== Phone apps ============================== */
window.TOPICS.push(
{
    id: "phone-basics",
    area: "Phone apps",
    title: "The phone panel",
    question: "How does the phone panel work?",
    summary: "The phone panel is a pocket toolkit at the side of the app, with Metabot, Mail, Feedback, messages, a camera and more.",
    keywords: ["phone", "mobile view", "phone panel", "apps", "home search", "lock screen", "widgets", "badges"],
    synonyms: ["mobile", "side panel", "phone apps", "lock", "unlock", "notifications"],
    steps: [
        "Click the phone button at the top right of any page to open or close the phone.",
        "Tap an app icon to open it, and use the back arrow inside the app to return.",
        "The search box on the phone's home screen finds apps, contacts, Mail, messages, Gallery captures and your collections.",
        "Home widgets show unread Mail, latest captures, your collections, recent messages and your feedback.",
        "Unread badges on app icons show what's new.",
        "If you turn on Lock screen in Settings, the phone opens on a lock screen with the time and your notifications. Swipe up or click to unlock, or click a notification to go straight to it."
    ],
    who: "Everyone.",
    tips: [
        "Choose which widgets and badges you want in the Settings app.",
        "The phone hides itself while you take a capture, so it never appears in the picture."
    ],
    related: ["metabot", "phone-settings", "mail", "camera-gallery"]
},
{
    id: "metabot",
    area: "Phone apps",
    title: "Metabot",
    question: "How does Metabot work?",
    summary: "Metabot is the built-in assistant: ask it questions, have it open pages, find elements, draft SQL or file feedback for you.",
    keywords: ["metabot", "assistant", "ai", "chat", "bot", "llm", "grok", "gemini"],
    synonyms: ["ask a question", "help bot", "chatbot", "ai assistant", "talk to", "how does metabot work"],
    steps: [
        "Open the Metabot app on the phone and type a message. Use the expand button for a bigger chat window.",
        "Metabot knows which page you are on and what you have open, so you can ask about it directly.",
        "It can take actions for you: open a page, find and open an element, open an establishment, list your watched items, list or open dictionaries and collections, and list or describe warehouse tables.",
        "On the Data Warehouse page it can draft SQL and place it in the Query box for you to check and run.",
        "Ask it to file a bug or a feature request and it will, after checking which type you mean.",
        "Use the Tools button to attach an image from the Gallery or snip part of the screen."
    ],
    who: "Everyone. Smart answers need an AI service turned on in Settings with your own key. Without one, Metabot still answers simple questions and can move you around the app.",
    tips: [
        "Query results and data rows are never sent to the AI service. If you paste result rows, Metabot removes them and tells you.",
        "Your AI key is stored on your computer only.",
        "If Metabot says your network needs an acknowledgement, see the Metabot network topic."
    ],
    related: ["metabot-network", "phone-settings", "dw-query", "feedback"]
},
{
    id: "metabot-network",
    area: "Phone apps",
    title: "Metabot network acknowledgement and status",
    question: "What do the Metabot network acknowledgement and status mean?",
    summary: "If your network asks you to acknowledge AI use before allowing it, Metabot tells you and helps you get connected.",
    keywords: ["acknowledgement", "acknowledge", "network", "intercepted", "retry", "status", "connected", "network error"],
    synonyms: ["metabot not working", "metabot can't connect", "blocked", "ai use page", "needs acknowledgement"],
    steps: [
        "Some networks show an “acknowledge AI use” page before they let AI services through.",
        "When that happens, Metabot shows a message instead of an answer, with two buttons: Open acknowledgement page and Retry.",
        "Click Open acknowledgement page. Your browser opens; accept the acknowledgement there.",
        "Come back and click Retry. Your original message is sent again, so you don't need to retype it.",
        "A small status indicator shows Connected, Needs acknowledgement, or Offline/Network error."
    ],
    who: "Everyone who uses Metabot with an AI service.",
    tips: [
        "Metabot never opens, follows or accepts anything by itself; you stay in control.",
        "Offline/Network error usually means VPN or the internet is down rather than an acknowledgement."
    ],
    related: ["metabot", "offline-mode"]
},
{
    id: "signature",
    area: "Phone apps",
    title: "Digital signature",
    question: "How does the digital signature work?",
    summary: "The Signature app makes a signature block image with your name and the date and time, ready to paste into Word.",
    keywords: ["signature", "digital signature", "sign", "signature block", "word", "clipboard"],
    synonyms: ["sign a document", "e-signature", "esignature", "signed by", "copy signature"],
    steps: [
        "Open the Signature app on the phone. Your full name is filled in for you; you can change it.",
        "A preview shows the block: your name on the left, and on the right “Digitally signed by”, your name, today's date and the time.",
        "Click Copy Signature Block. A high-quality image is copied to your clipboard.",
        "Paste it into Word or another document. It keeps its size and looks sharp when printed."
    ],
    who: "Everyone.",
    tips: [
        "The date and time are stamped at the moment you click Copy, so copy it just before you paste.",
        "Long names shrink to fit so they stay inside the block."
    ],
    related: ["phone-basics", "profile"]
},
{
    id: "torch",
    area: "Phone apps",
    title: "Torch and battery",
    question: "How do the torch and battery work?",
    summary: "The Torch app lights up the area beside the phone, and uses the phone's battery while it's on.",
    keywords: ["torch", "flashlight", "light", "battery", "low battery", "charge"],
    synonyms: ["flash light", "lamp", "power", "phone turned off", "recharge"],
    steps: [
        "Tap the Torch icon on the phone to switch the light on, and tap it again to turn it off.",
        "The battery indicator at the top of the phone goes down while the torch is on.",
        "At 10% you get a Low Battery warning.",
        "At 0% the torch turns off and the phone powers down. Click the power spot to charge it; the phone restarts at 100% and returns to its home screen.",
        "The torch also turns off when you close the phone."
    ],
    who: "Everyone.",
    tips: [
        "The battery only drains while the torch is on.",
        "The torch can't be turned on with a flat battery; charge it first."
    ],
    related: ["phone-basics"]
},
{
    id: "camera-gallery",
    area: "Phone apps",
    title: "Camera and Gallery",
    question: "How do the Camera and Gallery work?",
    summary: "Camera captures part or all of the app window, and Gallery keeps your captures so you can mark them up or share them.",
    keywords: ["camera", "gallery", "snip", "screenshot", "capture", "markup", "share", "image"],
    synonyms: ["screen capture", "take a picture", "print screen", "annotate", "photos", "albums"],
    steps: [
        "Open Camera. Choose Snip to drag a box around part of the app, or Screenshot for the whole window.",
        "A small “Saved to Gallery” message appears. Click Edit on it to mark up the capture.",
        "Open Gallery to see your captures. Albums group them, for example Captures, Bug reports and Feature requests.",
        "Open a capture to zoom, mark up a copy, share it to a direct message or delete it.",
        "Snip is also available in Metabot, Feedback and direct messages to attach an image."
    ],
    who: "Everyone. Captures are kept on your own computer.",
    tips: [
        "Choose whether Camera opens on Snip or Screenshot in Settings.",
        "Double-click an image in the viewer to switch between fit and 100%."
    ],
    related: ["feedback", "direct-messages", "phone-settings"]
},
{
    id: "direct-messages",
    area: "Phone apps",
    title: "Direct messages and Contacts",
    question: "How do direct messages and Contacts work?",
    summary: "The DM app lets you send short messages and images to colleagues who use the Metadata Repository app.",
    keywords: ["dm", "direct message", "message", "chat", "contacts", "send image"],
    synonyms: ["talk to a colleague", "messaging", "instant message", "send a message", "people"],
    steps: [
        "Open Contacts to find a colleague, or open DM to see your conversations.",
        "Open a conversation, type your message and press Send.",
        "Use the Tools button to attach an image from the Gallery or snip the screen.",
        "Open conversations refresh by themselves, and an unread badge shows on the DM icon."
    ],
    who: "Everyone.",
    tips: [
        "From the Gallery viewer, Share sends a capture straight to a conversation.",
        "Messages are kept with the team's shared data, so treat them like work email."
    ],
    related: ["camera-gallery", "phone-basics", "mail"]
},
{
    id: "profile",
    area: "Phone apps",
    title: "Profile",
    question: "What does the Profile app show?",
    summary: "The Profile app shows your name and role, the collections you look after, and your ownership requests.",
    keywords: ["profile", "my collections", "my requests", "my role", "refresh"],
    synonyms: ["who am i", "what role do i have", "my access", "collections i own"],
    steps: [
        "Open the Profile app on the phone.",
        "The top shows your name and your role.",
        "My collections lists every collection where you are a custodian, co-custodian, editor or steward, with your role in each. Click one to open it.",
        "My requests lists your ownership requests and whether they are pending, approved or declined.",
        "Click Refresh to load the latest details."
    ],
    who: "Everyone.",
    tips: [
        "When offline, Profile shows the last copy it saved, with the time it was made.",
        "Clear cached data in Settings if your profile looks out of date."
    ],
    related: ["roles", "ownership", "ownership-requests", "phone-settings"]
},
{
    id: "phone-settings",
    area: "Phone apps",
    title: "Phone Settings and Theme",
    question: "How do phone Settings and Theme work?",
    summary: "Settings controls the phone's clock, lock screen, badges, widgets and Metabot's AI service, and Theme changes the wallpaper.",
    keywords: ["settings", "theme", "wallpaper", "clock", "12-hour", "24-hour", "clear cache", "api key"],
    synonyms: ["preferences", "options", "customise", "customize", "background", "change wallpaper"],
    steps: [
        "Open Settings on the phone.",
        "Phone settings: wallpaper, 12-hour or 24-hour clock, which mode Camera opens with, lock screen on or off, unread badges and home widgets. These save automatically.",
        "Metabot brain: turn the AI service on, pick the provider (xAI or Google Gemini) and model, and enter your key. Click the save button to store these.",
        "Storage: Clear cached data removes saved profile details and loaded message images. Your captures, Mail and settings are kept.",
        "Open the Theme app to pick a phone wallpaper from a grid."
    ],
    who: "Everyone. Settings are personal to you and your computer.",
    tips: [
        "Your AI key is stored on this computer only.",
        "Turn off widgets you don't use to keep the home screen tidy."
    ],
    related: ["metabot", "phone-basics", "camera-gallery"]
}
);

/* ============================== Mail and Feedback ============================== */
window.TOPICS.push(
{
    id: "feedback",
    area: "Mail and Feedback",
    title: "Sending feedback (bugs and feature requests)",
    question: "How do I send feedback, bugs or feature requests?",
    summary: "The Feedback app is how you report a problem or ask for something new, with a screenshot if you like.",
    keywords: ["feedback", "bug", "bug report", "feature", "feature request", "report a problem", "suggestion"],
    synonyms: ["something broke", "error", "issue", "idea", "request a change", "log a bug", "complain"],
    steps: [
        "Open the Feedback app on the phone.",
        "Choose Bug (what broke) or Feature (what you'd like next).",
        "Describe it. For a bug, say what happened, where, and what you expected.",
        "Use Tools to attach an image from the Gallery, or Snip screen to capture the problem.",
        "Press Send. Your feedback is filed, and you can follow it and its status under My feedback.",
        "When the status changes or someone replies, you get a message in the Mail app."
    ],
    who: "Everyone.",
    tips: [
        "You can also just tell Metabot “file a bug: ...” and it will file it for you.",
        "A snip of the exact screen saves a lot of back-and-forth."
    ],
    related: ["mail", "camera-gallery", "metabot"]
},
{
    id: "mail",
    area: "Mail and Feedback",
    title: "Mail app",
    question: "How does the Mail app work?",
    summary: "Mail collects updates for you in one place: feedback replies and status changes, ownership requests and watched-item changes.",
    keywords: ["mail", "inbox", "unread", "mark all read", "response", "reply", "status change"],
    synonyms: ["messages from the team", "notifications inbox", "feedback reply", "updates"],
    steps: [
        "Open the Mail app on the phone. An unread badge on the icon shows how many new messages you have.",
        "Messages arrive when your feedback changes status, when someone responds to your feedback, when there are ownership request updates, and when watched items change.",
        "Open a message to read it. Many messages have a button that takes you to the right place, such as Open Feedback or Open Ownership Requests.",
        "Use Mark unread to keep a message for later, or Mark all read to clear the badge."
    ],
    who: "Everyone. Mail is personal and kept on your computer.",
    tips: [
        "Mail is read-only: reply through Feedback or a direct message.",
        "The first time Mail runs it quietly notes where things stand, so you are only told about changes after that."
    ],
    related: ["feedback", "watch-subscriptions", "ownership-requests"]
}
);

/* ============================== Saving / unsaved changes / Ctrl+S ============================== */
window.TOPICS.push(
{
    id: "saving",
    area: "Saving / unsaved changes / Ctrl+S",
    title: "Saving and Ctrl+S",
    question: "How do saving and Ctrl+S work?",
    summary: "Ctrl+S saves the page you're on, and the Metadata Repository app only says “Saved” once your change has really been stored.",
    keywords: ["save", "saving", "ctrl+s", "ctrl s", "saved", "not saved", "keyboard shortcut"],
    synonyms: ["how do i save", "save shortcut", "did it save", "save failed", "control s"],
    steps: [
        "Press Ctrl+S, or use File > Save, on editing pages such as Data Elements, Data Models, Dictionaries and Establishment List folders.",
        "Before saving, the Metadata Repository app finishes the field you are typing in so nothing is missed.",
        "The status area shows that it is saving, then Saved once the change is safely stored.",
        "If the save is refused (for example you lost edit access, someone else changed it, or you are offline), you see why and your changes stay on screen as unsaved so you can try again.",
        "If you are read-only, Ctrl+S just reminds you that saving is turned off for your role."
    ],
    who: "Anyone with edit access to what they're working on.",
    tips: [
        "On the Establishments page, save an edited card with its Save button or File > Save.",
        "Some tool screens have nothing to save, so Ctrl+S does nothing there."
    ],
    related: ["unsaved-changes", "de-versions", "offline-mode"]
},
{
    id: "unsaved-changes",
    area: "Saving / unsaved changes / Ctrl+S",
    title: "Unsaved changes warnings",
    question: "Why do I see an unsaved changes warning?",
    summary: "The Metadata Repository app tracks changes you haven't saved yet and asks before you leave, so you don't lose work.",
    keywords: ["unsaved changes", "unsaved", "discard", "leave page", "lose changes", "warning"],
    synonyms: ["lost my work", "are you sure", "dirty", "pop up when leaving", "changes not saved"],
    steps: [
        "As soon as you change something, “Unsaved changes” appears in the status area.",
        "If you try to leave the page or open another item, a box asks what you'd like to do.",
        "Save stores your changes and then moves on. Discard throws them away and moves on. Cancel keeps you where you are.",
        "Once you save, the warning clears."
    ],
    who: "Anyone who can edit. Read-only users never see the warning because they can't make changes.",
    tips: [
        "Cancel is always safe if you're unsure.",
        "Using tool screens that have nothing to save doesn't trigger the warning."
    ],
    related: ["saving", "dict-edit"]
}
);

/* ============================== Export options ============================== */
window.TOPICS.push(
{
    id: "export-overview",
    area: "Export options",
    title: "All export options at a glance",
    question: "What are all the export options?",
    summary: "A quick list of everything you can export from the Metadata Repository app and where to find it.",
    keywords: ["export", "exports", "download", "csv", "json", "pdf", "png", "print", "copy"],
    synonyms: ["get data out", "save a copy", "report", "extract", "spreadsheet", "export options"],
    steps: [
        "Data Elements (File > Export): Data Element (JSON or CSV), Element Specifications, Collection Specifications, Code List (CSV, with an anomalies report when something looks wrong) and Mapping File.",
        "Dictionaries (File > Export): Data Dictionary (print-ready document, with or without derivation logic), Dictionary Specs (JSON or CSV) and Review (a draft copy reviewers can comment on).",
        "Tools > Dictionary Review Merge: one consolidated review copy from all the commented copies.",
        "Establishments (File menu): listed establishments as CSV or JSON, Copy for Word / Excel, and Print / Save as PDF.",
        "Data Models (Diagram view, including the expanded view): Export PNG of the relationship diagram.",
        "Data Warehouse (Preview and Query tabs): Copy CSV, Export CSV and Copy TSV.",
        "Compare CSV: Only A, Only B, Diff report and Paired diffs."
    ],
    who: "Everyone can export. The only exception is the Data Elements Mapping File, which is Editor and above because it saves into the repository.",
    tips: [
        "Exports never change the repository (apart from the Mapping File).",
        "For establishments, filter first: exports use the establishments currently listed."
    ],
    related: ["de-export", "dict-export", "est-export", "dw-query", "csv-compare"]
}
);

/* ============================== Concepts ============================== */
window.TOPICS.push(
{
    id: "c-metadata",
    area: "Concepts",
    title: "What metadata is",
    question: "What is Metadata?",
    summary: "Metadata is data about data: the information that explains what a piece of data means, how it is recorded and who is responsible for it.",
    keywords: ["metadata", "meta data", "data about data", "definition", "data quality", "data standards", "health data"],
    synonyms: ["what is metadata", "what does metadata mean", "define metadata", "why does metadata matter", "what is a data standard"],
    steps: [
        "Data on its own is just values, such as “3” or “2024-05-01”. Metadata tells you what those values mean: which field they belong to, what the field is for, and how it should be filled in.",
        "Typical metadata for one field (a data element): its name and definition, data type and format (for example a date as DD/MM/YYYY), size, whether it is mandatory, its permitted values (code and description pairs such as 1 = Public, 2 = Private), how it is derived, and its version dates.",
        "It also says who is responsible: each collection has a Data Custodian who looks after it and decides who can change it, and may have a Data Steward.",
        "Why it matters for health data: the same word can mean different things in different systems. Agreed definitions and permitted values mean counts, reports and data linkage compare like with like.",
        "It underpins data quality. When everyone records a field the same way, errors are easier to spot, and analysts know exactly what they are looking at.",
        "How the Metadata Repository manages it: data elements hold definitions, formats and permitted values, with dated versions. Collections group them and carry ownership. Dictionaries publish them as readable documents. Data models describe tables and how they relate. Metadata Lookup gives hover definitions for common terms. Establishment codes are shown with their descriptions using mapping files."
    ],
    who: "Everyone.",
    tips: [
        "If you're unsure what a field means, open its data element. The definition, guide for use and permitted values are the authoritative answer.",
        "Ask “What's the difference between a data element, a collection and a dictionary?” for how the pieces fit together."
    ],
    related: ["c-element-collection-dictionary", "de-open", "c-custodian", "dict-overview"]
},
{
    id: "c-element-collection-dictionary",
    area: "Concepts",
    title: "Data elements, collections and dictionaries",
    question: "What's the difference between a data element, a collection and a dictionary?",
    summary: "A data element describes one field, a collection groups related data elements and carries ownership, and a dictionary publishes a collection as a readable document.",
    keywords: ["difference", "data element", "collection", "dictionary", "compare", "relationship"],
    synonyms: ["data element vs collection", "collection vs dictionary", "how do they fit together", "element collection dictionary"],
    steps: [
        "Data element: the description of one field, such as “Admission date”: its definition, type, format, permitted values and versions. You edit these in Metadata > Data Elements.",
        "Collection: a named group of related data elements, usually one data set or one set of reference data. Ownership is set per collection, so the Data Custodian, Co-custodians and Editors of a collection decide who can change its elements.",
        "Dictionary: a document-style view built from a collection's data elements, with a cover page, preamble, abbreviations and a page per element. Open them from Library > Dictionaries, and export them as a print-ready document.",
        "In short: you maintain data elements, inside a collection, and publish them as a dictionary.",
        "Data models are related but separate: they describe tables and how they join, and use their own Data Model Element collections."
    ],
    who: "Everyone.",
    tips: [
        "A dictionary follows the ownership of the collection it is named after, so the same people can edit both."
    ],
    related: ["c-metadata", "collections", "dict-overview", "de-open"]
},
{
    id: "c-custodian",
    area: "Concepts",
    title: "What a custodian is",
    question: "What is a custodian?",
    summary: "A Data Custodian is the person responsible for a collection: they decide who can change it. “Custodian” is also the name of a role that lets people create and request collections.",
    keywords: ["custodian", "data custodian", "co-custodian", "steward", "data steward", "responsible", "owner"],
    synonyms: ["what is a custodian", "what is a data custodian", "what is a steward", "what is a co-custodian", "custodian vs steward"],
    steps: [
        "Data Custodian: set on each collection. They are accountable for its content and decide who else may edit it. Their name is shown in the Ownership panel and in the read-only banner.",
        "Co-custodians: share the custodian's job for that collection. Custodians and co-custodians add or remove Editors and Co-custodians and set the Data Steward.",
        "Editors: can change the collection's content, but not who has access.",
        "Data Steward: recorded against the collection as the subject-matter contact. Being steward doesn't by itself give edit access.",
        "The Custodian role (separate from being a collection's Data Custodian) lets someone create data models and Data Model Element collections and request ownership of collections.",
        "Only Admins assign, transfer or remove a Data Custodian, usually by approving an ownership request."
    ],
    who: "Everyone can see who the custodian is. Admins assign custodians.",
    tips: ["To get edit access, ask the collection's Data Custodian to add you as an Editor."],
    related: ["ownership", "ownership-requests", "roles", "task-access"]
}
);

/* ============================== Everyday tasks ============================== */
window.TOPICS.push(
{
    id: "task-new-element",
    area: "Everyday tasks",
    title: "Creating a new data element",
    question: "How do I create a new data element?",
    summary: "Open the collection, choose File > New, fill in the blank form and save. The new element gets the next number in the collection and appears in the list.",
    keywords: ["new data element", "create element", "add element", "new element", "file new", "new record"],
    synonyms: ["how do i add a data element", "add a new field", "create a data element", "make a new element"],
    steps: [
        "Open Metadata > Data Elements on Home and choose the collection the element belongs to.",
        "Choose File > New. A blank form opens on the right.",
        "Fill in the details: title, field name, definition, data type, format, size, requirement status, permitted values and any guide for use, examples or notes.",
        "Save with Ctrl+S or File > Save. The status shows “Creating…”, then “Created successfully”.",
        "The element is added to the collection with the next free number and appears in the left list under its title.",
        "Save New Version isn't available until the new element has been saved once."
    ],
    who: "Anyone with edit access to the collection: its custodians and editors, or an Admin.",
    tips: [
        "If File > New is missing, you're read-only for that collection. See “Why can't I edit this?”.",
        "Data Model Element collections work the same way from Metadata > Data Model Elements."
    ],
    related: ["de-open", "de-versions", "trouble-cant-edit"]
},
{
    id: "task-access",
    area: "Everyday tasks",
    title: "Getting access or a higher role",
    question: "How do I request access or a higher role?",
    summary: "Ask an Admin for a different role, ask a collection's Data Custodian to add you as an Editor, or, with the Custodian role, request ownership in the app.",
    keywords: ["request access", "higher role", "permission", "editor access", "get access", "upgrade role", "role change"],
    synonyms: ["how do i get edit access", "how do i become an editor", "how do i get permission", "i need access", "request a role"],
    steps: [
        "Check what you have now: the phone's Profile app shows your role, and a collection's Ownership panel shows what you can do there.",
        "A different role (for example Editor or Custodian): roles are set centrally by an Admin. There's no in-app request form for roles, so contact an Admin and say what you need to do.",
        "Edit access to one collection: ask its Data Custodian or a Co-custodian (named in the Ownership panel and in the read-only banner) to add you as an Editor.",
        "Becoming a collection's custodian: with the Custodian role, open the collection and use Request ownership, or Request transfer of ownership if it already has a custodian. An Admin decides.",
        "You hear about ownership decisions through the notifications bell and the phone's Mail app, and can track them in Profile > My requests."
    ],
    who: "Everyone can ask. Admins set roles and decide ownership requests; custodians add editors.",
    tips: ["Role and access changes apply within about 15 seconds without restarting."],
    related: ["roles", "ownership", "ownership-requests", "trouble-cant-edit"]
},
{
    id: "task-restore",
    area: "Everyday tasks",
    title: "Restoring something you deleted",
    question: "How do I restore something I deleted?",
    summary: "Deleted data elements can be brought back from File > Deleted Items. Other deletions don't have a restore button, so ask an Admin straight away.",
    keywords: ["restore", "undelete", "recover", "deleted items", "undo delete", "bring back"],
    synonyms: ["i deleted something", "get back a deleted", "recover a deleted element", "restore deleted", "restore something i deleted", "restore something"],
    steps: [
        "Data elements (and Data Model Elements): open the collection and choose File > Deleted Items. Pick the element and click Restore.",
        "If another element now uses the same place, choose “Rename & Restore” so both are kept.",
        "Deleted elements stay in the collection's deleted area until restored, so they aren't lost.",
        "Dictionaries: deleting a dictionary removes it, and there's no Deleted Items list for dictionaries. Its data elements are not affected, so it can be recreated.",
        "Establishments: deleted records are moved aside rather than erased, and edits keep a backup, but there's no restore button. Ask an Admin as soon as possible if something was removed by mistake."
    ],
    who: "Anyone with edit access to the collection can restore data elements.",
    tips: ["Restoring brings back the element with all its versions."],
    related: ["de-delete-restore", "est-edit", "dict-edit"]
},
{
    id: "rich-text",
    area: "Everyday tasks",
    title: "Formatting rich text",
    question: "How do I format text in rich text fields?",
    summary: "Rich text fields have a formatting toolbar with headings, lists, tables, links and colour, plus keyboard shortcuts, Tab for indenting and undo.",
    keywords: ["format text", "formatting", "bold", "bullet", "bullets", "list", "indent", "tab", "paste", "undo", "redo", "heading", "rich text"],
    synonyms: ["make text bold", "bullet points", "numbered list", "paste from word", "paste plain text", "keyboard shortcuts", "add a table", "add a link"],
    steps: [
        "Click into a rich text field, such as a data element's Definition or Guide for use, or a dictionary's Preamble in edit mode.",
        "Use the toolbar buttons. Buttons light up to show the formatting where your cursor is, and hovering shows each button's name and shortcut. Heading buttons switch a heading on and off, and Undo and Redo buttons sit on the toolbar.",
        "Tab indents or outdents in lists, adds four spaces in normal text, and moves between cells in a table. Press Escape, then Tab, to leave the field.",
        "Pasting from Word or the web keeps basic formatting. Press Ctrl+Shift+V to paste plain text.",
        "Links can be added, edited and removed. Unsafe links are blocked. Table edits can be undone."
    ],
    who: "Anyone with edit access to what they're working on.",
    tips: [
        "Each field remembers where your cursor was, so a new bullet list lands where you expect.",
        "In a dictionary, the one pinned toolbar works on the rich text field you last clicked into."
    ],
    related: ["dict-edit", "de-open", "saving"]
}
);

/* ============================== Troubleshooting ============================== */
window.TOPICS.push(
{
    id: "trouble-cant-edit",
    area: "Troubleshooting",
    title: "Why you can't edit something",
    question: "Why can't I edit this?",
    summary: "Usually because of your role, the collection's ownership, or being offline. The banner or status message on the page says which.",
    keywords: ["troubleshooting", "can't edit", "cant edit", "read-only", "read only", "locked", "greyed out", "no save", "not allowed"],
    synonyms: ["why can't i edit this", "why cant i edit", "why is it read only", "why can't i save", "edit button missing", "saving is disabled"],
    steps: [
        "Your role is User: Users can view and export everywhere but change nothing. Ctrl+S shows “Read-only: saving is disabled for your role.”",
        "The collection is owned by someone else: a banner names its Data Custodian. Only the custodian, co-custodians and editors (and Admins) can change it. Ask the custodian to add you as an Editor.",
        "The collection has no custodian yet: it's read-only for everyone except Admins until someone takes ownership (Custodian role users can request it). Unowned establishment folders are the exception: Editors and above can edit them.",
        "An establishment field is marked Read-only: it comes from an Establishment List folder owned by another team. Ask that folder's Data Custodian to change it.",
        "You're offline: an orange Offline mode pill shows, and nothing can be saved until the repository is reachable again.",
        "The ownership record can't be read: changes are blocked until an Admin fixes it, and the message says so.",
        "Some areas are always restricted: for example the Metadata Lookup glossary is managed by Admins."
    ],
    who: "Everyone.",
    tips: [
        "Open the Ownership panel in the title bar to see exactly who can edit this collection and what you can do."
    ],
    related: ["task-access", "roles", "ownership", "offline-mode"]
},
{
    id: "trouble-not-saved",
    area: "Troubleshooting",
    title: "When changes didn't save",
    question: "My changes didn't save, what happened?",
    summary: "The app only says Saved once the change is stored. If a save is refused, it shows why and keeps your changes on screen as unsaved.",
    keywords: ["troubleshooting", "didn't save", "not saved", "save failed", "lost changes", "unsaved", "changes gone", "nothing was saved"],
    synonyms: ["my changes didn't save", "my changes disappeared", "why didn't it save", "save not working", "lost my work"],
    steps: [
        "Look at the status area and any message. Common reasons: you're offline; you no longer have edit access (roles and ownership are re-checked on every save); or, for establishments, someone else changed the same record since you opened it.",
        "Your edits stay on screen marked “Unsaved changes”. Don't navigate away. Fix the cause and save again.",
        "Offline: reconnect (for example VPN). When the Offline pill disappears, save again.",
        "Access changed: open the Ownership panel to see who can edit, and ask the custodian if you need access back.",
        "Establishment conflict: choose Reload values to see the latest version, then make your change again.",
        "“No changes to save” means nothing had changed since the last save.",
        "If you left the page and chose Discard, those changes were thrown away on purpose."
    ],
    who: "Everyone who edits.",
    tips: [
        "For long text, copy it somewhere safe before retrying if you're worried.",
        "If a save keeps failing with no clear reason, send a bug report from the phone's Feedback app."
    ],
    related: ["saving", "unsaved-changes", "offline-mode", "trouble-overwritten"]
},
{
    id: "trouble-overwritten",
    area: "Troubleshooting",
    title: "When someone else's save overwrote yours",
    question: "Someone else's save overwrote mine",
    summary: "For most records the last save wins: if two people edit the same item, the later save replaces the earlier one. Establishments are the exception and warn you instead.",
    keywords: ["troubleshooting", "overwrote", "overwritten", "overwrite", "last save wins", "conflict", "same time", "lost edit"],
    synonyms: ["someone overwrote my changes", "two people editing", "my edit was replaced", "who saved last"],
    steps: [
        "There's no locking. If two people have the same data element, data model or dictionary open, whoever saves last replaces the other person's changes.",
        "Save corrects the current version in place, so an overwritten correction has to be made again. Earlier versions created with Save New Version are kept.",
        "Establishments check for this: if the record changed since you opened it, your save is refused and you can Reload values and reapply your change.",
        "To recover lost work, redo the change, or ask an Admin if it was significant.",
        "To prevent it: agree who is editing what, keep edit access to the people who need it, and Watch items so you're told within about 15 seconds when someone else changes them."
    ],
    who: "Everyone who edits.",
    tips: [
        "Reopen an item before editing it if it's been open for a long time, so you start from the latest copy."
    ],
    related: ["watch-subscriptions", "t-concurrency", "trouble-not-saved", "de-versions"]
},
{
    id: "trouble-slow",
    area: "Troubleshooting",
    title: "When the app is slow or won't load",
    question: "The app is slow or won't load",
    summary: "Most slowness comes from the network connection to the shared repository or from an update being applied at startup.",
    keywords: ["troubleshooting", "slow", "won't load", "wont load", "loading", "hang", "frozen", "stuck", "performance", "startup"],
    synonyms: ["the app is slow", "it won't open", "stuck on splash", "takes ages", "not loading", "blank screen"],
    steps: [
        "Stuck on the splash screen: it may be checking for or applying an update (“Checking for updates…”, “Applying updates…”). Give it a moment; it restarts itself after updating.",
        "“Can't reach the metadata repository”: you're not connected to the network the repository is on. Connect (for example VPN) and choose Retry, or continue with limited features.",
        "Slow lists or pages: everything is read from the shared repository over the network, so a slow connection or VPN makes pages slower. Establishment cards load in chunks as you scroll.",
        "The derivation logic code box looks plain: its editor loads from the internet. Without that it falls back to a simple text box that still works.",
        "Data Warehouse queries stop after 60 seconds. Use a smaller row limit or a narrower query, or Cancel.",
        "If a page looks wrong, go Home and open it again, or close and restart the app."
    ],
    who: "Everyone.",
    tips: [
        "If it's still slow, send a bug report from the phone's Feedback app saying which page and roughly when."
    ],
    related: ["offline-mode", "patch-notes", "feedback"]
}
);

/* ============================== What's new ============================== */
window.TOPICS.push(
{
    id: "new-in-progress",
    area: "What's new",
    title: "What's in progress",
    question: "What's planned next?",
    summary: "Ward Mapping already appears on Home but isn't active yet. It's in progress; there are no dates.",
    keywords: ["planned", "roadmap", "next", "coming", "future", "in progress", "ward mapping"],
    synonyms: ["what's planned next", "what is coming", "upcoming features", "what's next", "future plans"],
    steps: [
        "Ward Mapping: shows in Home's Data menu but isn't active yet.",
        "Reference Data is now live: ask “How do I browse Reference Data?” or “How do I manage Reference Data lists?”.",
        "Everything else in the menus is live.",
        "Each release's changes appear in the patch notes on Home. Ask “What changed in the latest release?” for the newest one."
    ],
    who: "Everyone.",
    tips: ["This lists only what's visible in the app. It isn't a commitment or a timetable."],
    related: ["patch-notes", "home-navigation"]
}
);

/* ============================== Data Warehouse in depth ============================== */
window.TOPICS.push(
{
    id: "dw-what",
    area: "Data Warehouse",
    title: "What you can query in the Data Warehouse",
    question: "What can I query in the Data Warehouse?",
    summary: "Any table or view your own database permissions let you see, read-only, one query at a time.",
    keywords: ["what can i query", "tables", "views", "columns", "primary key", "nullable", "preview", "read only", "data warehouse"],
    synonyms: ["what tables can i see", "which tables", "what data is there", "can i see views", "what is in the warehouse"],
    steps: [
        "After you connect, the Tables list shows every table and view that your Windows account is allowed to see. Type in the filter box to narrow it by schema or name.",
        "Columns tab: each column's position, name, data type, whether it can be empty (Nullable) and whether it is part of the primary key (PK).",
        "Preview tab: the first rows of the table, from 25 up to 2,500. No query writing needed.",
        "Query tab: write your own read-only query across the tables you can see, for example to join tables, filter rows or count records.",
        "Everything is read-only. You can look at and copy data, but nothing you do here changes the warehouse.",
        "Empty values show as NULL. Very long text is cut short with “…” and dates are shown in a standard year-month-day format."
    ],
    who: "Everyone. What you can see is decided by the database, not by your Metadata Repository role.",
    tips: [
        "If a table you expect is missing, you probably don't have permission to it in the database. Ask the database's owner, not a Metadata Repository Admin.",
        "Use the data elements for a field's meaning, and the Data Warehouse to see what the data actually looks like."
    ],
    related: ["dw-connect", "dw-query", "dw-blocked", "dw-who"]
},
{
    id: "dw-blocked",
    area: "Data Warehouse",
    title: "Why a Data Warehouse query is blocked",
    question: "Why is my query blocked?",
    summary: "The Data Warehouse only runs a single read-only query that starts with SELECT or WITH. Anything else is stopped before it reaches the database, with a message saying why.",
    keywords: ["blocked", "rejected", "refused", "not allowed", "query rejected", "read only", "select", "with", "semicolon", "single statement"],
    synonyms: ["why was my query rejected", "query not allowed", "why won't my query run", "query refused", "only select allowed", "query safety rules"],
    steps: [
        "It must be one statement. Two queries separated by a semicolon are refused with “Only a single batch / statement is allowed”. A single semicolon at the very end is fine.",
        "It must start with SELECT or WITH. Anything else gets “Only SELECT / WITH (read-only) queries are allowed.”",
        "It can't contain words that change data or the database, such as INSERT, UPDATE, DELETE, MERGE, CREATE, ALTER, DROP or TRUNCATE. SELECT … INTO is also blocked, as are running procedures and other system commands. The message names the word that was found.",
        "It can't be extremely long. Very large scripts are refused as too long.",
        "Comments, text in quotes and names in square brackets are ignored by these checks, so a word inside them won't block your query.",
        "If the query passes these checks but the database refuses it (for example a typo or a table you can't access), the database's own error message is shown instead."
    ],
    who: "Everyone who uses the Data Warehouse. The rules are the same for every role.",
    tips: [
        "If a column is literally called something like Update or Delete, put the name in square brackets, for example [Update].",
        "To make a copy of data, run the SELECT here and use Export CSV rather than SELECT … INTO."
    ],
    related: ["dw-query", "dw-errors", "t-warehouse-internals"]
},
{
    id: "dw-saved",
    area: "Data Warehouse",
    title: "Saving and reusing Data Warehouse queries",
    question: "How do I save or reuse a query?",
    summary: "Save gives a query a name so you can load it again later, and Query history keeps your recent runs. Both stay on your own computer.",
    keywords: ["save query", "saved queries", "reuse", "query history", "load query", "favourite", "rename query", "delete query"],
    synonyms: ["save my sql", "keep a query", "run it again", "previous queries", "recent queries", "share a query"],
    steps: [
        "Write your query on the Query tab and click Save. Give it a name (up to 80 characters). If you are working on a table, its name is suggested.",
        "If a saved query already has that name, you're asked whether to overwrite it.",
        "To use it again, pick it from the Saved queries list. It fills the Query box; click Run when you're ready.",
        "To remove one, select it in Saved queries and click Delete, then confirm.",
        "Query history keeps your last 30 runs, newest first, each marked ok, failed or cancelled with the time. Pick one to put it back in the Query box.",
        "Up to 40 saved queries are kept."
    ],
    who: "Everyone who uses the Data Warehouse.",
    tips: [
        "Saved queries and history are stored on this computer only. They don't follow you to another PC and other people can't see them.",
        "To share a query, copy its text into a message or a data element's notes."
    ],
    related: ["dw-query", "dw-results"]
},
{
    id: "dw-results",
    area: "Data Warehouse",
    title: "Viewing and exporting Data Warehouse results",
    question: "How do I see the results or export them?",
    summary: "Results appear in a grid under the query, with a row count, and can be copied or exported as CSV or copied as TSV.",
    keywords: ["results", "export", "export csv", "copy csv", "copy tsv", "download", "include headers", "load more", "max rows", "grid"],
    synonyms: ["export query results", "save the results", "download results", "copy to excel", "get more rows", "results truncated", "see the results", "how do i see the results"],
    steps: [
        "After Run, the grid shows the rows. The line above it gives the number of rows, the row limit and how long the query took.",
        "Max rows sets how many rows come back: 25, 100, 500, 1,000 or 2,500. If there were more, the line says “capped at max rows” and a Load more button reruns the query with the next limit up.",
        "Copy CSV or Copy TSV puts the results on your clipboard. TSV pastes neatly into a spreadsheet.",
        "Export CSV downloads a file, named with the date and time.",
        "Include headers decides whether the column names are included. Your choice is remembered.",
        "The Preview tab has the same Copy and Export buttons for a table's first rows."
    ],
    who: "Everyone who uses the Data Warehouse.",
    tips: [
        "Copy and export include only the rows that were fetched, so raise Max rows first if you need more (up to 2,500).",
        "For very large extracts, use the tools your database team provides. The Data Warehouse page is for looking and small exports.",
        "Results stay on your computer and are never sent to Metabot."
    ],
    related: ["dw-query", "dw-saved", "export-overview"]
},
{
    id: "dw-who",
    area: "Data Warehouse",
    title: "Who can use the Data Warehouse",
    question: "Who can use the Data Warehouse?",
    summary: "Everyone can open it. What you can see and query depends on the database permissions of your own Windows account.",
    keywords: ["who can use", "data warehouse access", "permission", "windows login", "integrated security", "role"],
    synonyms: ["do i need access", "can i use the data warehouse", "data warehouse permissions", "why can't i see any tables"],
    steps: [
        "Open Sources > Data Warehouse on Home. Any Metadata Repository role can open the page.",
        "When you connect, your own Windows login is used. No password is asked for or stored.",
        "The database decides what you can see. You only get the tables, views and rows your account has been granted.",
        "Being an Admin in the Metadata Repository gives you no extra database access, and being a User doesn't take any away.",
        "Everything is read-only for everyone."
    ],
    who: "Everyone, within their own database permissions.",
    tips: [
        "If you need access to more data, ask the team that manages the database to grant it to your Windows account."
    ],
    related: ["dw-connect", "dw-what", "roles"]
},
{
    id: "dw-errors",
    area: "Data Warehouse",
    title: "When the Data Warehouse connection or a query fails",
    question: "What happens if the connection fails?",
    summary: "A failed connection shows the reason in red and clears the table list. A failed query shows its error above the grid and is kept in Query history.",
    keywords: ["connection failed", "can't connect", "cannot connect", "error", "timeout", "login failed", "cancel", "query failed"],
    synonyms: ["data warehouse not working", "won't connect", "connection error", "query timed out", "query failed", "status says error"],
    steps: [
        "Connecting gives up after about 15 seconds. The error from the database appears in red under Connect, the status in the title bar changes to Error and the table list is cleared.",
        "Common causes: a mistyped server or database name, not being on the network, or your account not having access to that database.",
        "Check the names and click Connect again. The last server and database you used are remembered.",
        "A query that runs for more than 60 seconds is stopped. Click Cancel to stop one sooner. “Query cancelled.” is shown.",
        "If a query fails, the reason is shown above the grid, and the query is kept in Query history marked failed so you can fix it and run it again.",
        "Nothing is changed in the database when something fails, because only read-only queries are run."
    ],
    who: "Everyone who uses the Data Warehouse.",
    tips: [
        "If no one can connect, the database may be unavailable. Try again later or tell the team that manages it.",
        "A very slow query usually needs a filter (WHERE) or fewer columns."
    ],
    related: ["dw-connect", "dw-blocked", "dw-query"]
}
);

/* ============================== Compare CSV in practice ============================== */
window.TOPICS.push(
{
    id: "csv-difference",
    area: "Compare CSV",
    title: "What a Compare CSV difference looks like",
    question: "What does a difference look like?",
    summary: "A difference is either a row found in only one file, or (in Key columns mode) a matched pair of rows whose other cells disagree, highlighted cell by cell.",
    keywords: ["difference", "differences", "highlight", "changed cells", "only a", "only b", "matched pairs", "cell diff", "ambiguous"],
    synonyms: ["what does a diff look like", "how are differences shown", "highlighted cells", "what is only a", "what changed between files"],
    steps: [
        "Only A: rows in File A with no match in File B. Only B: the reverse. These are the rows that were added or removed.",
        "Full row mode: a row only matches if every column is the same, so a single changed cell makes that row appear once in Only A and once in Only B.",
        "Key columns mode: rows are paired on the keys you chose. The Matched tab shows each pair as an A row above a B row.",
        "In a pair, key columns are marked ✦, cells that differ are highlighted, and identical cells stay plain. Hover a highlighted cell to see both values.",
        "The note above the results gives the key columns and how many pairs have cell differences.",
        "A pair tagged “amb” is ambiguous: the key appears more than once in a file, so the pairing is a best guess."
    ],
    who: "Everyone.",
    tips: [
        "If almost every row shows as different in Full row mode, switch to Key columns so you see which cells changed."
    ],
    related: ["csv-compare", "csv-matching", "csv-results"]
},
{
    id: "csv-matching",
    area: "Compare CSV",
    title: "How Compare CSV matches rows",
    question: "How does Compare CSV match rows?",
    summary: "Columns are lined up by header name, then rows are matched either on the whole row or on the key columns you pick.",
    keywords: ["match", "matching", "key columns", "full row", "header", "duplicate keys", "case", "spaces", "align columns"],
    synonyms: ["how are rows matched", "match by column", "match by key", "which mode should i use", "duplicate key warning", "how does compare csv match rows"],
    steps: [
        "Columns are matched by header name, not position. If the files have different columns, all columns from both are used and missing cells count as empty; a note tells you this happened.",
        "Full row: two rows match when every value is the same. Best for checking whether two extracts are identical.",
        "Key columns: tick one or more columns that identify a record, such as a code or an ID. Rows with the same key values are paired, and the other columns are compared.",
        "Spaces at the start and end of values are ignored. Everything else counts, including upper and lower case, so “abc” and “ABC” are different.",
        "If a key appears more than once in a file, a duplicate keys warning appears. Rows are paired in file order, extra rows go to Only A or Only B, and the pairs are flagged ambiguous.",
        "Duplicate column names in a file are warned about too."
    ],
    who: "Everyone.",
    tips: [
        "Choose key columns that are unique in both files to avoid ambiguous pairs."
    ],
    related: ["csv-compare", "csv-difference", "csv-files"]
},
{
    id: "csv-results",
    area: "Compare CSV",
    title: "Using Compare CSV results",
    question: "What should I do with the results?",
    summary: "Check the counts, look at the samples, then export what you need to follow up: Only A, Only B, a diff report or paired diffs.",
    keywords: ["results", "export", "diff report", "paired diffs", "only a", "only b", "follow up", "reconcile", "counts"],
    synonyms: ["what next", "export differences", "save the comparison", "reconcile files", "use the comparison", "what should i do with the results", "what do i do with the comparison"],
    steps: [
        "Start with the summary counts. If Only A and Only B are both zero, the files hold the same records.",
        "Look at the samples on each tab. The tabs show the first rows only for speed; the exports always include every row.",
        "Export Only A or Only B for the rows missing from the other file, for example records to add or remove.",
        "Export Diff report for one file with every unmatched row and a column saying which side (A or B) it came from.",
        "In Key columns mode, Export Paired diffs gives one row per changed record: the keys, then the A and B values side by side for each changed column, and which columns changed.",
        "Then follow up at the source: correct the data, or update the data element if a definition or permitted value has changed."
    ],
    who: "Everyone. The exports are saved to your computer.",
    tips: [
        "Nothing from Compare CSV is saved to the repository. Keep the exported files if you need a record of the comparison.",
        "The exported files open in any spreadsheet."
    ],
    related: ["csv-compare", "csv-difference", "export-overview"]
},
{
    id: "csv-files",
    area: "Compare CSV",
    title: "Which files Compare CSV can read",
    question: "What files can I compare?",
    summary: "Two comma-separated (CSV) text files, each with a header row. Each file is read up to its first 50,000 rows.",
    keywords: ["files", "csv", "file type", "header row", "limit", "50,000", "size", "excel", "tsv", "rows"],
    synonyms: ["which files", "can i compare excel", "file too big", "how many rows", "file limits", "supported files"],
    steps: [
        "Use CSV files: plain text, comma-separated, with the column names in the first row.",
        "Values in double quotes can contain commas or line breaks, and doubled quotes inside them are handled.",
        "Each file is read up to its first 50,000 rows. If a file is longer, you're warned that only the first 50,000 rows are compared.",
        "Empty rows at the end of a file are ignored.",
        "A file that is empty, has no header row or has an unclosed quote shows an error saying which file is the problem.",
        "Files are read on your own computer and are not uploaded or saved anywhere."
    ],
    who: "Everyone.",
    tips: [
        "To compare spreadsheets, save each sheet as CSV first.",
        "Data Warehouse results exported with Export CSV can be compared directly."
    ],
    related: ["csv-compare", "csv-matching", "dw-results"]
}
);

/* ============================== Data quality & governance ============================== */
window.TOPICS.push(
{
    id: "gov-quality",
    area: "Data quality & governance",
    title: "Why metadata matters for data quality",
    question: "Why does metadata matter for data quality?",
    summary: "Data can only be checked, compared and trusted when everyone agrees what each field means and how it should be recorded. Metadata is that agreement.",
    keywords: ["data quality", "quality", "accuracy", "consistency", "standards", "trust", "governance"],
    synonyms: ["why does metadata matter", "how does metadata help quality", "why keep definitions", "why is this important"],
    steps: [
        "Consistency: a clear definition and format mean every system and person records a field the same way.",
        "Validity: permitted values (codes and descriptions) say exactly which values are allowed, so anything else stands out as an error.",
        "Comparability: dated versions show when a definition or code set changed, so figures from different periods are compared fairly.",
        "Accountability: each collection has a Data Custodian, so there is someone responsible for keeping its definitions right.",
        "Understanding: analysts and new staff can look up what a field means instead of guessing.",
        "In the Metadata Repository this comes together in data elements, collections, dictionaries and the Metadata Lookup glossary."
    ],
    who: "Everyone.",
    tips: [
        "Compare CSV and the Data Warehouse help you check real data against what its metadata says."
    ],
    related: ["c-metadata", "gov-definition", "gov-approve"]
},
{
    id: "gov-approve",
    area: "Data quality & governance",
    title: "Who approves changes",
    question: "Who approves changes?",
    summary: "There is no separate approval step for edits. Changes are controlled up front by roles and collection ownership, and each collection's Data Custodian is responsible for it.",
    keywords: ["approve", "approval", "approves", "sign off", "review", "governance", "workflow", "custodian", "responsible"],
    synonyms: ["who signs off", "is there an approval workflow", "do changes need approval", "who reviews changes", "who is responsible"],
    steps: [
        "Edits aren't queued for approval. When someone with edit access saves, the change takes effect straight away.",
        "Control comes from who is allowed to edit: your role sets what you can do overall, and each collection's ownership says exactly who can change it.",
        "The Data Custodian is responsible for their collection. They, their co-custodians and the editors they choose can change it, and they decide who those editors are.",
        "A collection with no custodian is read-only for everyone except Admins, so nothing changes without someone being responsible.",
        "The one formal approval is ownership: when someone requests to become a collection's custodian, an Admin approves or declines it.",
        "Admins assign roles and can change anything."
    ],
    who: "Everyone. Custodians and Admins carry the responsibility.",
    tips: [
        "If your team wants changes reviewed, agree it as a working practice: for example, editors raise changes with the custodian before saving.",
        "Watch a collection's items to be told when they change."
    ],
    related: ["c-custodian", "ownership", "ownership-requests", "roles"]
},
{
    id: "gov-tracking",
    area: "Data quality & governance",
    title: "How changes are tracked",
    question: "How are changes tracked?",
    summary: "Data element versions carry From and To dates, watched items tell you when something changes, and ownership changes are recorded with who approved them and when.",
    keywords: ["tracked", "tracking", "history", "versions", "audit", "change log", "dates", "from date", "to date", "who changed"],
    synonyms: ["change history", "who changed this", "when was this changed", "audit trail", "track changes", "see previous versions", "how are changes tracked"],
    steps: [
        "Data element versions: Save New Version keeps the old version and starts a new one from today, so each version has its own From and To dates.",
        "Save corrects the current version in place. Use it for small fixes; it doesn't keep the old wording.",
        "When you change permitted values, a warning reminds you to save as a new version and check the dates.",
        "Watching: watch an item and the subscriptions panel shows when it changed, so you can review it.",
        "Ownership: the Ownership panel shows who approved the current custodian and when, and ownership changes and refused edits are recorded in an audit log.",
        "Establishment saves, creates and deletes are recorded in the same audit log, and deleted establishment records are kept aside rather than destroyed.",
        "Release changes to the app itself are in the patch notes."
    ],
    who: "Everyone can see versions and watch items. The audit log is for Admins.",
    tips: [
        "Data element edits don't show who saved them. If you need that, agree to note the reason in the element's Notes or use Save New Version.",
        "Deleted data elements can be brought back from Deleted Items."
    ],
    related: ["de-versions", "watch-subscriptions", "ownership", "task-restore"]
},
{
    id: "gov-definition",
    area: "Data quality & governance",
    title: "Writing a good data element definition",
    question: "What makes a good data element definition?",
    summary: "A good definition says clearly and briefly what the data element is, in plain words, without explaining how to collect it; the other fields hold the rest.",
    keywords: ["good definition", "definition", "write", "writing", "best practice", "guide for use", "examples", "notes", "permitted values"],
    synonyms: ["how to write a definition", "definition guidelines", "definition tips", "good metadata", "best practice for definitions"],
    steps: [
        "Say what it is, not how it's used: “The date the patient was admitted to hospital”, not “Enter the date from the admission form”.",
        "Keep it to one concept, in a sentence or two, in plain language. Spell out abbreviations.",
        "Don't define a term with itself (“Admission date: the date of admission”).",
        "Be specific enough to tell it apart from similar elements, such as admission date versus referral date.",
        "Put how to collect or use it in Guide for use, sample values in Examples, and anything else in Notes.",
        "Fill in the structured fields too: data type, format (for example DD/MM/YYYY), size, whether it's mandatory, and permitted values with a code and a description for each.",
        "When the meaning or the permitted values change, use Save New Version so the history is kept."
    ],
    who: "Anyone who writes or reviews data elements.",
    tips: [
        "Reuse the wording of an existing Metadata Lookup term where one applies, so definitions stay consistent.",
        "Ask the collection's Data Custodian if you're unsure how a field should be defined."
    ],
    related: ["task-new-element", "de-open", "gov-quality", "lookup"]
}
);

/* ============================== Getting the app ============================== */
window.TOPICS.push(
{
    id: "app-install",
    area: "Getting the app",
    title: "Getting the Metadata Repository app",
    question: "How do I get or install the Metadata Repository?",
    summary: "The Metadata Repository is only available to IPG at the moment, until the project matures further and is housed in an environment where it can be distributed to DIS and APR.",
    keywords: ["install", "download", "get the app", "installer", "set up", "access the app", "get a copy", "windows"],
    synonyms: ["how do i install it", "where do i download it", "how do i get the app", "access the app", "get a copy", "set it up on my pc", "download the app", "install the metadata repository"],
    steps: [
        "The Metadata Repository is only available to IPG at the moment, until the project matures further and is housed in an environment where it can be distributed to DIS and APR.",
        "It is a Windows desktop app. Within IPG, it is installed on your PC once and opens from your Windows login, with nothing extra to sign in to.",
        "It needs your PC to reach the shared repository. If it can't, it says it can't reach the metadata repository.",
        "Updates arrive with each release: the app checks when it starts and installs a new release automatically, then the Patch Notes panel on Home shows what changed.",
        "Once installed, you get the User role until an Admin gives you another."
    ],
    who: "IPG staff, for now.",
    tips: [
        "If you're in IPG and don't have it yet, ask an Admin of the Metadata Repository to get you set up."
    ],
    related: ["app-other-teams", "patch-notes", "roles", "task-access"]
},
{
    id: "app-other-teams",
    area: "Getting the app",
    title: "Using the Metadata Repository in other teams",
    question: "Can other teams use it?",
    summary: "The Metadata Repository is only available to IPG at the moment, until the project matures further and is housed in an environment where it can be distributed to DIS and APR.",
    keywords: ["other teams", "roll out", "distribute", "availability", "who can get it", "other areas", "expand"],
    synonyms: ["can other teams use it", "can my team use it", "roll out", "distribute", "is it available to everyone", "when will it be available"],
    steps: [
        "The Metadata Repository is only available to IPG at the moment, until the project matures further and is housed in an environment where it can be distributed to DIS and APR.",
        "Until then, people outside IPG can't install it.",
        "When it is distributed further, updates will continue to arrive with each release, so everyone stays on the same version.",
        "The guide you are reading is public and describes how the app works, so other teams can see what it does in the meantime."
    ],
    who: "IPG staff, for now.",
    tips: ["There's no date for wider distribution yet."],
    related: ["app-install", "new-in-progress"]
}
);

/* ============================== Reference Data ============================== */
window.TOPICS.push(
{
    id: "rd-browse",
    area: "Reference Data",
    title: "Browsing Reference Data",
    question: "How do I browse Reference Data?",
    summary: "Library > Reference Data lists the reference data folders; open one to see each of its files as a card you can search and expand.",
    keywords: ["reference data", "reference", "code list", "code lists", "folder", "folders", "cards"],
    synonyms: ["open reference data", "view reference data", "look at reference data", "religion list", "language list", "reference tables"],
    steps: [
        "Open Library > Reference Data (or Reference Data in Home's Data menu). A landing page lists the reference data folders.",
        "Pick a folder. Each file in it appears as a card, in the same style as the Establishments cards.",
        "Use the search box in the title bar to find a file by name or by anything inside it.",
        "Click a card to expand it and see the rest of its fields. Coded fields show the code with its plain-English description.",
        "Use the Folders button to show or hide the folder list, and File > Print / Save as PDF or Copy selected file as JSON to take a copy."
    ],
    who: "Everyone can browse. Editing, adding and deleting depend on your role.",
    tips: [
        "Cards load as you scroll, so large folders stay quick.",
        "File > Reload folder picks up changes someone else has just saved.",
        "Some lists are maintained in Data > Reference Data. Those are read-only here, each card has Edit in backend, and changes appear after the list is next published."
    ],
    related: ["rd-edit", "rd-template", "rd-lists", "est-browse"]
},
{
    id: "rd-edit",
    area: "Reference Data",
    title: "Editing, adding and deleting Reference Data",
    question: "How do I edit, add or delete a Reference Data file?",
    summary: "Select a card, then use Edit to change it or the File menu to add or delete files; what you see depends on your role.",
    keywords: ["edit reference data", "new reference data", "delete reference data", "add reference data", "change reference data"],
    synonyms: ["update reference data", "remove reference data", "create reference data", "save reference data"],
    steps: [
        "Open the folder and select the card you want.",
        "Click Edit in the title bar. The card turns into a text editor showing the file's contents.",
        "Make your change and choose File > Save. If someone else saved the same file since you opened it, you're told rather than overwriting their work.",
        "To add a file, choose File > New and give it a name. A draft card appears at the top for you to fill in.",
        "To remove a file, select it and choose File > Delete. Deleted files are kept aside, so they can be restored."
    ],
    who: "Editors and above can edit and save. Admins can also add and delete files. Nobody can change Reference Data in offline mode. Lists maintained in Data > Reference Data can't be changed here; see “How do I manage Reference Data lists?”.",
    tips: [
        "Finish or cancel an edit before adding, deleting or reloading.",
        "If you leave with unsaved changes, you're asked first."
    ],
    related: ["rd-browse", "roles", "offline-mode", "saving"]
},
{
    id: "rd-template",
    area: "Reference Data",
    title: "Reference Data card templates",
    question: "How do Reference Data card templates work?",
    summary: "Each folder has a card template that decides which fields show as the card title, subtitle and main fields, and which appear only when expanded.",
    keywords: ["template", "card template", "templates", "layout", "build", "build menu", "reset to auto", "reload template"],
    synonyms: ["change the card layout", "card layout", "which fields show", "reorder fields", "rename a field label"],
    steps: [
        "Open a Reference Data folder and choose Build > Card template.",
        "A side panel lists every field found in the folder's files. For each one, choose its role: Title, Subtitle, Core (always shown), Expanded (shown when the card is opened), Other or Skip.",
        "Reorder fields with the up and down buttons or by dragging, change the label people see, and link a field to a lookup so its codes show descriptions.",
        "Changes preview on the cards straight away but aren't kept until you click Save.",
        "Reset to auto rebuilds a sensible starting template from the folder's files. Reload template throws away unsaved changes and reads the saved one again."
    ],
    who: "Everyone can open the panel to look. Editors and above can save a template (not in offline mode).",
    tips: [
        "A folder without a template gets one made automatically the first time it's opened, so cards always have a layout.",
        "If a template has a problem, the folder still opens with a plain layout and a short message explains what went wrong."
    ],
    related: ["rd-browse", "rd-edit", "est-mapped"]
},
{
    id: "rd-lists",
    area: "Reference Data",
    title: "Managing Reference Data lists",
    question: "How do I manage Reference Data lists?",
    summary: "Data > Reference Data is where Reference Data lists are maintained: one card per list, and an editor for adding, changing and deleting its records.",
    keywords: ["reference data list", "lists", "data reference data", "new record", "new list", "import from library", "edit in backend", "record", "records"],
    synonyms: ["maintain reference data", "add a code to reference data", "reference data backend", "edit a reference data list", "create a list"],
    steps: [
        "Open Data > Reference Data on Home. Each list shows as a card with its record count, code field, when it was last published and who owns it.",
        "Open a list to see its records. Choose File > New record and type the new record's code. The code must be unique and can't be changed afterwards. You're warned if a deleted record used the same code.",
        "Edit the record in the form (or Edit > Raw JSON) and choose File > Save or Ctrl+S. If someone else saved it since you opened it, you're told rather than overwriting their work.",
        "File > Delete moves a record aside so it can be restored. Number fields that count up automatically are filled in for you and numbers are never reused.",
        "Edit > Edit structure adds, renames or removes fields across every record, with a preview first. Removing a field needs you to confirm, and changed records are backed up.",
        "Admins can create a list with File > New List, and copy an existing Library list in once with File > Import from Library. Import shows a dry run first and never overwrites records."
    ],
    who: "Editors and above can edit records, honouring the list's ownership. Admins can also create lists and import from Library. Everyone else and offline mode are read-only.",
    tips: [
        "Changes reach Library > Reference Data the next time the list is published.",
        "Menus only show what your role can use, and Edit > Ownership shows who looks after the list."
    ],
    related: ["rd-browse", "rd-edit", "ownership", "est-list"]
}
);

/* ============================== Metabot Insight ============================== */
window.TOPICS.push(
{
    id: "insight",
    area: "Metabot Insight",
    title: "Metabot Insight mode",
    question: "What is Metabot Insight mode?",
    summary: "Insight mode has Metabot quietly check the page you're on for data-quality problems and point them out in a small speech bubble.",
    keywords: ["insight", "insight mode", "insights", "data quality check", "check this page", "metabot face"],
    synonyms: ["turn on insight", "switch on insight", "metabot checks my data", "data quality hints", "speech bubble", "the little face"],
    steps: [
        "Click the Insight button in the top bar, next to the phone icon. It stays on as you move between pages until you close the app.",
        "A small Metabot face appears in the bottom-right corner. When a page loads, or you select an element or card, it checks what you're looking at.",
        "Quick checks run on your computer first and show straight away: missing required fields, codes that aren't in the lookups, out-of-date versions, formatting and consistency, and duplicates in reference data.",
        "Metabot then adds a short, plain-English summary. The face's colour shows how things look: fine, worth a look, a warning or an issue.",
        "Click a field name in the bubble to jump to that field on the page. Click More for the full explanation in the Metabot app."
    ],
    who: "Everyone who uses Metabot with an AI service turned on and connected. If it isn't connected, the button explains why and a click checks the connection.",
    tips: [
        "The face follows your pointer, glances at the field it's talking about, and dozes off after 30 seconds of no activity. Any key or click wakes it.",
        "You can also ask Metabot in chat to turn Insight mode on or off.",
        "If you prefer less movement, turn on reduced motion in Windows and the face stays still."
    ],
    related: ["insight-fixes", "insight-collection", "insight-settings", "insight-privacy", "metabot"]
},
{
    id: "insight-fixes",
    area: "Metabot Insight",
    title: "Fixing what Insight finds",
    question: "How do I fix something Insight finds?",
    summary: "Many findings come with a one-click fix that fills the field in for you, ready for you to check and save.",
    keywords: ["fix", "one-click fix", "undo", "draft value", "trim spaces", "valid code", "previous insights", "don't show again", "thumbs"],
    synonyms: ["apply a fix", "correct the field", "hide a finding", "dismiss a finding", "insight history", "helpful", "not helpful"],
    steps: [
        "Where a fix is possible, the finding shows a button such as Trim spaces, Replace spaces with _, Use a corrected postcode, Choose a valid code or Draft value.",
        "Click it. The page switches to its normal edit mode (cards open their edit form first) and the field is filled in. Nothing is saved until you save it yourself.",
        "Click Undo to put back the previous value. The checks re-run on your edited values.",
        "Draft value asks Metabot to suggest wording for a field, based only on what's already saved.",
        "Open Previous insights to see the last ten findings for that item. Use the thumbs up or down to say whether a finding helped, or Don't show again to hide that check for that item."
    ],
    who: "Fix buttons appear only if you're allowed to edit that item, and never on the Data Warehouse page or in offline mode. Everyone can see findings.",
    tips: ["History, feedback and hidden checks are stored on your computer only."],
    related: ["insight", "saving", "ownership"]
},
{
    id: "insight-collection",
    area: "Metabot Insight",
    title: "Checking a whole collection or comparing versions",
    question: "How do I check a whole collection with Insight?",
    summary: "Check collection runs the quick checks over every item in what you have open; Compare versions shows what changed between saved versions.",
    keywords: ["check collection", "collection check", "compare versions", "health check", "whole collection", "all items", "version comparison"],
    synonyms: ["check everything", "check all elements", "scan the collection", "what changed between versions", "difference between versions"],
    steps: [
        "With Insight on, open a data element collection, a dictionary, the establishment list or a Reference Data folder.",
        "Choose Check collection in the Insight bubble. Every item is checked on your computer, with a progress bar and a Cancel option.",
        "The result counts findings by check and by severity and lists the items to look at first. Click one to open it.",
        "You can ask Metabot for a short overview. It receives only the counts, the check names and the field names, never your values.",
        "For a data element or a Reference Data file, choose Compare versions to see field-by-field differences against the previous saved version, and optionally ask Metabot to explain them."
    ],
    who: "Everyone with Insight mode available. The checks only read; nothing is changed.",
    tips: ["Very large collections are checked up to the first 2,000 items."],
    related: ["insight", "de-versions", "collections"]
},
{
    id: "insight-settings",
    area: "Metabot Insight",
    title: "Insight settings and daily limit",
    question: "How do I change when Insight runs?",
    summary: "Right-click the Insight button, or choose Settings in the bubble, to pick when Insight asks Metabot and how many times a day.",
    keywords: ["insight settings", "daily limit", "limit", "how often", "chattiness", "budget", "page load", "clicks"],
    synonyms: ["make insight quieter", "insight too chatty", "stop insight asking", "only when issues", "run once anyway"],
    steps: [
        "Right-click the Insight button, or click Settings in the Insight bubble.",
        "Choose when Metabot is asked: on page load only, on page load and clicks (the default), or only when the quick checks find something.",
        "Set a daily limit for Metabot requests (100 by default; 0 means no limit). The panel shows how many you've used today.",
        "When the limit is reached, the quick checks still run, and you can choose Run once anyway for a single extra request."
    ],
    who: "Everyone. Settings are kept on your computer.",
    related: ["insight", "insight-privacy"]
},
{
    id: "insight-privacy",
    area: "Metabot Insight",
    title: "What Insight sends to the AI service",
    question: "What does Insight send to the AI service?",
    summary: "Insight sends the same limited page context as Metabot chat, and never warehouse rows, images or anything you haven't saved.",
    keywords: ["insight privacy", "privacy", "what is sent", "send", "data sent", "safe", "secure"],
    synonyms: ["is insight safe", "does insight send my data", "what does metabot see", "unsaved values"],
    steps: [
        "The quick checks run entirely on your computer. If they already cover every field, Metabot isn't asked at all.",
        "Otherwise Metabot gets the page context plus the quick-check results, using the same protections as chat.",
        "Data Warehouse result rows, images and text you haven't saved are never sent.",
        "A collection overview sends only counts, check names and field names. Comparing versions sends only the saved values that differ."
    ],
    who: "Everyone.",
    related: ["insight", "metabot"]
}
);
