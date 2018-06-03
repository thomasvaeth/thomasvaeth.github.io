// ----------------------------------------------
// Imports
// ----------------------------------------------
import anime from 'animejs';
import AOS from 'aos';
import Barba from 'barba.js';
import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll';
import InfiniteScroll from './components/_infiniteScroll.js';
import { miscCycle, miscAnchor } from './components/_miscellaneous.js';
import NavigationScroll from './components/_navigationScroll.js';
import OpacityScroll from './components/_opacityScroll.js';

// ----------------------------------------------
// Inits
// ----------------------------------------------
$(() => {

  // Barba
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
          duration: 350,
          complete() {
            resolve();
          }
        });
      });
    },

    slideIn() {
      $('.transition').removeClass('transition-out').addClass('transition-in');

      window.scrollTo(0, 0);
      this.oldContainer.style.display = 'none';
      this.newContainer.style.visibility = 'visible';

      this.done();
    }
  });

  Barba.Dispatcher.on('transitionCompleted', () => {
    $('body').removeClass('js-scrolling-down js-scrolling-up');

    anime({
      targets: '.transition',
      translateY: '-100%',
      easing: 'easeOutQuart',
      duration: 350,
      delay: 200,
      complete() {
        $('.transition').removeClass('transition-in');
      }
    });

    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true
    });

    const rellax = new Rellax('.rellax');
    const scroll = new SmoothScroll('a[href*="#"]');

    NavigationScroll.init();
    OpacityScroll.init();
    miscCycle();

    $('.header__link').on('click', eve => {
      const attr = $(eve.target).attr('data-anchor');

      if (attr) {
        miscAnchor(attr);
      }
    });

    if ($('.posts').length && $('.posts__next').length) {
      InfiniteScroll.init();
    }
  });

  Barba.Pjax.getTransition = () => SlideTransition;

  Barba.Pjax.start();

});
