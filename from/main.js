import { gsap } from 'gsap';
const $gwin = document.querySelector('.gwin');
gsap.from($gwin, {
  x: 400,
  y: 200,
  scale: 3,
  rotation: 180,
  duration: 2,
});
