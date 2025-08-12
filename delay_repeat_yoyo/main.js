import { gsap } from 'gsap';

const $gwinOriginal = document.querySelector('.gwin.original');
const $gwinIverted = document.querySelector('.gwin.inverted');
const $gwinHueRotated = document.querySelector('.gwin.hue-rotated');

gsap.to($gwinOriginal, {
  x: 500,
  duration: 1.3,
});

gsap.to($gwinIverted, {
  x: 500,
  duration: 1.3,
  delay: 0.8,
});

gsap.to($gwinHueRotated, {
  x: 500,
  duration: 1.3,
  repeat: -1,
  yoyo: true,
});
