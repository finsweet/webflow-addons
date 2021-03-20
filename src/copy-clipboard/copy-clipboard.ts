import ClipboardJS from 'clipboard';
import { findTextNode } from '../utils.ts/helpers';

document.addEventListener('DOMContentLoaded', () => {
  const copyTriggers = document.querySelectorAll('[data-copy]');

  for (const trigger of copyTriggers) {
    const datasetValue = trigger.getAttribute('data-copy');
    if (!datasetValue) continue;

    // Create options object
    const options: ClipboardJS.Options = {};

    // Get the message that should be set on the trigger after copying
    const copiedMessage = trigger.getAttribute('data-copied');
    const copiedMessageDuration = +(trigger.getAttribute('data-copied-duration') || '');

    // Check if the value in the dataset is a selector or a text string
    const isValidSelector = /^(\.|#).*/g.test(datasetValue);

    // If it's a selector, set the target in the options
    if (isValidSelector) {
      const targetText = document.querySelector(datasetValue)?.textContent;
      if (targetText) options.text = () => targetText;
    }
    // If not, set it as text
    else options.text = () => datasetValue;

    // Create new clipboard instance
    const clipboard = new ClipboardJS(trigger, options);

    // If copied message exists, add it when the copy event fires
    if (copiedMessage) {
      const textNode = findTextNode(trigger);

      if (textNode)
        clipboard.on('success', () => {
          const originalText = textNode.textContent;
          textNode.textContent = copiedMessage;
          setTimeout(() => (textNode.textContent = originalText), copiedMessageDuration || 2000);
        });
    }
  }
});
