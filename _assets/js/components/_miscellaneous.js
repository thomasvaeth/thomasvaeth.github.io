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
        }, 700);
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
      const oldContainer = this.oldContainer;
      const newContainer = this.newContainer;

      window.scrollTo(0, 0);
      oldContainer.style.display = 'none';
      newContainer.style.visibility = 'visible';
      newContainer.querySelector('main').style.opacity = 0;

      anime({
        targets: 'main',
        opacity: 1,
        easing: 'easeOutQuart',
        duration: 700,
        delay: 200
      });
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
    $('.transition').removeClass('transition--in');
  });

  Barba.Pjax.getTransition = () => SlideTransition;

  Barba.Pjax.start();
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscBarba
};
