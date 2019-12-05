// ----------------------------------------------
// Imports
// ----------------------------------------------
import anime from 'animejs';
import AOS from 'aos';
import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll';
import InfiniteScroll from './components/_infiniteScroll.js';
import { miscAnchor, miscCycle, miscNavigation } from './components/_miscellaneous.js';
import NavigationScroll from './components/_navigationScroll.js';
import OpacityScroll from './components/_opacityScroll.js';

// ----------------------------------------------
// Inits
// ----------------------------------------------
$(() => {

  // Barba
  barba.use(barbaPrefetch);

  barba.init({
    transitions: [{
      once() {
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
      },
      enter() {
        anime({
          targets: '.transition',
          translateY: '-100%',
          easing: 'easeOutQuart',
          duration: 600,
          delay: 400,
          begin() {
            window.scrollTo(0, 0);

            $('.transition').removeClass('transition-out').addClass('transition-in');
            $('[data-barba]').removeClass('js-hamburger');

            $('body').removeClass('js-scrolling-down js-scrolling-up');
          },
          complete() {
            $('.transition').removeClass('transition-in');
            $('.transition').css('transform', 'translateY(100%)');
          }
        });
      },
      leave() {
        return new Promise(resolve => {
          anime({
            targets: '.transition',
            translateY: '-=100%',
            easing: 'easeInQuart',
            duration: 600,
            begin() {
              $('.transition').addClass('transition-out');
            },
            complete() {
              resolve();
            }
          });
        });
      }
    }],
    views: [{
      namespace: 'home',
      afterEnter() {
        OpacityScroll.init();
        miscCycle();

        if ($('.posts').length && $('.posts__next').length) {
          InfiniteScroll.init();
        }
      }
    }, {
      namespace: 'work',
      afterEnter() {
        const rellax = new Rellax('.rellax');

        OpacityScroll.init();
      }
    }, {
      namespace: 'post',
      afterEnter() {
        const rellax = new Rellax('.rellax');

        OpacityScroll.init();
      }
    }, {
      namespace: 'contact',
      afterEnter() {
        $.ajax({
          url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3980752.1677ed0.62bb6a2ad3ef4dc0a6aad768ab8939ab&count=20&callback=?',
          method: 'GET',
          dataType: 'jsonp',
          success(json) {
            const targetEl = $('#instagram');
            let article;

            json.data.forEach((data, idx) => {
              article = targetEl.children('article').eq(idx);
              article.find('a').attr('href', data.link);
              article.find('figure').addClass('scale-down').css('background-image', `url(${data.images.standard_resolution.url})`);
            });
          },
          error(error) {
            console.error(error);
          }
        });
      }
    }]
  });

  function inits() {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true
    });

    const scroll = new SmoothScroll('a[href*="#"]');

    NavigationScroll.init();
    miscAnchor();
    miscNavigation();
  }

  barba.hooks.afterOnce(() => {
    inits();
  });

  barba.hooks.after(() => {
    inits();
  });

});
