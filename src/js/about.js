import Accordion from 'accordion-js';


new Accordion('.accordion-container', {
  openOnInit: [0],
});

const button1 = document.querySelector('#ac-trigger-0');
const button2 = document.querySelector('#ac-trigger-1');
const button3 = document.querySelector('#ac-trigger-2');


const isOpen1 = button1.getAttribute('aria-expanded');
const isOpen2 = button2.getAttribute('aria-expanded');
const isOpen3 = button3.getAttribute('aria-expanded');


let svgUp = document.querySelectorAll('.icon-up');
let svgDown = document.querySelectorAll('.icon-down');

// function toggle (isOpen1, isOpen2, isOpen3) {
//   if (isOpen1) {
//     svgUp = svgUp[0].classList.add('is-open');
//   } else {
//     svgDown = svgDown[0].classList.add('is-open');
//   };


// };

// toggle(isOpen1, isOpen2, isOpen3);
button1.addEventListener('click', toggleMenu(isOpen1));
button2.addEventListener('click', toggleMenu(isOpen2));
button3.addEventListener('click', toggleMenu(isOpen3));


function toggleMenu(value) {
  console.log(value);
};


