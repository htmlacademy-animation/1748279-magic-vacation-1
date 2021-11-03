// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import AnimationText from './modules/animations';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.addEventListener(`load`, function () {
  document.body.classList.add(`ready`);
});

let titles = [`.animated-title`, `.intro__date`, `.slider__item-title`, `.prizes__title`, `.rules__title`, `.game__title`];

titles = titles.map((el) => {
  return new AnimationText(document.querySelector(el), 400);
});

titles.forEach((el) => {
  el.init();
});
