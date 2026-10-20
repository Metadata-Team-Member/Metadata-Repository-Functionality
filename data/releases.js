/* Metadata Repository Functionality: release notes ("What's new").
   Add each new release at the TOP of window.RELEASES. The first entry becomes the answer to
   "What changed in the latest release?"; older entries answer "What changed in release x.y.z?".
   Plain text, user-facing changes only. Same sensitivity rules as the other topic files. */

window.RELEASES = [
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
