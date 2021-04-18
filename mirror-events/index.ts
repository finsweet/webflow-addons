import { isFormField } from '../utils/type-guards';
import { FormField } from '../utils/types';

// Constants
const CLICK_ATTRIBUTE = 'fs-mirror-click';
const INPUT_ATTRIBUTE = 'fs-mirror-input';

const handleClickEvents = (e: MouseEvent | KeyboardEvent) => {
  const { target: mirrorOrigin } = e;
  if (!(mirrorOrigin instanceof Element) || ('key' in e && e.key !== 'Enter')) return;

  const mirrorTargetSelector = mirrorOrigin.closest(`[${CLICK_ATTRIBUTE}]`)?.getAttribute(CLICK_ATTRIBUTE);
  if (!mirrorTargetSelector) return;

  const mirrorTarget = document.querySelector(mirrorTargetSelector);
  if (mirrorTarget instanceof HTMLElement) mirrorTarget.click();
};

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

const dispatchEvents = (field: FormField, events: string | string[]) => {
  if (typeof events === 'string') events = [events];

  events.forEach((event) => {
    field.dispatchEvent(new Event(event, { bubbles: true }));
  });
};

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
