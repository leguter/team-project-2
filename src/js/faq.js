import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const acc = new Accordion('.faq-accordion-container', {
  beforeOpen: function (currentElement) {
    if (!currentElement.previousElementSibling) return;
    currentElement.previousElementSibling.style.borderBottom = 'none';
  },
  beforeClose: function (currentElement) {
    if (!currentElement.previousElementSibling) return;
    currentElement.previousElementSibling.style.borderBottom = 'none';
  },
});
acc.open(0);

export * from './faq';
