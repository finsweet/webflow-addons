import initDisableScrolling from '.';

// Init
const { currentScript } = document;
document.addEventListener('DOMContentLoaded', () => initDisableScrolling({ currentScript }));
