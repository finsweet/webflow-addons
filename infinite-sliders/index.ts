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

    const sliderDots = slider.querySelectorAll<HTMLDivElement>('.w-slider-dot');

    // put an event listener on each of the dots to figure out
    // how many we will be appending on press
    sliderDots.forEach((singleSliderDot, sliderDotIndex) => {
      const sliderDotNumber = sliderDotIndex + 1;
      singleSliderDot.addEventListener('click', () => {
        const appendedSlides = slider.querySelectorAll<HTMLDivElement>('[fs-appended-slide-element = "true"]');

        appendedSlides.forEach((appendedSlide) => {
          appendedSlide.remove();
        });

        currentActiveSlide = sliderDotNumber;

        // create new nodes to append and transform them

        const numberOfNodesToDuplicate = currentActiveSlide - 1;

        const transformValue = sliderMask.clientWidth * numberOfNodesToDuplicate;

        let nodesDuplicatedCount = 0;
        while (nodesDuplicatedCount < numberOfNodesToDuplicate) {
          const newSlideToAppend = cloneNode(originalSlidesInSlider[nodesDuplicatedCount]);

          newSlideToAppend.setAttribute('fs-appended-slide-element', 'true');

          sliderMask.appendChild(newSlideToAppend);

          nodesDuplicatedCount = nodesDuplicatedCount + 1;
        }
        // get all appended nodes that are present
        const newAppendedSlides = slider.querySelectorAll<HTMLDivElement>('[fs-appended-slide-element = "true"]');

        // for every appended slide transform them
        newAppendedSlides.forEach((singleAppendedSlide) => {
          singleAppendedSlide.style.transform = 'translateX(-' + transformValue + 'px)';
        });
      });
    });

    // track the current active slide
    rightSlideBtn.addEventListener('click', () => {
      currentActiveSlide = currentActiveSlide + 1;

      // in the case we've reached the last slide, reset the counter and remove all
      // appended nodes and exit the function
      if (currentActiveSlide === totalSlideCount) {
        currentActiveSlide = 0;

        const appendedSlides = slider.querySelectorAll<HTMLDivElement>('[fs-appended-slide-element = "true"]');

        appendedSlides.forEach((singleAppendedSlide) => {
          singleAppendedSlide.remove();
        });

        return 0;
      }
      // slide to append will always be a step below in the case of going forwards
      // i.e the one moved out of view
      const newSlideToAppend = cloneNode(originalSlidesInSlider[currentActiveSlide - 1]);

      newSlideToAppend.setAttribute('fs-appended-slide-element', 'true');

      sliderMask.appendChild(newSlideToAppend);

      // this is value by which to move the appended slides so it appears just next to
      // the last slide
      const transformValue = sliderMask.clientWidth * currentActiveSlide;

      // get all appended nodes that are present
      const appendedSlides = slider.querySelectorAll<HTMLDivElement>('[fs-appended-slide-element = "true"]');

      // for every appended slide transform them
      appendedSlides.forEach((singleAppendedSlide) => {
        singleAppendedSlide.style.transform = 'translateX(-' + transformValue + 'px)';
      });
    });

    leftSlideBtn.addEventListener('click', () => {
      currentActiveSlide = currentActiveSlide - 1;

      // the slider has reached its last point, remove any node that has been
      // appended before and append new ones
      const sliderContents = slider.querySelectorAll<HTMLDivElement>('.w-slide');

      if (currentActiveSlide === totalSlideCount - 1) {
        sliderContents.forEach((slideInSlider, slideIndex) => {
          if (slideInSlider.getAttribute('fs-appended-slide-element')) {
            if (slideIndex > totalSlideCount) {
              slideInSlider.remove();
            }
          }
        });
      }

      if (currentActiveSlide < 1) {
        currentActiveSlide = totalSlideCount;

        let duplicateNodesNumber = 1;
        // its at the last slide, clone the rest and append them in a way
        // that matches just before you revert to first slide in moving forwards
        while (duplicateNodesNumber < currentActiveSlide) {
          const newSlideToAppend = cloneNode(originalSlidesInSlider[duplicateNodesNumber - 1]);
          const transformValue = sliderMask.clientWidth * (currentActiveSlide - 1);

          newSlideToAppend.setAttribute('fs-appended-slide-element', 'true');

          sliderMask.appendChild(newSlideToAppend);

          newSlideToAppend.style.transform = 'translateX(-' + transformValue + 'px)';

          duplicateNodesNumber = duplicateNodesNumber + 1;
        }
        return 0;
      }

      sliderContents.forEach((slideInSlider, slideIndex) => {
        if (slideInSlider.getAttribute('fs-appended-slide-element')) {
          // remove duplicates except the duplicate before the last one
          if (slideIndex > totalSlideCount + 1) {
            slideInSlider.remove();
          }
          // if its two steps past the last slide remove the appended one that was not
          // removed before
          if (currentActiveSlide < totalSlideCount - 2) {
            slideInSlider.remove();
          }
          const transformValue = sliderMask.clientWidth * (currentActiveSlide - 1);

          slideInSlider.style.transform = 'translateX(-' + transformValue + 'px)';
        }
      });
    });
  });
}

// Export
export default initInfiniteSliders;
