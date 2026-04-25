/**
 * scroll.js
 * Handles:
 *   - Reading-progress bar
 *   - Sticky nav background on scroll
 *   - Intersection-observer reveal animations
 *   - Animated number counters
 */

/* ── Progress bar ── */
export function initProgress() {
  const bar = document.getElementById('progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
  });
}

/* ── Nav background ── */
export function initNav() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ── Scroll-reveal ── */
export function initReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach(el => obs.observe(el));
}

/* ── Animated counters ── */
export function initCounters() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (!e.isIntersecting) return;

      const el     = e.target;
      const target = parseFloat(el.dataset.target);
      const dec    = parseInt(el.dataset.dec || 0);
      const suffix = el.dataset.suffix || '';
      const start  = performance.now();
      const DURATION = 1400;

      (function step(now) {
        const progress = Math.min((now - start) / DURATION, 1);
        const ease     = 1 - Math.pow(1 - progress, 4); // easeOutQuart
        el.textContent = (target * ease).toFixed(dec) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      })(performance.now());

      obs.unobserve(el);
    }),
    { threshold: 0.5 }
  );

  document.querySelectorAll('.stat-num[data-target]')
    .forEach(el => obs.observe(el));
}