import axios from 'axios';

const emailInput = document.querySelector("#work-together-input-email");
const emailSucces = document.querySelector(".email-succes");
const emailInvalid = document.querySelector(".email-invalid");
const formFooter = document.querySelector(".footer-form");
let comments;
let email;

emailInput.addEventListener("input", emailEvent);
emailInput.addEventListener("focus", emailEvent);

emailInput.addEventListener("blur", (event) => {
    event.preventDefault();
    emailSucces.classList.add("visually-hidden");
    emailInvalid.classList.add("visually-hidden");
    emailInput.classList.remove("input-succes-js");
    emailInput.classList.remove("input-invalid-js");
});

function emailEvent(event){
    event.preventDefault();
    emailSucces.classList.add("visually-hidden");
    emailInvalid.classList.add("visually-hidden");
    emailInput.classList.remove("input-succes-js");
    emailInput.classList.remove("input-invalid-js");
    if(event.target.value.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
        )){
            emailSucces.classList.remove("visually-hidden");
            emailInput.classList.add("input-succes-js");
        }
        else{
            emailInvalid.classList.remove("visually-hidden");
            emailInput.classList.add("input-invalid-js");
        }
}


formFooter.addEventListener("submit", submitFooterEvent);

async function submitFooterEvent(event){
    axios.defaults.baseURL = 'https://portfolio-js.b.goit.study';
    event.preventDefault();
    axios.post('/api/requests', {
    "email": "test@gmail.com",
    "comment": "User's comment"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}