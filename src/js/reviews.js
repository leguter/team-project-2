import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
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
const dataImg = await  getIpi()
if (dataImg.length === 0) {
    iziToast.error({
         message:'Not found',
     })
} else {
    console.log(dataImg)
    createElements(dataImg)
// createElements(dataImg)
}
function createElements(values) {
    const markup = values
        .map(value => {
            return `<li class="reviews-list">
                <img class="reviews-img" 
                    src="./${value.avatar_url}" alt="Natalia" width="48" height="48">
                <h3 class="reviews-list-title">
                    ${value.author}
                </h3>
                <p class="reviews-list-text">
                    ${value.review}
                </p>`;
        })
        .join('');
    listImg.insertAdjacentHTML('beforeend', markup);
}
