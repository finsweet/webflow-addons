import { cloneNode } from '../utils.ts/helpers';

/**
 * Converts an rgb value to hex
 * @param styleString
 * @returns The converted string if it contains a rbg value.
 */
const rgbToHex = (styleString: string): string => {
  const regex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/;
  const stringToHex = (string: string) => {
    const hex = parseInt(string).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hasRbg = regex.test(styleString);
  if (!hasRbg) return styleString;

  const rgbArray = styleString.match(regex);
  if (!rgbArray) return styleString;

  const [_, r, g, b] = rgbArray; // eslint-disable-line

  return '#' + stringToHex(r) + stringToHex(g) + stringToHex(b);
};

/**
 * Gets the computed style property of an element.
 * @param element
 * @param styleProperty
 * @param iFrameElement If provided, the element will be first inserted to an iframe
 * @returns
 */
export const getComputedProperty = (
  element: Element,
  styleProperty: string,
  iFrameElement?: HTMLIFrameElement
): string => {
  if (iFrameElement) {
    element = iFrameElement?.contentDocument?.body.insertAdjacentElement('beforeend', cloneNode(element)) || element;
  }

  return rgbToHex(getComputedStyle(element).getPropertyValue(styleProperty));
};

/**
 * Create an iframe with a specific width
 * @param viewportWidth
 */
export const createIFrameElement = (viewportWidth: string): HTMLIFrameElement => {
  // Create an iframe with a specific width
  const iFrameElement = document.createElement('iframe');
  Object.assign(iFrameElement.style, {
    width: viewportWidth,
    position: 'absolute',
    clip: 'rect(1px, 1px, 1px, 1px)',
    clipPath: 'inset(0px 0px 99.9% 99.9%)',
    overflow: 'hidden',
    height: '1px',
    padding: '0',
    border: '0',
  });

  // Append the new iFrame
  document.body.appendChild(iFrameElement);

  // Append Webflow's CSS
  const webflowCSS = document.head.querySelector('link[rel="stylesheet"][type="text/css"]');
  if (webflowCSS) iFrameElement.contentDocument?.head.appendChild(cloneNode(webflowCSS));

  return iFrameElement;
};
