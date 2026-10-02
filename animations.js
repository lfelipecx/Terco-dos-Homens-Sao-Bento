/* Animações opcionais: o conteúdo permanece visível se GSAP não carregar. */
(() => {
  if (!window.gsap || !window.ScrollTrigger) return;
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const intro = gsap.timeline({ defaults: { ease: 'power2.out' } });
    intro.from('.hero-copy .eyebrow', { autoAlpha: 0, y: 14, duration: 0.45 })
      .from('.hero-copy h1', { autoAlpha: 0, y: 24, duration: 0.7 }, '-=0.2')
      .from('.hero-copy > p:not(.eyebrow)', { autoAlpha: 0, y: 16, duration: 0.55 }, '-=0.38')
      .from('.hero-copy .actions', { autoAlpha: 0, y: 12, duration: 0.5 }, '-=0.3')
      .from('.meeting-strip', { autoAlpha: 0, y: 18, duration: 0.5 }, '-=0.45');

    gsap.utils.toArray('.section-heading, .two-cols > *, .meeting-grid > *, .steps li, .mysteries-head, .tabs, .mystery-panel, .prayer-nav, .prayers, .song-list, .queen-grid > *, .pozzobon-grid > *, .gallery-item, .contact-grid > *').forEach(element => {
      gsap.from(element, {
        autoAlpha: 0,
        y: 22,
        duration: 0.65,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: { trigger: element, start: 'top 92%', once: true }
      });
    });
  });
})();
