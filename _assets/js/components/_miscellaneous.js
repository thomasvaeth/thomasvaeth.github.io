// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';
import anime from 'animejs';
import Barba from 'barba.js';

// ----------------------------------------------
// Barba
// ----------------------------------------------
const miscBarba = () => {
  const SlideTransition = Barba.BaseTransition.extend({
    start() {
      Promise.all([this.newContainerLoading, this.slideOut(), new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 800);
      })]).then(this.slideIn.bind(this));
    },

    slideOut() {
      $('.transition').addClass('transition--out');

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
      $('.transition').removeClass('transition--out').addClass('transition--in');

      const _this = this;

      window.scrollTo(0, 0);
      this.oldContainer.style.display = 'none';
      this.newContainer.style.visibility = 'visible';
      anime({
        targets: '.transition',
        translateY: '-100%',
        easing: 'easeOutQuart',
        duration: 800,
        complete() {
          _this.done();
        }
      });
    }
  });

  Barba.Dispatcher.on('transitionCompleted', (currentStatus, oldStatus, container) => {
    $('.transition').removeClass('transition--in');
  });

  Barba.Pjax.getTransition = function() {
    return SlideTransition;
  };

  Barba.Pjax.start();
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscBarba
};
