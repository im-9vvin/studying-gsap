import { gsap } from 'gsap';

const $gwins = document.querySelectorAll('#gwins img');

gsap.to($gwins, {
  x: 500,
  // stagger: 0.1,
  stagger: {
    // each: 1, // duration N sec for each
    amount: 0.2, // duration N sec for everyones
    from: 'random', // 'center', // 'edges', // which one is first
  },
});
