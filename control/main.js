import { gsap } from 'gsap';

const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $reverse = document.querySelector('#reverse');
const $restart = document.querySelector('#restart');

const $gwin = document.querySelector('.gwin');
const tween = gsap.to($gwin, {
  x: 600,
  duration: 3,
  ease: 'linear',
  paused: true,
});

$play.addEventListener('click', () => {
  tween.play();
});

$pause.addEventListener('click', () => {
  tween.pause();
});

$reverse.addEventListener('click', () => {
  tween.reverse();
});

$restart.addEventListener('click', () => {
  tween.restart();
});
