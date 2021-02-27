import EditorFriendlyLinkBlocks from './editor-friendly-link-blocks/index';

declare global {
  interface Window {
    WebflowHacks: { [key: string]: any };
  }
}

window.WebflowHacks = { EditorFriendlyLinkBlocks };
