/**
 * Copy text to clipboard through simple custom attributes.
 * @attribute [data-display-style] To set what style value to display. Example: data-display-style="font-size"
 * @attribute [data-display-target] OPTIONAL Target to render the display value. If not provided, the same element with the data-display-style will act as the target. Example: data-display-target="#target-id"
 */
const initDisplayStyleValues = (): void => {
  const displayStyleElements = document.querySelectorAll('[data-display-style]');

  for (const element of displayStyleElements) {
    const styleKey = element.getAttribute('data-display-style');
    if (!styleKey) continue;

    const targetSelector = element.getAttribute('data-display-target');
    const target = targetSelector ? document.querySelector(targetSelector) || element : element;

    const style = getComputedStyle(element).getPropertyValue(styleKey);
    if (style) target.textContent = style;
  }
};

export default initDisplayStyleValues;
