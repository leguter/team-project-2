import Accordion from 'accordion-js';

// const menu = document.querySelector('.name-list-menu');
// const button = document.querySelector('.mobile-close-btn');

// menu.addEventListener('click', () => {
    
// });

const menu = document.querySelector('.name-list-menu');
const mobileMenu2 = document.querySelector('.backdrop2');

menu.addEventListener('click', openModal);

function openModal() {
  mobileMenu2.classList.add('is-open2');
}



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
