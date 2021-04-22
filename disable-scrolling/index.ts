import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { findFirstScrollableElement } from './helpers';
import { isVisible } from '../utils/helpers';

// Constants
const ATTRIBUTES = {
  Main: 'fs-disable-scroll',
  PreserveScrollTarget: 'fs-preserve-scroll',
  ReserveScrollBarGap: 'fs-preserve-gap',
} as const;

// Types
interface GlobalParams {
  reserveScrollBarGap?: boolean;
}

/**
 * Disable scrolling.
 * Available actions:
 * - On click: Scrolling is disabled when an element is clicked and re-enabled it after second click.
 * - On display: Scrolling is disabled if the element is displayed and re-enabled when it's hidden.
 */
function initDisableScrolling({ globalParams }: { globalParams: GlobalParams }): void;
function initDisableScrolling({ currentScript }: { currentScript: HTMLOrSVGScriptElement | null }): void;
function initDisableScrolling({
  currentScript,
  globalParams,
}: {
  currentScript?: HTMLOrSVGScriptElement | null;
  globalParams?: GlobalParams;
}): void {
  // Variables
  let scrollingDisabled = false;
  let reserveScrollBarGap = true;

  // Get the user's preferences
  if (currentScript) {
    const reserveScrollGapAttribute = currentScript.getAttribute(ATTRIBUTES.ReserveScrollBarGap);
    if (reserveScrollGapAttribute) reserveScrollBarGap = reserveScrollGapAttribute === 'true';
  } else if (globalParams && globalParams.reserveScrollBarGap) {
    reserveScrollBarGap = globalParams.reserveScrollBarGap;
  }

  // ########## Actions ##########
  const disableScrolling = (trigger: Element) => {
    disableBodyScroll(trigger, { reserveScrollBarGap });
    scrollingDisabled = true;
  };

  const enableScrolling = () => {
    clearAllBodyScrollLocks();
    scrollingDisabled = false;
  };

  // ########## Click triggers ##########
  // Dom Elements
  const clickTriggers = document.querySelectorAll<HTMLElement>(`[${ATTRIBUTES.Main}="click"]`);

  // Init click triggers
  clickTriggers.forEach((trigger) => {
    const preserveScrollSelector = trigger.getAttribute(ATTRIBUTES.PreserveScrollTarget);

    let preserveScrollTarget: Element;
    if (preserveScrollSelector) preserveScrollTarget = document.querySelector(preserveScrollSelector) || trigger;
    else preserveScrollTarget = trigger;

    trigger.addEventListener('click', () => {
      if (scrollingDisabled) enableScrolling();
      else disableScrolling(preserveScrollTarget);
    });
  });

  // ########## Display triggers ##########
  // DOM Elements
  const displayTriggers = document.querySelectorAll<HTMLElement>(`[${ATTRIBUTES.Main}="display"]`);

  // Stores
  const visibleStates: Map<HTMLElement, boolean> = new Map();
  const displayPreserveScrollTargets: Map<HTMLElement, Element> = new Map();

  // Store the first scrollable element inside each trigger
  displayTriggers.forEach((trigger) => {
    const preserveScrollTarget = findFirstScrollableElement(trigger) || trigger;
    displayPreserveScrollTargets.set(trigger, preserveScrollTarget);
  });

  // Define MutationObserver's callback
  const callback: MutationCallback = (mutations) => {
    const target = mutations[0].target as HTMLElement;
    const visible = isVisible(target);
    const wasVisibleBefore = visibleStates.get(target);

    if (wasVisibleBefore === undefined || visible === wasVisibleBefore) return;

    const preserveScrollTarget = displayPreserveScrollTargets.get(target) || target;

    if (visible && !wasVisibleBefore) disableScrolling(preserveScrollTarget);
    else if (!visible && wasVisibleBefore) enableScrolling();

    visibleStates.set(target, visible);
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
    visibleStates.set(trigger, visible);

    // Observe the element
    observer.observe(trigger, config);
  });
}

// Export
export default initDisableScrolling;
