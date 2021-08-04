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

  sliders.forEach((slider) => {
    const sliderMask = slider.querySelector('.w-slider-mask') as HTMLDivElement;

    const originalSlidesInSlider = slider.querySelectorAll<HTMLDivElement>('.w-slide');

    // config options for the mutation observer

    const mutationObserverConfig = { attributes: true, attributesFilter: ['class'] };

    const mutationObserver = new MutationObserver((mutationList) => {
      // get all appended nodes that are present
      const presentAppendedSlides = slider.querySelectorAll<HTMLDivElement>('[fs-appended-slide-element = "true"]');

      presentAppendedSlides.forEach((presentAppendedSlide) => {
        presentAppendedSlide.remove();
      });
      const mutationTarget = mutationList[0].target as HTMLDivElement;

      const ariaLabel = mutationTarget.getAttribute('aria-label');
      if (!ariaLabel) return;

      const currentActiveSlide = parseInt(ariaLabel.charAt(11));

      if (currentActiveSlide > 1) {
        let nodesDuplicatedCount = 0;
        while (nodesDuplicatedCount < currentActiveSlide) {
          const newSlideToAppend = cloneNode(originalSlidesInSlider[nodesDuplicatedCount]);

          newSlideToAppend.setAttribute('fs-appended-slide-element', 'true');

          sliderMask.appendChild(newSlideToAppend);

          nodesDuplicatedCount = nodesDuplicatedCount + 1;
        }
      }
      const transformValue = sliderMask.clientWidth * (currentActiveSlide - 1);

      // get all appended nodes that are present
      const newAppendedSlides = slider.querySelectorAll<HTMLDivElement>('[fs-appended-slide-element = "true"]');

      // for every appended slide transform them
      newAppendedSlides.forEach((singleAppendedSlide) => {
        singleAppendedSlide.style.transform = `translateX(-${transformValue}px)`;
      });
      return 0;
    });

    const sliderDots = slider.querySelectorAll<HTMLDivElement>('.w-slider-dot');

    sliderDots.forEach((sliderDot) => {
      mutationObserver.observe(sliderDot, mutationObserverConfig);
    });
  });
}

// Export
export default initInfiniteSliders;
