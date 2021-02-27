export default class EditorFriendlyLinkBlocks {
  constructor(private selectors: string) {
    // Handle accessibility
    this.handleAccessibility();

    // Listen to events
    window.addEventListener('click', (e) => {
      this.handleTargets(e);
    });
    window.addEventListener('keydown', (e) => {
      this.handleTargets(e);
    });
  }

  private handleAccessibility() {
    const buttons = document.querySelectorAll<HTMLElement>(this.selectors);
    buttons.forEach((button) => {
      const anchorElement = button.querySelector<HTMLAnchorElement>('a');
      if (anchorElement && anchorElement.href) {
        button.setAttribute('role', 'link');
        button.setAttribute('tabindex', '0');
        anchorElement.setAttribute('tabindex', '-1');
        if (anchorElement.textContent) button.setAttribute('aria-label', anchorElement.textContent);
      }
    });
  }

  private handleTargets(e: MouseEvent | KeyboardEvent) {
    if (
      !(e.target instanceof HTMLElement) ||
      e.target instanceof HTMLAnchorElement ||
      (e instanceof KeyboardEvent && !(e.key === 'Enter'))
    )
      return;
    const target = e.target.closest(this.selectors);
    if (!target) return;

    e.preventDefault();
    const anchorElement = target.querySelector<HTMLAnchorElement>('a');
    if (anchorElement) anchorElement.click();
    return false;
  }
}
