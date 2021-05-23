import { cloneNode } from '@finsweet/ts-utils';

const ATTRIBUTES = {
  dotsContent: { key: 'fs-dot-content', values: { keep: 'keep', remove: 'remove' } },
} as const;

const SELECTORS = {
  slider: '.w-slider',
  slide: '.w-slide',
  sliderDot: '.w-slider-dot',
} as const;

const initCustomSliderDots = (): void => {
  const sliders = document.querySelectorAll<HTMLDivElement>(SELECTORS.slider);

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll<HTMLDivElement>(SELECTORS.slide);
    const dots = slider.querySelectorAll<HTMLDivElement>(SELECTORS.sliderDot);

    slides.forEach((slide, index) => {
      const dotContentElements = slide.querySelectorAll(`[${ATTRIBUTES.dotsContent.key}]`);

      dotContentElements.forEach((element) => {
        const action = element.getAttribute(ATTRIBUTES.dotsContent.key);

        const elementToAppend = action === ATTRIBUTES.dotsContent.values.keep ? cloneNode(element) : element;
        if (elementToAppend instanceof HTMLElement) elementToAppend.style.pointerEvents = 'none';

        dots[index].appendChild(elementToAppend);
      });
    });
  });
};

export default initCustomSliderDots;
