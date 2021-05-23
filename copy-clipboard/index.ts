import { findTextNode } from '@finsweet/ts-utils';
import ClipboardJS from 'clipboard';

const ATTRIBUTES = {
  Main: 'fs-copy',
  GlobalSelector: 'fs-copy-selector',
  CopiedMessage: 'fs-copied-message',
  CopiedDuration: 'fs-copied-duration',
} as const;

const DEFAULT_COPIED_MESSAGE_DURATION = 1000;
const SUCCESS_CSS_CLASS = 'fs-copied';

interface GlobalParams {
  globalSelector: string;
  globalCopiedMessage?: string;
  globalCopiedDuration?: string;
}

/**
 * Copy text to clipboard through simple custom attributes.
 *
 * Element properties
 * @attribute [fs-copy] Accepts a query selector (id "#" or CSS Class ".") a text string or a "self" value.
 * @attribute [fs-copied-message] Message to be displayed after copying
 * @attribute [fs-copied-duration] Duration that the fs-copied text will be displayed
 *
 * <script> tag properties
 * @attribute [fs-copy-selector] Accepts a query selector that will instantiate all the matched elements
 * @attribute [fs-copied-message] Message to be displayed after copying. It will affect all of the elements
 * @attribute [fs-copied-duration] Duration that the fs-copied text will be displayed. It will affect all of the elements
 */
function initCopyClipboard({ globalParams }: { globalParams: GlobalParams }): void;
function initCopyClipboard({ currentScript }: { currentScript: HTMLOrSVGScriptElement | null }): void;
function initCopyClipboard({
  currentScript,
  globalParams,
}: {
  currentScript?: HTMLOrSVGScriptElement | null;
  globalParams?: GlobalParams;
}): void {
  let globalSelector: string | null | undefined = null;
  let globalCopiedMessage: string | null | undefined = null;
  let globalCopiedDuration: string | null | undefined = null;

  if (currentScript) {
    globalSelector = currentScript.getAttribute(ATTRIBUTES.GlobalSelector);
    globalCopiedMessage = currentScript.getAttribute(ATTRIBUTES.CopiedMessage);
    globalCopiedDuration = currentScript.getAttribute(ATTRIBUTES.CopiedDuration);
  } else if (globalParams) {
    globalSelector = globalParams.globalSelector;
    globalCopiedMessage = globalParams.globalCopiedMessage;
    globalCopiedDuration = globalParams.globalCopiedDuration;
  }

  const copyTriggers = document.querySelectorAll(`[${ATTRIBUTES.Main}]${globalSelector ? `, ${globalSelector}` : ''}`);

  for (const trigger of copyTriggers) {
    if (!(trigger instanceof HTMLElement)) continue;

    const targetValue = trigger.getAttribute(ATTRIBUTES.Main);

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
    if (!targetValue || targetValue === 'self') options.text = () => trigger.textContent || '';
    // Check if the value in the dataset is a selector
    else if (/^(\.|#).*/g.test(targetValue)) {
      const target = document.querySelector(targetValue);
      if (target) options.target = () => target;
    }
    // If not, set it as text
    else options.text = () => targetValue;

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
}

// Export
export default initCopyClipboard;
