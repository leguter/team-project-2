import Accord from 'accordion-js';

new Accord('.accord-container', {
  openOnInit: [0],
});

import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs';

new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.button-next',
  },
  loop: true,
  spaseBetween: 1,
});









