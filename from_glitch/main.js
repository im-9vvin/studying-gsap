import { gsap } from 'gsap';

const $button = document.querySelector('.button');
const $bg = document.querySelector('.bg');

const $button2 = document.querySelector('.button-2');
const $bg2 = document.querySelector('.bg-2');

// the glitch codes with .from()
$button.addEventListener('mouseenter', () => {
  const bgScale = gsap.getProperty($bg, 'scale');
  console.log('bgScale:', bgScale);
  gsap.from($bg, { scale: 0, duration: 1, ease: 'circ' });
});

$button2.addEventListener('mouseenter', () => {
  const bg2Scale = gsap.getProperty($bg2, 'scale');
  console.log('bg2Scale:', bg2Scale);
  gsap.fromTo(
    $bg2,
    {
      // fromTo 함수 두번째 인자 오브젝트에선 duration, ease 같은 프로퍼티는 무시됨.
      scale: 0,
    },
    {
      duration: 1,
      ease: 'circ',
      scale: 1,
    }
  );
});
