import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import 'swiper/css/navigation';
// import Swiper styles
// import 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
import 'swiper/css';
const listImg = document.querySelector('.feedback-list')
async function  getIpi() {
    axios.defaults.baseURL = 'https://portfolio-js.b.goit.study';
 try {
     const response = await axios.get('/api/reviews');
      return response.data;
  } catch (err) {
    console.log(err);
    }
}
getIpi().then(dataImg => {
         if (dataImg.length === 0) {
    iziToast.error({
         message:'Not found',
     })
} else {
             createElements(dataImg)
             const swipper = new Swiper('.swiper-reviews', {
            
      modules: [Navigation],
  navigation: {
    nextEl: '.swiper-btn-last',
    prevEl: '.swiper-btn-next',
    },
                 loop: true,
                 direction: 'horizontal',
                 slidesPerView: 1,
                 spaseBetween: 16,
     breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    // },
    // when window width is >= 480px
    344: {
      slidesPerView: 2,
      spaseBetween: 16,
    },
    // when window width is >= 640px
    705: {
        slidesPerView: 4,
        spaseBetween: 16,
      
    }
  }
   
//   spaseBetween: 1,
    
  
});
            
// createElements(dataImg)
}
     })

function createElements(values) {
    const markup = values
        .map(value => {
            return `<li class="reviews-list swiper-slide">
            
                <img class="reviews-img" 
                    src="${value.avatar_url}" alt="Natalia" width="48" height="48">
                <h3 class="reviews-list-title">
                    ${value.author}
                </h3>
                <p class="reviews-list-text">
                    ${value.review}
                </p>
                </li>`;
        })
        .join('');
     listImg.insertAdjacentHTML('beforeend', markup)
}

