import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs';
import 'swiper/css';
new Swiper('.swiper-my', {
navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
    },
    slidesPerView: 1,
})