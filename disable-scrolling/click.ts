import { ATTRIBUTES, disableScrolling, enableScrolling, STATES, VALUES } from '.';

/**
 * Handle the click triggers
 */
export const handleClickTriggers = (): void => {
  // Dom Elements
  const clickTriggers = document.querySelectorAll<HTMLElement>(`[${ATTRIBUTES.Main}="${VALUES.Click}"]`);

  // Init click triggers
  clickTriggers.forEach((trigger) => {
    const preserveScrollSelector = trigger.getAttribute(ATTRIBUTES.PreserveScrollTarget);
    const matchMedia = trigger.getAttribute(ATTRIBUTES.MatchMedia);

    let preserveScrollTarget: Element;
    if (preserveScrollSelector) preserveScrollTarget = document.querySelector(preserveScrollSelector) || trigger;
    else preserveScrollTarget = trigger;

    trigger.addEventListener('click', () => {
      // Prevent actions if the matchMedia doesn't match
      if (matchMedia && !window.matchMedia(`(${matchMedia})`).matches) return;

      // Perform actions
      if (STATES.ScrollingDisabled) enableScrolling();
      else disableScrolling(preserveScrollTarget);
    });
  });
};
