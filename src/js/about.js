import Accordion from 'accordion-js';

new Accordion('.accord-container', {
  openOnInit: [0],
});

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

});



// const button1 = document.querySelector('#ac-trigger-0');
// const button2 = document.querySelector('#ac-trigger-1');
// const button3 = document.querySelector('#ac-trigger-2');


// let isOpen1 = button1.getAttribute('aria-expanded');
// let isOpen2 = button2.getAttribute('aria-expanded');
// let isOpen3 = button3.getAttribute('aria-expanded');

// let svgUp = document.querySelectorAll('.icon-up');
// let svgDown = document.querySelectorAll('.icon-down');







