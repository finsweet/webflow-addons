import { isFormField } from '@finsweet/ts-utils';

// Constants
const CLICK_ATTRIBUTE = 'fs-mirror-click';
const INPUT_ATTRIBUTE = 'fs-mirror-input';

/**
 * Handle all click and "Enter" events
 * @param e The event object
 */
const handleClickEvents = (e: MouseEvent | KeyboardEvent) => {
  const { target: mirrorOrigin } = e;
  if (!(mirrorOrigin instanceof Element) || ('key' in e && e.key !== 'Enter')) return;

  const mirrorTargetSelector = mirrorOrigin.closest(`[${CLICK_ATTRIBUTE}]`)?.getAttribute(CLICK_ATTRIBUTE);
  if (!mirrorTargetSelector) return;

  const mirrorTarget = document.querySelector(mirrorTargetSelector);
  if (mirrorTarget instanceof HTMLElement) mirrorTarget.click();
};

/**
 * Handle all input events
 * @param e The event object
 */
const handleInputEvents = (e: Event) => {
  const { target: mirrorOrigin } = e;
  if (!isFormField(mirrorOrigin)) return;

  const mirrorTargetSelector = mirrorOrigin.getAttribute(INPUT_ATTRIBUTE);
  if (!mirrorTargetSelector) return;

  const mirrorTarget = document.querySelector(mirrorTargetSelector);
  if (!isFormField(mirrorTarget) || mirrorOrigin.type !== mirrorTarget.type) return;

  // Check if the input needs to update the .value property
  if (
    mirrorTarget instanceof HTMLSelectElement ||
    mirrorTarget instanceof HTMLTextAreaElement ||
    (mirrorTarget.type !== 'checkbox' && mirrorTarget.type !== 'radio')
  ) {
    mirrorTarget.value = mirrorOrigin.value;
    dispatchEvents(mirrorTarget, ['input', 'change']);
  }
  // Check if the input needs to update the .checked property
  else if ((<HTMLInputElement>mirrorOrigin).checked !== mirrorTarget.checked) {
    if (mirrorTarget.type === 'checkbox') mirrorTarget.click();
    if (mirrorTarget.type === 'radio') {
      // Add the checked class to the custom radio
      const customInput = mirrorTarget.parentElement?.querySelector<HTMLDivElement>(
        '.w-form-formradioinput--inputType-custom'
      );
      if (customInput) customInput.classList[mirrorTarget.checked ? 'remove' : 'add']('w--redirected-checked');

      // Set the radio as checked
      mirrorTarget.checked = !mirrorTarget.checked;
      dispatchEvents(mirrorTarget, ['input', 'change']);
    }
  }
};

/**
 * Dispatch any events from an origin field
 * @param element Element to dispatch the event from
 * @param events Events to be dispatched, it accepts a single string or an array of strings
 */
const dispatchEvents = (element: Element, events: string | string[]) => {
  if (typeof events === 'string') events = [events];

  events.forEach((event) => {
    element.dispatchEvent(new Event(event, { bubbles: true }));
  });
};

/**
 * Init the event mirroring
 */
const initMirrorEvents = (): void => {
  if (document.querySelectorAll(`[${CLICK_ATTRIBUTE}]`).length) {
    window.addEventListener('click', handleClickEvents);
    window.addEventListener('keydown', handleClickEvents);
  }

  if (document.querySelectorAll(`[${INPUT_ATTRIBUTE}]`).length) {
    window.addEventListener('input', handleInputEvents);
  }
};

export default initMirrorEvents;
