import { getElementsDataByViewportWidth, initStyleTag } from './view';
import { createIFrameElement, getComputedProperty } from './helpers';
import { debounce } from 'lodash-es';

/**
 * Copy text to clipboard through simple custom attributes.
 * @attribute [fs-display-style] To set what style value to display. Example: fs-display-style="font-size"
 * @attribute [fs-display-from] OPTIONAL target to get the display value from. If not provided, the same element with the fs-display-style will act as the target. Example: fs-display-from="#target-id"
 * @attribute [fs-display-pseudo] OPTIONAL It will display the style value on the choosen element's pseudo-element
 * @attribute [fs-display-group] OPTIONAL To group elements. The wrapper takes fs-display-group="wrapper" and the target inside takes fs-display-group="from"
 * @attribute [fs-display-property] OPTIONAL To display the property name + the value
 * @attribute [fs-display-viewport] OPTIONAL To display the property value in a specific viewport size. Example: fs-display-viewport="768px"
 */
const initDisplayStyleValues = (includeResponsive = true): void => {
  const elementsDataByViewportWidth = getElementsDataByViewportWidth(includeResponsive);
  const addCSS = initStyleTag();

  for (const viewportWidth in elementsDataByViewportWidth) {
    // Create an iframe with a specific width if the viewport is not the base
    let iFrameElement: HTMLIFrameElement | undefined;
    if (viewportWidth !== 'base') iFrameElement = createIFrameElement(viewportWidth);

    // Render the correspondent values
    for (const [
      index,
      { element, fromTarget, styleProperty, displayPropertyName, pseudoTarget },
    ] of elementsDataByViewportWidth[viewportWidth].entries()) {
      // Get the computed style, making sure rbg values are converted to hex
      let style = getComputedProperty(fromTarget, styleProperty, iFrameElement);
      if (!style) continue;

      // Check if the property name should be displayed too
      if (displayPropertyName) {
        const cssSyntax = displayPropertyName === 'css';
        const cssBlockSyntax = displayPropertyName === 'css-block';
        // prettier-ignore
        style = `${cssBlockSyntax ? '{ ' : ''}${styleProperty}: ${style}${cssSyntax || cssBlockSyntax ? ';' : ''}${cssBlockSyntax ? ' }' : ''}`;
      }

      if (pseudoTarget) {
        element.id = element.id || `pseudo-${index}`;
        addCSS(`#${element.id}::${pseudoTarget.replace(/:/g, '')}{content: '${style}';}`);
      }

      // If not, display the CSS as textContent
      else element.textContent = style;
    }

    /**
     * @todo Check why sometimes the value gets fucked up if the iFrame is removed right away
     */
    setTimeout(() => iFrameElement?.remove(), 100);
  }

  const debouncedRestart = debounce(() => initDisplayStyleValues(false), 500);
  window.addEventListener('resize', debouncedRestart);
};

// Export
export default initDisplayStyleValues;
