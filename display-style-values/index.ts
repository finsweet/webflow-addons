const pseudoSelectors = ['before', ':before', '::before', 'after', ':after', '::after'];

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

    // Get the computed style, making sure rbg values are converted to hex
    const style = rgbToHex(getComputedStyle(element).getPropertyValue(styleKey));
    if (!style) continue;

    // Check if there's an explicit target
    const targetSelector = element.getAttribute('data-display-target');
    let explicitTarget: Element | null = null;

    if (targetSelector) {
      // If it's a pseudoelement, add the correspondent CSS and continue
      const pseudoSelector = pseudoSelectors.find((selector) => targetSelector === selector);
      if (pseudoSelector) {
        element.id = element.id || `pseudo-${index}`;
        addCSS(`#${element.id}::${pseudoSelector.replace(/:/g, '')} { content: '${style}'; }`);
        continue;
      }
      // If not, get the explicit target
      else explicitTarget = document.querySelector(targetSelector);
    }

    // Check if there's a group target
    const groupWrapper = element.closest('[data-display-group="wrapper"]');
    const groupTarget = groupWrapper ? groupWrapper.querySelector('[data-display-group="target"]') : null;

    // Assign the target by order of preference
    let target: Element;
    if (explicitTarget) target = explicitTarget;
    else if (groupTarget) target = groupTarget;
    else target = element;

    target.textContent = style;
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
