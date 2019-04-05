// ----------------------------------------------
// Imports
// ----------------------------------------------
import SmoothScroll from 'smooth-scroll';

// ----------------------------------------------
// Anchor
// ----------------------------------------------
const miscAnchor = () => {
  $('.header__link').on('click', eve => {
    const anchor = $(eve.target).attr('data-anchor');

    if (anchor) {
      setTimeout(() => {
        const scroll = new SmoothScroll();
        const scrollTo = document.querySelector(`#${anchor}`);

        scroll.animateScroll(scrollTo);
      }, 1250);
    }
  });
};

// ----------------------------------------------
// Cycle
// ----------------------------------------------
const miscCycle = () => {
  $('.cycle').each((idx, ele) => {
    let count = 0;
    const emoji = $(ele).children();
    const length = emoji.length;

    setInterval(() => {
      emoji.eq(count).addClass('hidden');
      count = count === length - 1 ? 0 : ++count;
      emoji.eq(count).removeClass('hidden');
    }, 1000);
  });
};

// ----------------------------------------------
// Navigation
// ----------------------------------------------
const miscNavigation = () => {
  $('.hamburger').on('click', () => {
    $('[data-barba]').toggleClass('js-hamburger');
  });
};

// ----------------------------------------------
// Time
// ----------------------------------------------
// const miscTime = () => {
//   const date = new Date();
//   const utc = date.getTime() + (date.getTimezoneOffset() * 60000);

//   // -7 (PDT) or -8 (PST)
//   const time = new Date(utc + (3600000 * -7));

//   $('.header__time time').text(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

//   setTimeout(miscTime, 1000);
// };

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscAnchor,
  miscCycle,
  miscNavigation
};
