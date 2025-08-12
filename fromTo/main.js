import { gsap } from 'gsap';

const $gwin = document.querySelector('.gwin');

gsap.fromTo(
  $gwin,
  {
    x: 700,
    y: 800,
    opacity: 0,
    rotate: 270,
    scale: 3,
  },
  {
    x: 400,
    y: 200,
    opacity: 1,
    rotate: 0,
    scale: 1,
    duration: 3.5,
  }
);
