import initEditorFriendlyLinkBlocks from '.';

// Init
const { currentScript } = document;
document.addEventListener('DOMContentLoaded', () => initEditorFriendlyLinkBlocks({ currentScript }));
