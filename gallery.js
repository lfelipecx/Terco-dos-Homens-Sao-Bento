(() => {
  const track = document.querySelector('.gallery-track');
  const cards = [...track.querySelectorAll('.gallery-item')];
  const dialog = document.querySelector('.gallery-dialog');
  const large = dialog.querySelector('.gallery-large');
  const caption = dialog.querySelector('.gallery-caption');
  const count = dialog.querySelector('.gallery-count');
  let current = 0;
  let touchStartX = null;

  function show(index) {
    current = (index + cards.length) % cards.length;
    const card = cards[current];
    const photo = card.querySelector('img');
    large.src = photo.src;
    large.alt = photo.alt;
    caption.textContent = card.querySelector('span').textContent;
    count.textContent = `${current + 1} de ${cards.length}`;
  }
  cards.forEach((card, index) => card.addEventListener('click', () => {
    show(index);
    dialog.showModal();
    dialog.querySelector('.gallery-close').focus();
  }));
  dialog.querySelector('.gallery-close').addEventListener('click', () => dialog.close());
  dialog.querySelectorAll('[data-gallery-step]').forEach(button => button.addEventListener('click', () => show(current + (button.dataset.galleryStep === 'next' ? 1 : -1))));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].screenX; }, {passive:true});
  dialog.addEventListener('touchend', event => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(delta) > 55) show(current + (delta < 0 ? 1 : -1));
    touchStartX = null;
  }, {passive:true});
  document.querySelectorAll('[data-gallery-scroll]').forEach(button => button.addEventListener('click', () => {
    const direction = button.dataset.galleryScroll === 'next' ? 1 : -1;
    const distance = cards[0].getBoundingClientRect().width + 18;
    track.scrollBy({left: direction * distance, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }));
})();
