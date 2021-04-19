/**
 * Editor friendly link blocks
 * @param querySelector
 * @attribute [fs-selector]
 */
function initEditorFriendlyLinkBlocks({ querySelector }: { querySelector: string }): void;
function initEditorFriendlyLinkBlocks({ currentScript }: { currentScript: HTMLOrSVGScriptElement | null }): void;
function initEditorFriendlyLinkBlocks({
  querySelector,
  currentScript,
}: {
  querySelector?: string;
  currentScript?: HTMLOrSVGScriptElement | null;
}): void {
  const selector = querySelector || currentScript?.getAttribute('fs-selector');
  if (!selector) return;

  // Funtions
  const handleAccessibility = () => {
    const buttons = document.querySelectorAll<HTMLElement>(selector);
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

    const target = e.target.closest(selector);
    if (!target) return;

    e.preventDefault();
    const anchorElement = target.querySelector<HTMLAnchorElement>('a');
    if (anchorElement) anchorElement.click();
    return false;
  };

  // Handle accessibility
  handleAccessibility();

  // Listen to events
  window.addEventListener('click', handleTargets);
  window.addEventListener('keydown', handleTargets);
}

// Export
export default initEditorFriendlyLinkBlocks;
