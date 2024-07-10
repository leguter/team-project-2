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
  slidesPerView: 2,
  breakpoints: {
    344: {
      slidesPerView: 3,
    },
    705: {
        slidesPerView: 6,


    }
  }
});









