import { isScrollable } from '@finsweet/ts-utils';

/**
 * Finds the first scrollable child of an element
 * @param element
 * @returns The child if found
 */
export const findFirstScrollableElement = (element: HTMLElement): HTMLElement | undefined => {
  if (isScrollable(element)) return element;

  const children = element.querySelectorAll('*');
  for (const child of children) {
    if (!(child instanceof HTMLElement)) continue;
    if (isScrollable(child)) return child;
  }
};
