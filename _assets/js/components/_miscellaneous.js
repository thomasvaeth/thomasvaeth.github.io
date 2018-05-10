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
  const FadeTransition = Barba.BaseTransition.extend({
    start() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut() {
      const oldContainer = this.oldContainer;

      return new Promise(resolve => {
        anime({
          targets: oldContainer,
          opacity: 0,
          easing: 'easeInQuart',
          duration: 400,
          complete() {
            resolve();
          }
        });
      });
    },

    fadeIn() {
      const _this = this;
      const oldContainer = this.oldContainer;
      const newContainer = this.newContainer;

      window.scrollTo(0, 0);
      oldContainer.style.display = 'none';
      newContainer.style.visibility = 'visible';
      newContainer.style.opacity = 0;
      anime({
        targets: newContainer,
        opacity: 1,
        easing: 'easeOutQuart',
        duration: 1000,
        complete() {
          _this.done();
        }
      });
    }
  });

  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  };

  Barba.Pjax.start();
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscBarba
};
