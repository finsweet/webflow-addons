import { cloneNode } from '../utils/helpers';

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

  for (const slider of sliders) {
    const mask = slider.querySelector('.w-slider-mask');
    if (!(mask instanceof HTMLDivElement) || mask.clientWidth === slider.clientWidth) continue;

    const slides = slider.getElementsByClassName('w-slide') as HTMLCollectionOf<HTMLDivElement>;
    const originalSlidesLength = slides.length;

    // If no slides or there isn't at least one non-visible slide, return.
    if (!originalSlidesLength || originalSlidesLength <= Math.floor(slider.clientWidth / mask.clientWidth)) continue;

    [...slides].forEach((currentSlide) =>
      currentSlide.addEventListener('transitionstart', () => {
        if (currentSlide.getAttribute('aria-hidden')) return;

        const totalSlides = [...slides];
        const previousSlideIndex = totalSlides.findIndex((slide) => slide === currentSlide) - 1;

        if (previousSlideIndex >= 0) {
          const newSlide = cloneNode(slides[previousSlideIndex]);
          newSlide.style.transform = '';
          mask.appendChild(newSlide);

          const slidesToTransform = [...slides].slice(originalSlidesLength);
          slidesToTransform.forEach((slide) => {
            slide.style.transform = currentSlide.style.transform;
          });
        } else {
          totalSlides.slice(originalSlidesLength).forEach((slide) => slide.remove());
        }
      })
    );
  }
}

// Export
export default initInfiniteSliders;
