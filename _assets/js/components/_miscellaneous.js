// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';
import anime from 'animejs';
import Barba from 'barba.js';
import Rellax from 'rellax';
import InfiniteScroll from './_infiniteScroll.js';

// ----------------------------------------------
// Barba
// ----------------------------------------------
const miscBarba = () => {
  const SlideTransition = Barba.BaseTransition.extend({
    start() {
      Promise.all([this.newContainerLoading, this.slideOut(), new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 700);
      })]).then(this.slideIn.bind(this));
    },

    slideOut() {
      $('.transition').addClass('transition-out');

      return new Promise(resolve => {
        anime({
          targets: '.transition',
          translateX: '-=100%',
          easing: 'easeInQuart',
          duration: 400,
          complete() {
            resolve();
          }
        });
      });
    },

    slideIn() {
      $('.transition').removeClass('transition-out').addClass('transition-in');

      const _this = this;

      window.scrollTo(0, 0);
      this.oldContainer.style.display = 'none';
      this.newContainer.style.visibility = 'visible';

      anime({
        targets: '.transition',
        translateY: '-100%',
        easing: 'easeOutQuart',
        duration: 350,
        complete() {
          _this.done();
        }
      });
    }
  });

  Barba.Dispatcher.on('transitionCompleted', () => {
    $('.transition').removeClass('transition-in');

    miscCycle();

    if ($('.rellax').length) {
      const rellax = new Rellax('.rellax');
    }

    if ($('.posts').length && $('.posts__next').length) {
      InfiniteScroll.init();
    }
  });

  Barba.Pjax.getTransition = () => SlideTransition;

  Barba.Pjax.start();
};

// ----------------------------------------------
// Time
// ----------------------------------------------
const miscTime = () => {
  const date = new Date();
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);

  // -7 (PDT) or -8 (PST)
  const time = new Date(utc + (3600000 * -7));

  $('.header__time time').text(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  setTimeout(miscTime, 1000);
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
// Exports
// ----------------------------------------------
module.exports = {
  miscBarba,
  miscTime,
  miscCycle
};
