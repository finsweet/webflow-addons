import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { handleDisplayTriggers } from './display';
import { handleClickTriggers } from './click';

// Constants
export const ATTRIBUTES = {
  Main: 'fs-disable-scroll',
  PreserveScrollTarget: 'fs-preserve-scroll',
  MatchMedia: 'fs-match-media',
  PreserveScrollBarGap: 'fs-preserve-gap',
} as const;

export const VALUES = {
  Click: 'click',
  Display: 'display',
  Navbar: 'nav',
} as const;

const PARAMS = {
  PreserveScrollBarGap: true,
};

// Stores
export const STATES = {
  ScrollingDisabled: false,
};

// Types
interface GlobalParams {
  preserveScrollBarGap?: boolean;
}

/**
 * Disable the scrolling
 * @param target Target that will preserve scrolling
 */
export const disableScrolling = (target: Element): void => {
  disableBodyScroll(target, { reserveScrollBarGap: PARAMS.PreserveScrollBarGap });
  STATES.ScrollingDisabled = true;
};

/**
 * Enable scrolling
 */
export const enableScrolling = (): void => {
  clearAllBodyScrollLocks();
  STATES.ScrollingDisabled = false;
};

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
  // Get the user's preferences
  if (currentScript) {
    const preserveScrollGapAttribute = currentScript.getAttribute(ATTRIBUTES.PreserveScrollBarGap);
    if (preserveScrollGapAttribute) PARAMS.PreserveScrollBarGap = preserveScrollGapAttribute === 'true';
  } else if (globalParams && typeof globalParams.preserveScrollBarGap === 'boolean') {
    PARAMS.PreserveScrollBarGap = globalParams.preserveScrollBarGap;
  }

  // Click triggers
  handleClickTriggers();

  // Display triggers
  handleDisplayTriggers();
}

// Export
export default initDisableScrolling;
