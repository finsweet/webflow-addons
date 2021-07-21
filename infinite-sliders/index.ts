import { cloneNode } from '@finsweet/ts-utils';

/**
 * Infinite looping Webflow sliders
 * @param querySelector
 * @attribute [fs-selector] OPTIONAL
 */
function initInfiniteSliders({ querySelector }: { querySelector: string }): void;
function initInfiniteSliders({ currentScript }: { currentScript: HTMLOrSVGScriptElement | null }): void;
function initInfiniteSliders({
  querySelector,
  currentScript,
}: {
  querySelector?: string;
  currentScript?: HTMLOrSVGScriptElement | null;
}): void {
  const selector = querySelector || currentScript?.getAttribute('fs-selector') || '.w-slider';
  const sliders = document.querySelectorAll<HTMLDivElement>(selector);
  // eslint-disable-next-line no-console
  sliders.forEach((slider) => {
    let currentActiveSlide = 0;

    const sliderMask = slider.querySelector('.w-slider-mask') as HTMLDivElement;

    const originalSlidesInSlider = slider.querySelectorAll<HTMLDivElement>('.w-slide');
    // get the count for all slides in the current slider
    const totalSlideCount = originalSlidesInSlider.length;

    const rightSlideBtn = slider.querySelector<HTMLButtonElement>('.w-slider-arrow-right') as HTMLButtonElement;

    const leftSlideBtn = slider.querySelector<HTMLButtonElement>('.w-slider-arrow-left') as HTMLButtonElement;

    // track the current active slide
    rightSlideBtn.addEventListener('click', () => {
      currentActiveSlide = currentActiveSlide + 1;

      const sliderContents = slider.querySelectorAll<HTMLDivElement>('.w-slide');

      // the slider count should go back to zero, it exceeds amount of present slides
      // should be as initial time
      if (currentActiveSlide === totalSlideCount) {
        currentActiveSlide = 0;
        // remove clones, they are of no use in this iteration and exit function
        sliderContents.forEach((slideInSlider) => {
          if (slideInSlider.getAttribute('fs-appended-slide-element')) {
            slideInSlider.remove();
          }
        });
        return 0;
      }
      // duplicate the node that just went out of view and append it
      const newSlideToAppend = cloneNode(originalSlidesInSlider[currentActiveSlide - 1]);

      const transformValue = sliderMask.clientWidth * currentActiveSlide;
      newSlideToAppend.style.transform = 'translateX(-' + transformValue + 'px)';

      newSlideToAppend.setAttribute('fs-appended-slide-element', 'true');

      sliderMask.appendChild(newSlideToAppend);

      // transform clones
      sliderContents.forEach((slideInSlider) => {
        if (slideInSlider.getAttribute('fs-appended-slide-element')) {
          slideInSlider.style.transform = 'translateX(-' + sliderMask.clientWidth * currentActiveSlide + 'px)';
        }
      });
    });

    leftSlideBtn.addEventListener('click', () => {
      currentActiveSlide = currentActiveSlide - 1;
      // eslint-disable-next-line no-console
      if (currentActiveSlide < 1) {
        currentActiveSlide = 5;
      }
    });
  });
}

// Export
export default initInfiniteSliders;
