import { cloneNode } from '../utils.ts/helpers';

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll<HTMLDivElement>('.w-slider');

  const handleSlider = (slider: HTMLDivElement) => {
    const mask = slider.querySelector('.w-slider-mask') as HTMLDivElement;
    if (mask.clientWidth === slider.clientWidth) return;

    const slides = slider.getElementsByClassName('w-slide') as HTMLCollectionOf<HTMLDivElement>;
    const slidesAmount = slides.length;
    if (!slidesAmount) return;

    // const fullyVisibleSlides = (() => {
    //   const style = window.getComputedStyle(slides[0]);
    //   const slideWidth = slides[0].offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);

    //   return Math.floor(slider.clientWidth / slideWidth);
    // })();

    if (slides.length <= Math.floor(slider.clientWidth / mask.clientWidth)) return;

    [...slides].forEach((currentSlide) =>
      currentSlide.addEventListener('transitionstart', () => {
        if (currentSlide.getAttribute('aria-hidden')) return;

        const slidesArray = [...slides];
        const previousSlideIndex = slidesArray.findIndex((slide) => slide === currentSlide) - 1;

        if (previousSlideIndex >= 0) {
          const newSlide = cloneNode(slides[previousSlideIndex]);
          newSlide.style.transform = '';
          mask.appendChild(newSlide);

          const slidesToTransform = [...slides].slice(slidesAmount);
          slidesToTransform.forEach((slide) => (slide.style.transform = currentSlide.style.transform));
        } else {
          slidesArray.slice(slidesAmount).forEach((slide) => slide.remove());
        }
      })
    );
  };

  sliders.forEach((slider) => handleSlider(slider));
});
