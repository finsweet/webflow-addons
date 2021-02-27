/**
 * Checks if an element is visible
 * @param {HTMLElement} element
 */
export const isVisible = (element: HTMLElement) =>
  !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
