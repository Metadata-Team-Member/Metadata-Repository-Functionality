/* Metadata Repository Functionality: topic content.
   Plain text only. Describe behaviour for users; never add share paths, server names, web addresses,
   user names, file or code names, licence details or anything from Developer-only tools.
   See README.md for the field list and how to add a topic. */

window.GUIDE_META = {
    appRelease: "1.2.9",   // the app release this content describes (not shown on the page)
    updated: "20 Oct 2026"
};

window.TOPIC_AREAS = [
    "Getting started",
    "Establishments",
    "Data Elements",
    "Data Models",
    "Dictionaries / Collections",
    "Metadata Lookup",
    "Data Warehouse",
    "Compare CSV",
    "Permissions / roles",
    "Offline mode",
    "Phone apps",
    "Mail and Feedback",
    "Saving / unsaved changes / Ctrl+S",
    "Export options"
];

window.TOPICS = [];

/* ============================== Getting started ============================== */
window.TOPICS.push(
{
    id: "home-navigation",
    area: "Getting started",
    title: "Getting around the Metadata Repository",
    summary: "The Home screen's top menu takes you to every part of the metadata repository.",
    keywords: ["home", "menu", "navigation", "library", "metadata", "sources", "tools", "data", "back button", "home button"],
    synonyms: ["where is", "find a page", "open", "main menu", "start", "navigate", "getting started", "overview"],
    steps: [
        "Hover over or click a menu at the top of the Home screen to open its panel of buttons.",
        "Library holds Dictionaries, Data Models and Establishments.",
        "Metadata holds Data Elements and Data Model Elements (the building blocks the other pages use).",
        "Sources holds the Data Warehouse, Tools holds Compare CSV, and Data holds the Establishment List folders.",
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
    summary: "The Metadata Repository app updates itself when it starts, and the Patch Notes panel on Home tells you what changed.",
    keywords: ["patch notes", "update", "version", "release", "new features", "changelog"],
    synonyms: ["what's new", "whats new", "upgrade", "latest version", "auto update", "restart"],
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
    summary: "Data > Establishment List shows the folders that feed the Establishments page, each holding one part of every establishment's data.",
    keywords: ["establishment list", "folder", "folders", "raw view", "form view", "edit structure", "property"],
    synonyms: ["source folders", "establishment data folders", "team folders", "add property", "structure"],
    steps: [
        "Open Data > Establishment List on Home. You see one card per folder. Type in the filter box to find a folder.",
        "Open a folder to see its establishments on the left. Use the search box to find one.",
        "Pick an establishment to edit it in Form view, or switch to Raw view to see every value at once.",
        "Click Save to write your changes. Ctrl+S also saves on this page.",
        "Use + Add to add an establishment to the folder, or Delete to move one to the deleted area.",
        "Edit structure lets you add, rename or remove a property across every record in the folder in one go. You see a preview first, and a backup is kept."
    ],
    who: "Editor and above can edit unowned folders. When a folder has a Data Custodian, only its custodians and editors (and Admins) can edit it. In the main establishments folder, adding, deleting and Edit structure are Admin only. Creating a new folder is Admin only.",
    tips: [
        "A banner at the top tells you whether the folder is owned, who looks after it, and offers Request ownership when you can.",
        "The establishment code is locked everywhere so records stay linked across folders."
    ],
    related: ["est-edit", "ownership", "ownership-requests"]
},
{
    id: "est-export",
    area: "Establishments",
    title: "Exporting establishments",
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
        "Read-only users still see File > Export."
    ],
    related: ["de-versions", "de-delete-restore", "de-export", "lookup", "ownership"]
},
{
    id: "de-versions",
    area: "Data Elements",
    title: "Save vs Save New Version",
    summary: "Save corrects the current version; Save New Version keeps history by starting a new version from today.",
    keywords: ["version", "versions", "save new version", "history", "from date", "to date", "effective date"],
    synonyms: ["new version", "versioning", "keep history", "date range", "previous version", "superseded"],
    steps: [
        "Every data element keeps a list of versions, newest first. Each version has a From date and a To date.",
        "File > Save writes your changes into the current version. Use it for corrections, such as a typo.",
        "File > Save New Version adds a new version with your changes. It starts today and has an open-ended To date.",
        "The version that was current is closed off the day before today, so the two never overlap.",
        "Save New Version only works after you have changed something, and not while you are still creating a brand-new element (save that normally first)."
    ],
    who: "Anyone with edit access to the collection.",
    tips: [
        "Use Save New Version when the meaning or the permitted values really change, so reports for earlier periods stay accurate.",
        "If you saved a new version by mistake, ask the collection's custodian for help rather than deleting the element."
    ],
    related: ["de-open", "saving", "de-delete-restore"]
},
{
    id: "de-delete-restore",
    area: "Data Elements",
    title: "Deleting and restoring data elements",
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
    summary: "File > Export on a data element offers a record export, specifications, a code list and a mapping file.",
    keywords: ["export", "data element export", "element specifications", "collection specifications", "code list", "mapping file", "csv", "json"],
    synonyms: ["download element", "specs", "spec sheet", "list of codes", "permitted values export", "lookups"],
    steps: [
        "Open an element, then File > Export.",
        "Data Element: exports the record you have open as JSON or CSV. (Fixed-width is shown as coming soon.)",
        "Element Specifications: exports the technical details of the open element (field name, data type, format, size, precision, requirement status) as JSON or CSV.",
        "Collection Specifications: the same kind of details for every element in the collection, as JSON or CSV.",
        "Code List: a CSV of every code and description across the collection. Only rows with a field name, a code and a description are included.",
        "Mapping File: builds the code-to-description list that the Establishments page uses, from the permitted values in this collection, and saves it into the repository."
    ],
    who: "Everyone can use the first four. Mapping File is Editor and above because it saves into the repository.",
    tips: [
        "If Code List says no rows were found, check that the permitted values have both a code and a description.",
        "After updating permitted values that establishments use, run Mapping File so the Establishments page shows the new descriptions."
    ],
    related: ["export-overview", "est-mapped", "de-open"]
}
);

