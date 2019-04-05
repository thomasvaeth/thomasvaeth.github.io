// ----------------------------------------------
// Imports
// ----------------------------------------------
import anime from 'animejs';
import AOS from 'aos';
import barba from '@barba/core';
// import barbaPrefetch from '@barba/prefetch';
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
  // barba.use(barbaPrefetch);

  barba.init({
    transitions: [{
      appear() {
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

        const scroll = new SmoothScroll('a[href*="#"]');

        NavigationScroll.init();
        miscAnchor();
        miscNavigation();
      },
      leave() {
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
      enter() {
        $('.transition').removeClass('transition-out').addClass('transition-in');
        $('[data-barba]').removeClass('js-hamburger');

        window.scrollTo(0, 0);

        $('body').removeClass('js-scrolling-down js-scrolling-up');

        return new Promise(resolve => {
          anime({
            targets: '.transition',
            translateY: '-100%',
            easing: 'easeOutQuart',
            duration: 600,
            delay: 1200,
            complete() {
              $('.transition').removeClass('transition-in');
              $('.transition').css('transform', 'translateY(100%)');
              resolve();
            }
          });
        });
      }
    }],
    views: [{
      namespace: 'home',
      beforeEnter() {
        AOS.init({
          duration: 1000,
          easing: 'ease',
          once: true
        });

        // const rellax = new Rellax('.rellax');

        OpacityScroll.init();
        miscCycle();

        if ($('.posts').length && $('.posts__next').length) {
          InfiniteScroll.init();
        }
      }
    }, {
      namespace: 'work',
      beforeEnter() {
        AOS.init({
          duration: 1000,
          easing: 'ease',
          once: true
        });

        // OpacityScroll.init();
      },
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
      beforeEnter() {
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

  barba.hooks.after(() => {
    const scroll = new SmoothScroll('a[href*="#"]');

    NavigationScroll.init();
    miscAnchor();
    miscNavigation();
  });

});
