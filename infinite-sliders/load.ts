import initInfiniteSliders from '.';

// Init
const { currentScript } = document;

window.Webflow = window.Webflow || [];
window.Webflow.push(() => initInfiniteSliders({ currentScript }));
