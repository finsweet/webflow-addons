import { ElementData, ElementsDataByViewportWidth } from './types';
import { validPseudoSelectors } from './constants';

const ATTRIBUTES = {
  Main: 'fs-display-style',
  Group: 'fs-display-group',
  From: 'fs-display-from',
  Pseudo: 'fs-display-pseudo',
  Property: 'fs-display-property',
  Viewport: 'fs-display-viewport',
} as const;

/**
 * @returns {ElementData[]}
 */
export const getElementsDataByViewportWidth = (includeResponsive: boolean): ElementsDataByViewportWidth | undefined => {
  const displayStyleElements = document.querySelectorAll(`[${ATTRIBUTES.Main}]`);
  if (!displayStyleElements.length) return;

  const elementsByViewportWidth: ElementsDataByViewportWidth = {
    base: [],
  };

  // Classify each element by breakpoint
  displayStyleElements.forEach((element) => {
    // Check if there's a group target
    const groupWrapper = element.closest(`[${ATTRIBUTES.Group}="wrapper"]`);
    const groupTarget = groupWrapper ? groupWrapper.querySelector(`[${ATTRIBUTES.Group}="from"]`) : null;

    // Check if there's an explicit target
    const fromSelector = groupWrapper?.getAttribute(ATTRIBUTES.From) || element.getAttribute(ATTRIBUTES.From);
    const fromExplicitTarget = fromSelector ? document.querySelector(fromSelector) : null;

    // Check if the target is a pseudoelement
    const pseudoSelector = groupWrapper?.getAttribute(ATTRIBUTES.Pseudo) || element.getAttribute(ATTRIBUTES.Pseudo);
    const pseudoTarget = validPseudoSelectors.find((selector) => pseudoSelector === selector);

    // Assign the target by order of preference
    let fromTarget: Element;
    if (fromExplicitTarget) fromTarget = fromExplicitTarget;
    else if (groupTarget) fromTarget = groupTarget;
    else fromTarget = element;

    // Get the style property that must be displayed
    const styleProperty = (groupWrapper?.getAttribute(ATTRIBUTES.Main) ||
      element.getAttribute(ATTRIBUTES.Main)) as string;

    // Get the viewport size target
    const viewportTarget = groupWrapper?.getAttribute(ATTRIBUTES.Viewport) || element.getAttribute(ATTRIBUTES.Viewport);
    const viewportSizeNumber = viewportTarget?.match(/\d+/g);
    let viewportSize: string | undefined;
    if (viewportSizeNumber) viewportSize = `${viewportSizeNumber[0]}px`;

    // Check if the property name should be displayed too
    const displayPropertyName =
      groupWrapper?.getAttribute(ATTRIBUTES.Property) || element.getAttribute(ATTRIBUTES.Property);

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
