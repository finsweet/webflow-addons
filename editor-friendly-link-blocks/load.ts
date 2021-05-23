import initEditorFriendlyLinkBlocks from '.';

// Init
const { currentScript } = document;

window.Webflow = window.Webflow || [];
window.Webflow.push(() => initEditorFriendlyLinkBlocks({ currentScript }));
