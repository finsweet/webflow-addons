import initDisableScrolling from '.';

// Init
const { currentScript } = document;

window.Webflow = window.Webflow || [];
window.Webflow.push(() => initDisableScrolling({ currentScript }));
