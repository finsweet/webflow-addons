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

      if (currentActiveSlide < 1) {
        currentActiveSlide = totalSlideCount;
        // eslint-disable-next-line no-console
        console.log(currentActiveSlide);
        let duplicateNodesNumber = 1;
        // its at the last slide, clone the rest and append them in a way
        // that matches just before you revert to first slide in moving forwards
        while (duplicateNodesNumber < currentActiveSlide) {
          const newSlideToAppend = cloneNode(originalSlidesInSlider[duplicateNodesNumber - 1]);
          const transformValue = sliderMask.clientWidth * (currentActiveSlide - 1);

          newSlideToAppend.style.transform = 'translateX(-0px)';

          newSlideToAppend.setAttribute('fs-appended-slide-element', 'true');

          sliderMask.appendChild(newSlideToAppend);

          newSlideToAppend.style.transform = 'translateX(-' + transformValue + 'px)';

          duplicateNodesNumber = duplicateNodesNumber + 1;
        }
        return 0;
      }
      const sliderContents = slider.querySelectorAll<HTMLDivElement>('.w-slide');
      sliderContents.forEach((slideInSlider) => {
        if (slideInSlider.getAttribute('fs-appended-slide-element')) {
          const transformValue = sliderMask.clientWidth * (currentActiveSlide - 1);

          slideInSlider.style.transform = 'translateX(-' + transformValue + 'px)';
        }
      });
    });
  });
}

// Export
export default initInfiniteSliders;
