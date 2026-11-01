/**
 * typewriter.js
 * Cycles through an array of phrases with a type/erase animation.
 */
const PHRASES = [
  'AI Automation Engineer',
  'n8n Workflow Builder',
  'Data Pipeline Engineer',
  'Python Developer',
  'OpenAI Integration Expert',
];

export function initTypewriter(elementId = 'typewriter') {
  const el = document.getElementById(elementId);
  if (!el) return;

  let phraseIndex  = 0;
  let charIndex    = 0;
  let isDeleting   = false;

  function tick() {
    const phrase = PHRASES[phraseIndex];

    if (!isDeleting) {
      el.textContent = phrase.slice(0, ++charIndex);
      if (charIndex === phrase.length) {
        isDeleting = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting    = false;
        phraseIndex   = (phraseIndex + 1) % PHRASES.length;
      }
    }

    setTimeout(tick, isDeleting ? 42 : 80);
  }

  tick();
}