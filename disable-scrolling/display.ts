import { ATTRIBUTES, disableScrolling, enableScrolling, VALUES } from '.';
import { findFirstScrollableElement } from './helpers';
import { isVisible } from '@finsweet/ts-utils';
import { debounce } from 'lodash-es';

// Constants
const NAV_MEDIAS = {
  medium: 'max-width: 991px',
  small: 'max-width: 767px',
  tiny: 'max-width: 479px',
};

// Types
interface DisplayTriggerData {
  trigger: HTMLElement;
  visible: boolean;
  preserveScrollTarget: Element;
  matchMedia?: string | null;
}

// Stores
const displayTriggersStore: DisplayTriggerData[] = [];

/**
 * Handle the state change
 * @param trigger
 */
const handleStateChange = (trigger: HTMLElement) => {
  // Get the trigger data
  const triggerData = displayTriggersStore.find((data) => data.trigger === trigger);
  if (!triggerData) return;

  // Extract values
  const { matchMedia, preserveScrollTarget, visible: wasVisibleBefore } = triggerData;

  // Make sure the matchMedia requirement is valid
  if (matchMedia && !window.matchMedia(`(${matchMedia})`).matches) return;

  // Check visibility
  const visible = isVisible(trigger);
  if (visible == wasVisibleBefore) return;

  // Perform actions
  if (visible) disableScrolling(preserveScrollTarget);
  else if (wasVisibleBefore) enableScrolling();

  // Store new state
  triggerData.visible = visible;
};

/**
 * Handle the display triggers
 */
export const handleDisplayTriggers = (): void => {
  // DOM Elements
  const displayTriggers = document.querySelectorAll<HTMLElement>(
    `[${ATTRIBUTES.Main}="${VALUES.Display}"], [${ATTRIBUTES.Main}="${VALUES.Navbar}"] .w-nav-menu`
  );

  // Define MutationObserver's callback
  const callback: MutationCallback = (mutations) => {
    const trigger = mutations[0].target as HTMLElement;
    handleStateChange(trigger);
  };

  // Create MutationObserver
  const observer = new MutationObserver(callback);

  // Init
  displayTriggers.forEach((trigger) => {
    // Get the trigger's matchMedia requisite
    let matchMedia = trigger.getAttribute(ATTRIBUTES.MatchMedia);

    if (trigger.classList.contains('w-nav-menu')) {
      const navbar = trigger.closest<HTMLDivElement>('.w-nav');
      const collapsesAt = navbar?.dataset.collapse;

      if (collapsesAt) matchMedia = NAV_MEDIAS[<keyof typeof NAV_MEDIAS>collapsesAt];
    }

    // Get the preserveScroll target
    const preserveScrollSelector = trigger.getAttribute(ATTRIBUTES.PreserveScrollTarget);
    let preserveScrollTarget: Element;
    if (preserveScrollSelector) {
      preserveScrollTarget =
        document.querySelector(preserveScrollSelector) || findFirstScrollableElement(trigger) || trigger;
    } else preserveScrollTarget = findFirstScrollableElement(trigger) || trigger;

    // Store the trigger's data
    displayTriggersStore.push({
      trigger,
      visible: isVisible(trigger),
      preserveScrollTarget,
      matchMedia,
    });

    // Trigger a state change check
    handleStateChange(trigger);

    // Observe the element
    observer.observe(trigger, {
      attributes: true,
      attributeFilter: ['style', 'class'],
    });
  });

  // Handle window resize events
  const debouncedStateChangeHandler = debounce(() => {
    enableScrolling();
    displayTriggers.forEach((trigger) => handleStateChange(trigger));
  }, 250);
  window.addEventListener('resize', debouncedStateChangeHandler);
};
