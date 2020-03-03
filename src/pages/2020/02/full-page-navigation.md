---
title: Full-Page Navigation
date: 2020-02-03
description: ""
image: "../../../images/projects/art-by-elina/mast.jpg"
---
There was a challenge on <a href="https://codepen.io/challenges/2020/january/2" target="_blank" rel="noopener noreferrer">CodePen</a> during the second week of January to build a full-page navigation. I just happened to recently finish working on one for the new <a href="https://artbyelina.com/" target="_blank" rel="noopener noreferrer">Art by Elina</a> website. I built something that transitioned horizontally because the page transitions on Art by Elina were done vertically. So this is the script I wrote and used to do that.

<hr/>

## The Prototype
<div class="flex-vid">
  <iframe height="650" scrolling="no" title="CSS Grid for Getty Images" src="//codepen.io/thomasvaeth/embed/VwYdgxe/?height=650&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;"></iframe>
</div>
<p>The demo is best viewed with the zoom set to 0.5x.</p>

<hr/>

## The Setup
<p></p>

~~~~
<div class="hamburger">
  <!-- Toggle Here -->
</div>

<div class="menu">
  <div class="menu__left">
    <!-- Content Here -->
  </div>
  <div class="menu__right">
    <!-- Content Here -->
  </div>
</div>

~~~~

~~~~
.menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -9;

  height: 100%;
  width: 100%;

  visibility: hidden;
  opacity: 0;

  @media (min-width: 54rem) {
    min-height: 40em;
  }

  .js-menu-visible & {
    z-index: 998;

    visibility: visible;
    opacity: 1;
  }

  &__left,
  &__right {
    position: absolute;
    top: 0;

    height: 100%;
  }

  &__left {
    left: 0;

    display: flex;
    width: 100%;

    overflow: hidden;
  }

  &__right {
    display: none;

    @media (min-width: 54rem) {
      display: block;
    }
  }
}
~~~~
<p>The menu is divided into a left and right container. The width of the containers are set in the script depending on the user's screen size.</p>

<hr/>

## The Script
<p>jQuery and <a href="https://animejs.com/" target="_blank" rel="noopener noreferrer">anime.js</a> v3 have to be included for the script to work. The timeline does not work in v2.</p>

~~~~
const Menu = (() => {
  let s;

  return {
    settings() {
      return {
        body: $('body'),
        hamburger: $('.hamburger'),
        open: 'js-menu-open',
        visible: 'js-menu-visible',
        overflow: 'js-overflow',
        width: $(window).width(),
        prevWidth: $(window).width(),
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      let menuContainerWidth;

      if (s.width < 864) {
        menuContainerWidth = 100;
      } else if (s.width < 1456) {
        menuContainerWidth = 50;
      } else {
        menuContainerWidth = 45;
      }

      $(window).on('resize', () => {
        s.width = $(window).width();

        if (s.width < 864) {
          menuContainerWidth = 100;
        } else if (s.width < 1456) {
          menuContainerWidth = 50;
        } else {
          menuContainerWidth = 45;
        }
      });

      s.hamburger.on('click', () => {
        Menu.toggleMenu(menuContainerWidth);
      });

      s.body.on('keyup', e => {
        if (s.body.hasClass(s.open) && e.which === 27) {
          Menu.toggleMenu(menuContainerWidth);
        }
      });
    },

    toggleMenu(width) {
      s.hamburger.toggleClass('js-hamburger');
      s.body.toggleClass(s.open);
      s.body.toggleClass(s.overflow);

      if (s.body.hasClass(s.open)) {
        s.prevWidth = width;

        anime.timeline({
          easing: 'easeOutQuart',
          duration: 600,
          begin() {
            $('.menu__right').css('left', `${width}%`);
            s.body.addClass(s.visible);
          }
        })
        .add({
          targets: '.menu__left',
          width: [0, `${width}%`]
        })
        .add({
          targets: '.menu__right',
          width: [0, `${100 - width}%`]
        }, 0);
      }

      if (!s.body.hasClass(s.open)) {
        anime.timeline({
          easing: 'easeInQuart',
          duration: 600,
          delay: 200,
          complete() {
            s.body.removeClass(s.visible);
          }
        })
        .add({
          targets: '.menu__left',
          width: [`${s.prevWidth}%`, 0]
        })
        .add({
          targets: '.menu__right',
          width: [`${100 - s.prevWidth}%`, 0]
        }, 0);
      }
    }
  };
})();

Menu.init();
~~~~

<hr/>

## The Demo
<p><a href="https://artbyelina.com/" target="_blank" rel="noopener noreferrer">Art by Elina</a></p>
