import { gsap } from 'gsap';
gsap
  .timeline()
  .from('#demo', { autoAlpha: 0 })
  .from('#title', { opacity: 0, scale: 0, ease: 'back' })
  .from('#freds img', { y: 160, stagger: 0.1, duration: 0.8, ease: 'back' })
  .from('#time', { xPercent: 100, duration: 0.2 });
