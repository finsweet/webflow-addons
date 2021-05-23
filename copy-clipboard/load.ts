import initCopyClipboard from '.';

// Init
const { currentScript } = document;

window.Webflow = window.Webflow || [];
window.Webflow.push(() => {
  initCopyClipboard({ currentScript });
});
