/* Metadata Repository Functionality: release notes ("What's new").
   Add each new release at the TOP of window.RELEASES. The first entry becomes the answer to
   "What changed in the latest release?"; older entries answer "What changed in release x.y.z?".
   Plain text, user-facing changes only. Same sensitivity rules as the other topic files. */

window.RELEASES = [
    {
        version: "1.3.3",
        summary: "Release 1.3.3 adds a contributor leaderboard, change history for data elements, field name aliases for other systems, and new folders for Admins and Developers.",
        changes: [
            "Contributor leaderboard: earn points for adding and improving content, building lists and reporting issues that get picked up, with titles and monthly and all-time boards. Open it from the leaderboard card in the phone's Profile app.",
            "Data Elements: File > History… shows who saved each new version, deleted or restored an element, when, why and what changed. Save New Version asks for an optional reason, and Delete asks for a required one.",
            "Data Elements: Deleted Items shows who deleted each element, when and why, and version headings show who saved them.",
            "Data Elements: a save is refused, with an offer to reload, if someone else saved the element after you opened it.",
            "Data Elements: Save New Version now works without changes, for recording a past change by hand.",
            "Data Elements: a new FIELD NAME ALIASES table records the names other systems use for a field.",
            "Dictionaries: Field names from, in edit mode, shows one system's aliases in place of field names, and the edit-mode search also finds elements by field name alias.",
            "Admins and Developers: + New Folder creates a new dictionary folder or data element collection.",
            "New element numbers are never reused from deleted elements, and an empty collection now says so instead of showing the last element.",
            "Tables in the element form now keep quotes and other special characters in their values correctly."
        ]
    },
    {
        version: "1.3.2",
        summary: "Release 1.3.2 adds a review round for dictionaries (a commentable Review export and Dictionary Review Merge), easier dictionary editing, a new relationship diagram, safer Code List dates and Data > Reference Data.",
        changes: [
            "Dictionaries: File > Export > Review saves a draft copy with a DRAFT watermark and a Comments box beside each page, for reviewers to comment on in a web browser and email back.",
            "Tools > Dictionary Review Merge: drop in all the commented copies to make one consolidated review copy for final comment and sign-off.",
            "Dictionary edit mode: one formatting toolbar pinned under the save status bar, and a search box under each collection in Dictionary Contents.",
            "Rich text: fixes for bullet lists and Tab, button highlighting, shortcuts and tooltips, heading toggles, undo and redo, and pasting from Word or the web with basic formatting.",
            "Data Elements: click the CODE heading to sort permitted values.",
            "Code List export: codes are matched across versions by code, and an anomalies report is saved when dates or codes look wrong.",
            "Version dates: new elements start 1600-01-01 to 9999-01-01, Save New Version handles a second save on the same day, dates are always year-month-day, and saves warn about date changes that affect the Code List.",
            "Data Models: the relationship diagram now shows tables as cards, with an expanded full-window view where you can pan, zoom and drag cards.",
            "Data > Reference Data: maintain Reference Data lists and their records, edit their structure, and import from Library (Admins). Lists maintained there are read-only in Library > Reference Data.",
            "Data pages: actions on the Establishment List and Reference Data pages now live in File and Edit menus.",
            "Export file names use your local date."
        ]
    },
    {
        version: "1.3.1",
        summary: "Release 1.3.1 adds card templates for Reference Data, so each folder's cards show the right fields in the right order.",
        changes: [
            "Reference Data: each folder has a card template that sets the card title, subtitle, main fields and expanded fields, with lookups showing code descriptions.",
            "Reference Data: a folder without a template gets one made automatically when it's first opened.",
            "Reference Data: a new Build menu with a card template editor (field roles, order, labels and lookups, with a live preview), Reset to auto and Reload template.",
            "Reference Data: template problems show a short message and the folder still opens with a plain layout.",
            "Metabot Insight: two extra checks for Reference Data, for field names containing spaces and mixed date formats in one file."
        ]
    },
    {
        version: "1.3.0",
        summary: "Release 1.3.0 opens Library > Reference Data and adds Metabot Insight mode, which checks the page you're on for data-quality problems.",
        changes: [
            "Library > Reference Data: a folder landing page and a searchable card view for each reference data folder.",
            "Reference Data: Editors and above can edit and save files; Admins can also add and delete them.",
            "Metabot Insight mode: an Insight button in the top bar turns on a small Metabot face that checks each page and explains what it finds in a speech bubble.",
            "Insight: quick checks run on your computer first, with colour-coded severity and field names you can click to jump to the field.",
            "Insight: one-click fixes with Undo, Draft value, previous insights, thumbs up or down, and Don't show again.",
            "Insight: Check collection for a whole collection, dictionary, establishment list or Reference Data folder, and Compare versions for saved versions.",
            "Insight: settings for when Metabot is asked and a daily request limit.",
            "Insight: the face shows expressions, follows the pointer and dozes off after a short idle time."
        ]
    },
    {
        version: "1.2.9",
        summary: "Release 1.2.9 is mostly about Establishments: a filters sidebar with counts, plain-English code descriptions and export of the listed establishments. It also adds the Mapping File export and Metabot network checks.",
        changes: [
            "Establishments: a Filters sidebar with counts for each value, so you can see how many establishments each choice leaves.",
            "Establishments: a search box in the title bar, a button to show or hide the filters, and centred establishment cards.",
            "Establishments: codes are shown with plain-English descriptions, including Public/Private and HSP, in cards, filters and exports.",
            "Establishments: while editing, coded fields show a hint with the mapped description.",
            "Establishments: File menu export of the establishments currently listed, as CSV or JSON.",
            "Establishments: fields that come from an Establishment List folder owned by another team are shown read-only, with a note to ask that folder's Data Custodian.",
            "Establishment List folders can have their own Data Custodian and editors, with the ownership banner, panel and request option.",
            "Establishments: dark-themed checkboxes and date pickers that match the rest of the app.",
            "Data Elements: File > Export > Mapping File (Editor and above) creates the code-to-description file used by Establishments.",
            "Metabot: if your network intercepts AI requests, Metabot explains it and offers Open acknowledgement page and Retry, and a status indicator in its header shows whether the AI service is reachable."
        ]
    }
];

window.TOPIC_AREAS = window.TOPIC_AREAS || [];
window.TOPICS = window.TOPICS || [];
(function () {
    window.RELEASES.forEach(function (r, i) {
        var latest = i === 0;
        var v = r.version;
        window.TOPICS.push({
            id: "release-" + v.replace(/\./g, "-"),
            area: "What's new",
            title: "What's new in " + v,
            question: latest ? "What changed in the latest release?" : "What changed in release " + v + "?",
            summary: r.summary,
            keywords: ["release " + v, v, "release notes", "changes", "changelog"].concat(latest ? ["what's new", "latest release", "new features", "latest version"] : []),
            synonyms: ["what changed in " + v, "what's new in " + v, "release " + v + " changes"].concat(latest ? ["what changed in the latest release", "what is new", "recent changes", "latest update"] : []),
            steps: r.changes.slice(),
            who: "Everyone. Each change is available to the roles that can already use that area.",
            tips: ["Patch notes on Home describe each release as it arrives."],
            related: ["patch-notes", "new-in-progress"]
        });
    });
})();
