import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
// import Swiper styles
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
    console.log(dataImg)
             createElements(dataImg)
             const swipper = new Swiper('.swiper-reviews', {
                 slidesPerView: 5,
     modules: [Navigation],
  navigation: {
    nextEl: '.swiper-btn-last',
    prevEl: '.swiper-btn-next',
    },
                 loop: true,
    direction: 'horizontal',
   
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

