/**
 * main.js
 * Entry point — imports and initialises all feature modules.
 */
import { initCursor }     from './cursor.js';
import { initParticles }  from './particles.js';
import { initTypewriter } from './typewriter.js';
import { initProgress, initNav, initReveal, initCounters } from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initParticles();
  initTypewriter('typewriter');
  initProgress();
  initNav();
  initReveal();
  initCounters();
});