---
layout: post
title: "Full-Page Navigation"
date: 2020-02-03
description:
image: "/assets/images/work/art-by-elina/mast.jpg"
---
<p>There was a challenge on <a href="https://codepen.io/challenges/2020/january/2" target="_blank">CodePen</a> during the second week of January to build a full-page navigation. I just happened to recently finish working on one for the new <a href="/art-by-elina">Art by Elina</a> website. I built something that transitioned horizontally because the page transitions on Art by Elina were done vertically. So this is the script I wrote and used to do that.</p>

<hr/>

<h2>The Prototype</h2>
<div class="flex-vid">
  <iframe height="650" scrolling="no" title="CSS Grid for Getty Images" src="//codepen.io/thomasvaeth/embed/VwYdgxe/?height=650&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;"></iframe>
</div>
<p>The demo is best viewed with the zoom set to 0.5x.</p>

<hr/>

<h2>The Setup</h2>
<p></p>
<pre>
<code>
&lt;div class="hamburger"&gt;
  &lt;!-- Toggle Here --&gt;
&lt;/div&gt;

&lt;div class="menu"&gt;
  &lt;div class="menu__left"&gt;
    &lt;!-- Content Here --&gt;
  &lt;/div&gt;
  &lt;div class="menu__right"&gt;
    &lt;!-- Content Here --&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code>
</pre>

<pre>
<code>
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
</code>
</pre>
<p>The menu is divided into a left and right container. The width of the containers are set in the script depending on the user's screen size.</p>

<hr/>

<h2>The Script</h2>
<p>jQuery and <a href="https://animejs.com/" target="_blank">anime.js</a> v3 have to be included for the script to work. The timeline does not work in v2.</p>
<pre>
<code>
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
</code>
</pre>

<hr/>

<h2>The Demo</h2>
<p><a href="https://artbyelina.com/" target="_blank">Art by Elina</a></p>
