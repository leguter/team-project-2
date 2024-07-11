import Accord from 'accordion-js';
new Accord('.accord-container', {
  openOnInit: [0],
});

import Swip from '../../node_modules/swiper/swiper-bundle.min.mjs';
new Swip('.slider', {
  loop: true,
  navigation: {
    nextEl: '.button-next',
    },
    breakpoints: {
      // when window width is >= 320px
      343: {
        slidesPerView: 'auto',
        width: 260,

      },
      // when window width is >= 480px
      703: {
        slidesPerView: 'auto',
        width: 600,

      },
      // when window width is >= 640px
      1375: {
        slidesPerView: 'auto',
        width: 1200,
      }
    }
})









