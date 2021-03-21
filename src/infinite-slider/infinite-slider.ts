import { cloneNode } from '../utils.ts/helpers';

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll<HTMLDivElement>('.w-slider');

  for (const slider of sliders) {
    const mask = slider.querySelector('.w-slider-mask') as HTMLDivElement;
    if (mask.clientWidth === slider.clientWidth) continue;

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
          slidesToTransform.forEach((slide) => (slide.style.transform = currentSlide.style.transform));
        } else {
          totalSlides.slice(originalSlidesLength).forEach((slide) => slide.remove());
        }
      })
    );
  }
});
