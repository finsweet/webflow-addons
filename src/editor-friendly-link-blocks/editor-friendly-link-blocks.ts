/**
 * Editor friendly link blocks
 * @argument selectors [data-selectors]
 */
document.addEventListener('DOMContentLoaded', () => {
  const selectors = document.currentScript?.getAttribute('data-selectors');
  if (!selectors) return;

  // Funtions
  const handleAccessibility = () => {
    const buttons = document.querySelectorAll<HTMLElement>(selectors);
    buttons.forEach((button) => {
      const anchorElement = button.querySelector('a');
      if (anchorElement && anchorElement.href) {
        button.setAttribute('role', 'link');
        button.setAttribute('tabindex', '0');
        anchorElement.setAttribute('tabindex', '-1');
        if (anchorElement.textContent) button.setAttribute('aria-label', anchorElement.textContent);
      }
    });
  };

  const handleTargets = (e: MouseEvent | KeyboardEvent) => {
    if (
      !(e.target instanceof HTMLElement) ||
      e.target instanceof HTMLAnchorElement ||
      ('key' in e && !(e.key === 'Enter'))
    )
      return;

    const target = e.target.closest(selectors);
    if (!target) return;

    e.preventDefault();
    const anchorElement = target.querySelector<HTMLAnchorElement>('a');
    if (anchorElement) anchorElement.click();
    return false;
  };

  // Handle accessibility
  document.addEventListener('DOMContentLoaded', handleAccessibility);

  // Listen to events
  window.addEventListener('click', handleTargets);
  window.addEventListener('keydown', handleTargets);
});
