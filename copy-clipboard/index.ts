import { findTextNode } from '../utils/helpers';
import ClipboardJS from 'clipboard';

const ATTRIBUTES = {
  Main: 'data-copy',
  GlobalSelector: 'data-copy-selector',
  CopiedMessage: 'data-copied-message',
  CopiedDuration: 'data-copied-duration',
} as const;

const DEFAULT_COPIED_MESSAGE_DURATION = 1000;
const SUCCESS_CSS_CLASS = 'fs-copied';

/**
 * Copy text to clipboard through simple custom attributes.
 *
 * Element properties
 * @attribute [data-copy] Accepts a query selector (id "#" or CSS Class ".") or a text string
 * @attribute [data-copied-message] Message to be displayed after copying
 * @attribute [data-copied-duration] Duration that the data-copied text will be displayed
 *
 * <script> tag properties
 * @attribute [data-copy-selector] Accepts a query selector that will instantiate all the matched elements
 * @attribute [data-copied-message] Message to be displayed after copying. It will affect all of the elements
 * @attribute [data-copied-duration] Duration that the data-copied text will be displayed. It will affect all of the elements
 */
const initCopyClipboard = (currentScript?: HTMLOrSVGScriptElement | null): void => {
  let globalSelector: string | null = null;
  let globalCopiedMessage: string | null = null;
  let globalCopiedDuration: string | null = null;

  if (currentScript) {
    globalSelector = currentScript.getAttribute(ATTRIBUTES.GlobalSelector);
    globalCopiedMessage = currentScript.getAttribute(ATTRIBUTES.CopiedMessage);
    globalCopiedDuration = currentScript.getAttribute(ATTRIBUTES.CopiedDuration);
  }

  const copyTriggers = document.querySelectorAll(`[${ATTRIBUTES.Main}]${globalSelector ? `, ${globalSelector}` : ''}`);

  for (const trigger of copyTriggers) {
    const datasetValue = trigger.getAttribute('data-copy');

    // Get the message that should be set on the trigger after copying
    const copiedMessage = trigger.getAttribute(ATTRIBUTES.CopiedMessage) || globalCopiedMessage;
    const copiedMessageDuration = +(trigger.getAttribute(ATTRIBUTES.CopiedDuration) || globalCopiedDuration || '');

    // Store the text node and the original text
    const textNode = findTextNode(trigger);
    let originalText: string | null;
    if (textNode) originalText = textNode.textContent;

    // Create options object
    const options: ClipboardJS.Options = {};

    // If no dataset or the target is self, just copy the trigger textContent
    if (!datasetValue || datasetValue === 'self') options.text = () => trigger.textContent || '';
    // Check if the value in the dataset is a selector
    else if (/^(\.|#).*/g.test(datasetValue)) {
      const target = document.querySelector(datasetValue);
      if (target) options.target = () => target;
    }
    // If not, set it as text
    else options.text = () => datasetValue;

    // Create new clipboard instance
    const clipboard = new ClipboardJS(trigger, options);

    // Clear selection after copy
    clipboard.on('success', (event: ClipboardJS.Event) => {
      event.clearSelection();

      trigger.classList.add(SUCCESS_CSS_CLASS);

      // If copied message exists, add it when the copy event fires
      if (textNode && copiedMessage) textNode.textContent = copiedMessage;

      setTimeout(() => {
        trigger.classList.remove(SUCCESS_CSS_CLASS);
        if (textNode) textNode.textContent = originalText || '';
      }, copiedMessageDuration || DEFAULT_COPIED_MESSAGE_DURATION);
    });
  }
};

// Export
export default initCopyClipboard;
