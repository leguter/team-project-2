import Accord from 'accordion-js';
new Accord('.accord-container', {
  openOnInit: [0],
});

import Swip from '../../node_modules/swiper/swiper-bundle.min.mjs';
import 'swiper/css';
new Swip('.slider', {
  navigation: {
    nextEl: '.button-next',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
})









