import initCopyClipboard from '.';

// Init
const { currentScript } = document;
document.addEventListener('DOMContentLoaded', () => initCopyClipboard({ currentScript }));
