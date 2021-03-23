import { isVisible } from './utils.ts/helpers';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

/**
 * Disable scrolling.
 * Available actions:
 * - On click: Scrolling is disabled when an element is clicked and re-enabled it after second click.
 * - On display: Scrolling is disabled if the element is displayed and re-enabled when it's hidden.
 */
export const initDisableScrolling = (): void => {
  // ########## DOM Elements ##########
  const displayTriggers = document.querySelectorAll<HTMLElement>('[data-disable-scroll="display"]');
  const clickTriggers = document.querySelectorAll<HTMLElement>('[data-disable-scroll="click"]');

  // ########## Actions ##########
  let scrollingDisabled = false;

  const disableScrolling = (trigger: HTMLElement) => {
    disableBodyScroll(trigger, { reserveScrollBarGap: true });
    scrollingDisabled = true;
  };

  const enableScrolling = () => {
    clearAllBodyScrollLocks();
    scrollingDisabled = false;
  };

  // ########## Click triggers ##########
  const handleClickTrigger = (trigger: HTMLElement) => {
    trigger.addEventListener('click', () => {
      if (scrollingDisabled) enableScrolling();
      else disableScrolling(trigger);
    });
  };

  clickTriggers.forEach((trigger) => handleClickTrigger(trigger));

  // ########## Display triggers ##########
  const visibleStatesStore: Map<HTMLElement, boolean> = new Map();

  // Define MutationObserver's callback
  const callback: MutationCallback = (mutations) => {
    const target = mutations[0].target as HTMLElement;
    const visible = isVisible(target);
    const wasVisibleBefore = visibleStatesStore.get(target);
    if (wasVisibleBefore === undefined || visible === wasVisibleBefore) return;

    if (visible && !wasVisibleBefore) disableScrolling(target);
    else if (!visible && wasVisibleBefore) enableScrolling();

    visibleStatesStore.set(target, visible);
  };

  // Create MutationObserver
  const config: MutationObserverInit = {
    attributes: true,
    attributeFilter: ['style', 'class'],
  };
  const observer = new MutationObserver(callback);

  displayTriggers.forEach((trigger) => {
    // Check if the element is visible
    const visible = isVisible(trigger);
    if (visible) disableScrolling(trigger);

    // Store current state
    visibleStatesStore.set(trigger, visible);

    // Observe the element
    observer.observe(trigger, config);
  });
};

// Init
document.addEventListener('DOMContentLoaded', initDisableScrolling);
