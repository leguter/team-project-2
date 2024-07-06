// import Accordion from 'accordion-js';

// const container = document.querySelector('.name-list-menu');
// const accordion1 = new Accordion(container, {
//     showMultiple: true,
//     onOpen: (currEl) => console.log('Open!', currEl)
// });
 
// const buttons = document.querySelectorAll('.mobile-close-btn');
//     buttons.forEach((button, idx) => {
//         button.addEventListener('click', () => accordion1.close(idx));
//     });

// const markup = ulTemplate();
// container.innerHTML = markup;


// function ulTemplate(ul) {
//     return ul.map(liTemplate).join('');
// }

// function liTemplate(li) {
//     return `<li class="item-navigation-menu"><a href="#aboutme">About me</a></li>
//         <li class="item-navigation-menu"><a href="#benefits">Benefits</a></li>
//         <li class="item-navigation-menu"><a href="#projects">Projects</a></li>
//         <li class="item-navigation-menu"><a href="#faq">FAQ</a></li>`;
// }


// import { bodyScrollLock } from 'body-scroll-lock';


(() => {
  const mobileMenu = document.querySelector('.backdrop');
const openMenuBtn = document.querySelector('.btn-open-burger');
const closeMenuBtn = document.querySelector('#menu-modal-close'); 
  const closeMenuBtn1 = document.querySelector('#js-close-menu-1');
  const closeMenuBtn3 = document.querySelector('#js-close-menu-3');
  const closeMenuBtn2 = document.querySelector('#js-close-menu-2');
  const closeMenuBtn4 = document.querySelector('#js-close-menu-4');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
        : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body.ontouchmove);
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn1.addEventListener('click', toggleMenu);
  closeMenuBtn2.addEventListener('click', toggleMenu);
  closeMenuBtn3.addEventListener('click', toggleMenu);
closeMenuBtn4.addEventListener('click', toggleMenu);

    window.matchMedia('(min-width: 375px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();
