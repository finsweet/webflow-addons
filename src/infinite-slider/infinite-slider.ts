import { cloneNode } from '../utils.ts/helpers';

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll<HTMLDivElement>('.w-slider');

  const handleSlider = (slider: HTMLDivElement) => {
    const mask = slider.querySelector('.w-slider-mask') as HTMLDivElement;
    if (mask.clientWidth === slider.clientWidth) return;

    const slides = slider.getElementsByClassName('w-slide') as HTMLCollectionOf<HTMLDivElement>;
    const slidesAmount = slides.length;
    if (!slidesAmount) return;

    // [...slides].forEach((slide) => mask.appendChild(cloneNode(slide)));
    // for (let index = 0; slides.lengt)

    [...slides].forEach((currentSlide) =>
      currentSlide.addEventListener('transitionstart', () => {
        if (currentSlide.getAttribute('aria-hidden')) return;

        const slidesArray = [...slides];

        const previousSlideIndex = slidesArray.findIndex((slide) => slide === currentSlide) - 1;
        console.log({ currentSlide, previousSlideIndex });
        if (previousSlideIndex >= 0) {
          const newSlide = cloneNode(slides[previousSlideIndex]);
          newSlide.style.transform = '';
          mask.appendChild(newSlide);
          const slidesToTransform = [...slides].slice(slidesAmount);
          console.log({ slidesToTransform, transform: currentSlide.style.transform });
          slidesToTransform.forEach((slide) => (slide.style.transform = currentSlide.style.transform));
        } else {
          slidesArray.slice(slidesAmount).forEach((slide) => slide.remove());
        }
      })
    );

    [...slides].forEach((slide) =>
      slide.addEventListener('transitionend', () => {
        if (!slide.getAttribute('aria-hidden')) console.log(slide);
      })
    );
  };

  sliders.forEach((slider) => handleSlider(slider));
});