/* ============================== Data Models ============================== */
window.TOPICS.push(
{
    id: "dm-overview",
    area: "Data Models",
    title: "Data models and their tables",
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
    summary: "The Diagram view draws a table and its related tables, with lines for each key.",
    keywords: ["diagram", "erd", "picture", "relationship diagram", "png", "zoom", "edges"],
    synonyms: ["entity relationship", "draw", "visualise", "visualize", "chart of tables", "export png"],
    steps: [
        "Open a data model table and click Diagram at the top of the form.",
        "The open table sits in the middle with its related tables around it. Lines show the keys that join them.",
        "Scroll or use + and − to zoom, drag to move around, and click Fit to see everything.",
        "Use the Edges list to show all lines, keys only, or only Primary, Foreign or Surrogate keys.",
        "Hover over a line to see its details. Open a related table from the diagram to move through the model.",
        "Click Export PNG to save the current view as an image."
    ],
    who: "Everyone. The diagram is view-only; make changes in Form view.",
    tips: [
        "If the diagram says there are no related tables yet, add some in Form view first.",
        "Exported pictures are handy for documents and meetings."
    ],
    related: ["dm-related", "dm-overview"]
},
{
    id: "dm-new",
    area: "Data Models",
    title: "Creating data models and Data Model Element collections",
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
    summary: "A dictionary is a document-style view of a collection's data elements, with a cover page, preamble, abbreviations and a page per element.",
    keywords: ["dictionary", "dictionaries", "data dictionary", "cover page", "preamble", "abbreviations", "sensitivity"],
    synonyms: ["publication", "document", "open dictionary", "read dictionary", "guide for use", "examples", "notes"],
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
    summary: "Edit mode lets you change a dictionary's text, add collections of elements, and set its sensitivity.",
    keywords: ["edit dictionary", "new dictionary", "save as", "add collection", "edit mode", "sensitivity label"],
    synonyms: ["create dictionary", "change dictionary", "copy dictionary", "duplicate dictionary"],
    steps: [
        "Open a dictionary and click Edit in the title bar to turn on edit mode.",
        "Click into the editable text (for example the preamble or an element's notes) and type your changes.",
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
    related: ["dict-overview", "dict-export", "ownership", "saving"]
},
{
    id: "dict-export",
    area: "Dictionaries / Collections",
    title: "Exporting a dictionary",
    summary: "Export a dictionary as a print-ready document, or export its element specifications as JSON or CSV.",
    keywords: ["export dictionary", "data dictionary export", "dictionary specs", "html", "derivation logic", "print"],
    synonyms: ["publish dictionary", "download dictionary", "share dictionary", "dictionary document", "pdf"],
    steps: [
        "Open the dictionary, then File > Export.",
        "Data Dictionary: asks whether to include Derivation Logic. Choose Include or Exclude, then pick where to save. The result is a web page you can open in a browser, print or save as PDF.",
        "Dictionary Specs: exports the specifications of the elements currently in the dictionary as JSON or CSV.",
        "If you are in edit mode, choose “Save & export” when asked. The Metadata Repository app saves first and only exports once the save has worked."
    ],
    who: "Everyone.",
    tips: [
        "Choose Exclude for derivation logic when the audience doesn't need the technical detail.",
        "Sensitivity labels are kept on the exported pages."
    ],
    related: ["dict-overview", "export-overview", "dict-edit"]
},
{
    id: "collections",
    area: "Dictionaries / Collections",
    title: "Collections",
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
    summary: "The Query tab runs one read-only SELECT query at a time, with a row limit, history and saved queries.",
    keywords: ["query", "select", "run query", "sql query", "saved queries", "query history", "max rows", "cancel"],
    synonyms: ["write sql", "run sql", "read only query", "with statement", "export query results"],
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
    summary: "Compare CSV shows the rows that are only in file A, only in file B, or in both, and can highlight changed cells.",
    keywords: ["compare csv", "csv", "compare", "diff", "difference", "key columns", "full row", "only a", "only b"],
    synonyms: ["compare files", "what changed", "reconcile", "match rows", "spreadsheet compare", "diff report"],
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
    summary: "Your role (User, Editor, Custodian or Admin) decides what you can change across the Metadata Repository app.",
    keywords: ["role", "roles", "permission", "permissions", "user", "editor", "custodian", "admin", "access"],
    synonyms: ["why can't i edit", "why cant i edit", "read only", "no access", "rights", "permission denied", "who can"],
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
    summary: "Each collection can have a Data Custodian, Co-custodians, Editors and a Data Steward, and only they (and Admins) can change it.",
    keywords: ["ownership", "custodian", "data custodian", "co-custodian", "steward", "data steward", "owner", "owned", "unowned"],
    synonyms: ["who owns", "who looks after", "edit access", "add editor", "read-only banner", "get access", "what is a custodian", "what is a steward", "what is a co-custodian"],
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
    summary: "If the Metadata Repository app can't reach the shared repository, it keeps running with limited features and shows an “Offline mode” badge.",
    keywords: ["offline", "offline mode", "limited mode", "repository unavailable", "vpn", "network", "retry", "browse"],
    synonyms: ["can't connect", "cant connect", "no network", "working from home", "disconnected", "cannot save"],
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
    summary: "Metabot is the built-in assistant: ask it questions, have it open pages, find elements, draft SQL or file feedback for you.",
    keywords: ["metabot", "assistant", "ai", "chat", "bot", "llm", "grok", "gemini"],
    synonyms: ["ask a question", "help bot", "chatbot", "ai assistant", "talk to"],
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
    summary: "A quick list of everything you can export from the Metadata Repository app and where to find it.",
    keywords: ["export", "exports", "download", "csv", "json", "pdf", "png", "print", "copy"],
    synonyms: ["get data out", "save a copy", "report", "extract", "spreadsheet", "export options"],
    steps: [
        "Data Elements (File > Export): Data Element (JSON or CSV), Element Specifications, Collection Specifications, Code List (CSV) and Mapping File.",
        "Dictionaries (File > Export): Data Dictionary (print-ready document, with or without derivation logic) and Dictionary Specs (JSON or CSV).",
        "Establishments (File menu): listed establishments as CSV or JSON, Copy for Word / Excel, and Print / Save as PDF.",
        "Data Models (Diagram view): Export PNG of the relationship diagram.",
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
