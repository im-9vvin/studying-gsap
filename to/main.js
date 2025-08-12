import { gsap } from 'gsap';
const $gwin = document.querySelector('.gwin');
gsap.to($gwin, {
  x: 400,
  y: 200,
  scale: 3,
  rotation: 360,
  duration: 3,
});
