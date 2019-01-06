// ----------------------------------------------
// Imports
// ----------------------------------------------
import anime from 'animejs';
import AOS from 'aos';
import Barba from 'barba.js';
import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll';
import Canvas from './components/_canvas.js';
import InfiniteScroll from './components/_infiniteScroll.js';
import { miscAnchor, miscCycle, miscNavigation } from './components/_miscellaneous.js';
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
        }, 1200);
      })]).then(this.slideIn.bind(this));
    },

    slideOut() {
      $('.transition').addClass('transition-out');

      return new Promise(resolve => {
        anime({
          targets: '.transition',
          translateY: '-=100%',
          easing: 'easeInQuart',
          duration: 600,
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
      duration: 600,
      delay: 400,
      complete() {
        $('.transition').removeClass('transition-in');
        $('.transition').css('transform', 'translateY(100%)');
      }
    });

    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true
    });

    if ($('.rellax').length) {
      const rellax = new Rellax('.rellax');
    }

    const scroll = new SmoothScroll('a[href*="#"]');

    NavigationScroll.init();
    OpacityScroll.init();
    miscAnchor();
    miscCycle();
    miscNavigation();

    if ($('#canvas').length) {
      Canvas.init();
    }

    if ($('.posts').length && $('.posts__next').length) {
      InfiniteScroll.init();
    }
  });

  Barba.Pjax.getTransition = () => SlideTransition;

  Barba.Pjax.start();

});
