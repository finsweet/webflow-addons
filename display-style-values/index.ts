const validPseudoSelectors = ['before', ':before', '::before', 'after', ':after', '::after'];

/**
 * Copy text to clipboard through simple custom attributes.
 * @attribute [data-display-style] To set what style value to display. Example: data-display-style="font-size"
 * @attribute [data-display-target] OPTIONAL Target to render the display value. If not provided, the same element with the data-display-style will act as the target. Example: data-display-target="#target-id"
 * @attribute [data-display-group] OPTIONAL To group elements. The wrapper takes data-display-group="wrapper" and the target inside takes data-display-group="target"
 */
const initDisplayStyleValues = (): void => {
  const displayStyleElements = document.querySelectorAll('[data-display-style]');
  const addCSS = initStyleTag();

  for (const [index, element] of displayStyleElements.entries()) {
    const styleKey = element.getAttribute('data-display-style');
    if (!styleKey) continue;

    // Check if there's an explicit target
    const fromSelector = element.getAttribute('data-display-from');
    const fromExplicitTarget = fromSelector ? document.querySelector(fromSelector) : null;

    // Check if there's a group target
    const groupWrapper = element.closest('[data-display-group="wrapper"]');
    const groupTarget = groupWrapper ? groupWrapper.querySelector('[data-display-group="from"]') : null;

    // Assign the target by order of preference
    let fromTarget: Element;
    if (fromExplicitTarget) fromTarget = fromExplicitTarget;
    else if (groupTarget) fromTarget = groupTarget;
    else fromTarget = element;

    // Get the computed style, making sure rbg values are converted to hex
    const style = rgbToHex(getComputedStyle(fromTarget).getPropertyValue(styleKey));
    if (!style) continue;

    // If it's a pseudoelement, add the correspondent CSS
    const pseudoSelector = element.getAttribute('data-display-pseudo');
    const pseudoTarget = validPseudoSelectors.find((selector) => pseudoSelector === selector);
    if (pseudoTarget) {
      element.id = element.id || `pseudo-${index}`;
      addCSS(`#${element.id}::${pseudoTarget.replace(/:/g, '')} { content: '${style}'; }`);
    }

    // If not, display the CSS as textContent
    else element.textContent = style;
  }
};

/**
 * @returns A callback to add CSS to the tag and render it
 */
const initStyleTag = () => {
  const styleTag = document.createElement('style');
  let rendered = false;

  return (css: string) => {
    styleTag.innerHTML = styleTag.innerHTML + css;
    if (!rendered) {
      document.head.appendChild(styleTag);
      rendered = true;
    }
  };
};

/**
 * Converts an rgb value to hex
 * @param styleString
 * @returns The converted string if it contains a rbg value.
 */
const rgbToHex = (styleString: string) => {
  const regex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/;
  const stringToHex = (string: string) => {
    const hex = parseInt(string).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const isRbg = regex.test(styleString);
  if (!isRbg) return styleString;

  const styleArray = styleString.match(regex);
  if (!styleArray) return styleString;

  const [_, r, g, b] = styleArray; // eslint-disable-line

  return '#' + stringToHex(r) + stringToHex(g) + stringToHex(b);
};

// Export
export default initDisplayStyleValues;
