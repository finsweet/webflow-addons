(() => {
  const sliderContainer = document.querySelector('.w-slider');
  const slides = [].slice.call(sliderContainer.getElementsByClassName('w-slide')),
    len = slides.length;

  const mid = Math.floor(len / 2);
  sliderContainer.addEventListener('transitionstart', (e) => {
    const slide = e.target;
    const ariaHidden = e.target.getAttribute('aria-hidden');
    const idx = slides.findIndex((e) => e === slide);
    if (idx <= 0) {
      return;
    }
    if (!/true/.test(ariaHidden)) {
      if (len - idx <= mid) {
        const pos = idx - mid;
        const copy = slides[pos];
        const e = slides[pos - 1];
        const transform = copy.style.transform.replace(/[^-0-9.]/g, '');
        const newTransform = Math.max(sliderContainer.clientWidth + parseFloat(transform), copy.clientWidth);
        copy.style.transform = pos ? `translateX(${newTransform}px)` : `translateX(${idx * newTransform}px)`;
        if (e) {
          e.style.transform = pos ? `translateX(${newTransform}px)` : `translateX(${idx * newTransform}px)`;
        }
      }
    }
  });
})();
