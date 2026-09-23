// ============================================================
// reveal.js — スクロール表示
//   ・JS実行前は常に表示（事故防止）
//   ・画面内は即表示、画面外は IntersectionObserver
//   ・保険として初回スクロール時と4秒後に全表示
// ============================================================

export function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (els.length === 0) return;

  const html = document.documentElement;
  const addRevealed = (el) => el.classList.add('is-revealed');

  const revealVisible = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach((el) => {
      if (el.classList.contains('is-revealed')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) addRevealed(el);
    });
  };

  revealVisible();
  html.classList.add('is-anim');
  revealVisible();

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            addRevealed(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    els.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', () => els.forEach((el) => addRevealed(el)), {
      once: true,
      passive: true,
    });
    setTimeout(() => els.forEach((el) => addRevealed(el)), 4000);
  } else {
    els.forEach((el) => addRevealed(el));
  }
}
