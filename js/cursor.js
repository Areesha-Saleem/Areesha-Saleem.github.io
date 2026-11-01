/**
 * cursor.js
 * Custom animated cursor — dot + trailing ring.
 * Expands on hover over interactive elements.
 */
export function initCursor() {
  const cur  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!cur || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  // Smooth-lag ring
  (function animRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  // Hover expansion
  const targets = 'a, button, .tag, .project-card, .stat-card, .cert-card, .skill-group';
  document.querySelectorAll(targets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.style.width          = '16px';
      cur.style.height         = '16px';
      ring.style.width         = '54px';
      ring.style.height        = '54px';
      ring.style.borderColor   = 'rgba(0,201,177,.6)';
    });
    el.addEventListener('mouseleave', () => {
      cur.style.width          = '10px';
      cur.style.height         = '10px';
      ring.style.width         = '38px';
      ring.style.height        = '38px';
      ring.style.borderColor   = 'rgba(0,201,177,.35)';
    });
  });
}