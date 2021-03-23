import ClipboardJS from 'clipboard';
import { findTextNode } from './utils.ts/helpers';

/**
 * Copy text to clipboard through simple custom attributes.
 * @attribute [data-copy] Accepts a query selector (id "#" or CSS Class ".") or a text string
 * @attribute [data-copied] Message to be displayed after copying
 * @attribute [data-copied-duration] Duration that the data-copied text will be displayed
 */
export const initCopyClipboard = (): void => {
  const copyTriggers = document.querySelectorAll('[data-copy]');

  for (const trigger of copyTriggers) {
    const datasetValue = trigger.getAttribute('data-copy');
    if (!datasetValue) continue;

    // Create options object
    const options: ClipboardJS.Options = {};

    // Get the message that should be set on the trigger after copying
    const copiedMessage = trigger.getAttribute('data-copied');
    const copiedMessageDuration = +(trigger.getAttribute('data-copied-duration') || '');
    const textNode = findTextNode(trigger);

    // Check if the value in the dataset is a selector or a text string
    const isValidSelector = /^(\.|#).*/g.test(datasetValue);

    // If it's a selector, set the target in the options
    if (isValidSelector) {
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

      // If copied message exists, add it when the copy event fires
      if (copiedMessage && textNode) {
        const originalText = textNode.textContent;
        textNode.textContent = copiedMessage;
        setTimeout(() => (textNode.textContent = originalText), copiedMessageDuration || 2000);
      }
    });
  }
};

// Init
document.addEventListener('DOMContentLoaded', initCopyClipboard);
