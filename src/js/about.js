import Accord from 'accordion-js';
import { Navigation } from 'swiper/modules';
new Accord('.accord-container', {
  openOnInit: [0],
});

import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs';
import 'swiper/css';
new Swiper('.swiper', {
  // modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
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









