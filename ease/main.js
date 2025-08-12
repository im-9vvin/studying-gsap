import { gsap } from 'gsap';

const $gwinOriginal = document.querySelector('.gwin.original');
const $gwinIverted = document.querySelector('.gwin.inverted');
const $gwinHueRotated = document.querySelector('.gwin.hue-rotated');

gsap.to($gwinOriginal, {
  x: 600,
  duration: 3,
  ease: 'elastic.out', // elastic.out is default
});

gsap.to($gwinIverted, {
  x: 600,
  duration: 3,
  ease: 'bounce', // bounce.out is default
});

gsap.to($gwinHueRotated, {
  x: 600,
  duration: 3,
  ease: 'back(2)',
});
