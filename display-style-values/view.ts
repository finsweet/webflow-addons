import { ElementData, ElementsDataByViewportWidth } from './types';
import { validPseudoSelectors } from './constants';

/**
 * @returns {ElementData[]}
 */
export const getElementsDataByViewportWidth = (includeResponsive: boolean): ElementsDataByViewportWidth | undefined => {
  const displayStyleElements = document.querySelectorAll('[data-display-style]');
  if (!displayStyleElements.length) return;

  const elementsByViewportWidth: ElementsDataByViewportWidth = {
    base: [],
  };

  // Classify each element by breakpoint
  displayStyleElements.forEach((element) => {
    // Check if there's a group target
    const groupWrapper = element.closest('[data-display-group="wrapper"]');
    const groupTarget = groupWrapper ? groupWrapper.querySelector('[data-display-group="from"]') : null;

    // Check if there's an explicit target
    const fromSelector = groupWrapper?.getAttribute('data-display-from') || element.getAttribute('data-display-from');
    const fromExplicitTarget = fromSelector ? document.querySelector(fromSelector) : null;

    // Check if the target is a pseudoelement
    const pseudoSelector =
      groupWrapper?.getAttribute('data-display-pseudo') || element.getAttribute('data-display-pseudo');
    const pseudoTarget = validPseudoSelectors.find((selector) => pseudoSelector === selector);

    // Assign the target by order of preference
    let fromTarget: Element;
    if (fromExplicitTarget) fromTarget = fromExplicitTarget;
    else if (groupTarget) fromTarget = groupTarget;
    else fromTarget = element;

    // Get the style property that must be displayed
    const styleProperty = (groupWrapper?.getAttribute('data-display-style') ||
      element.getAttribute('data-display-style')) as string;

    // Get the viewport size target
    const viewportTarget =
      groupWrapper?.getAttribute('data-display-viewport') || element.getAttribute('data-display-viewport');
    const viewportSizeNumber = viewportTarget?.match(/\d+/g);
    let viewportSize: string | undefined;
    if (viewportSizeNumber) viewportSize = `${viewportSizeNumber[0]}px`;

    // Check if the property name should be displayed too
    const displayPropertyName =
      groupWrapper?.getAttribute('data-display-property') || element.getAttribute('data-display-property');

    const elementData: ElementData = {
      element,
      fromTarget,
      styleProperty,
      displayPropertyName,
      pseudoTarget,
    };

    if (viewportSize && includeResponsive) {
      (elementsByViewportWidth[viewportSize] || (elementsByViewportWidth[viewportSize] = [])).push(elementData);
    } else if (!viewportSize) elementsByViewportWidth.base.push(elementData);
  });

  return elementsByViewportWidth;
};

/**
 * @returns A callback to add CSS to the tag and render it
 */
export const initStyleTag = (): ((css: string) => void) => {
  const styleTagId = 'pseudo-elements-values';

  const styleTag = (() => {
    let element = document.querySelector<HTMLStyleElement>(`#${styleTagId}`);
    let rendered: boolean;

    if (element) {
      element.innerHTML = '';
      rendered = true;
    } else {
      element = document.createElement('style');
      element.id = styleTagId;
      rendered = false;
    }

    return { element, rendered };
  })();

  return (css: string) => {
    if (!styleTag) return;

    styleTag.element.innerHTML = styleTag.element.innerHTML + css;
    if (!styleTag.rendered) {
      document.head.appendChild(styleTag.element);
      styleTag.rendered = true;
    }
  };
};
