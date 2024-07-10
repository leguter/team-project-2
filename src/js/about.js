import Accord from 'accordion-js';
new Accord('.accord-container', {
  openOnInit: [0],
});

import Swiper from 'swiper';
new Swiper('.swiper-container', {

  navigation: {
    nextEl: 'button-next',
  },

  loop: true,
  slidesPerView: 6,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    343: {
      slidesPerView: 'auto',
      width: 130,
      height: 130,
    },
    // when window width is >= 480px
    703: {
      slidesPerView: 'auto',
      width: 200,
      height: 200,

    },
    // when window width is >= 640px
    1376: {
      slidesPerView: 'auto',
      width: 200,
      height: 200,

    }
  }
});









