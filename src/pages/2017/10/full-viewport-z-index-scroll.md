---
title: "Full Viewport Z-Index Scroll"
date: 2017-10-13
description: ""
image: "../../../images/posts/full-viewport.jpg"
---
I originally built this script for Innovation at Getty Images to showcase all of the projects the team was working on at the time. Unfortunately, I never had the opportunity to launch anything before the team was disolved and we were moved to new positions. I had a lot of fun and frustration building this, so I was a hugely disappointed to never see it in production. I decided to post the script on CodePen and it was one of <a href="https://codepen.io/2017/popular/pens/" target="_blank" rel="noopener noreferrer">The Most Hearted of 2017</a>.

<div class="flex-vid">
  <iframe height="575" scrolling="no" title="Full Viewport Z-Index Scroll" src="//codepen.io/thomasvaeth/embed/xLwwZq/?height=265&theme-id=0&default-tab=result&embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;"></iframe>
</div>

<p>All the children of the main tag are positioned with a higher z-index than the previous one. Once that childs hits the top of the window the section switches to fixed positioning and the next child begins overlapping it on scroll. The opacity also starts to fade out when it's halfway covered. And all of this is done in vanilla JavaScript.</p>

<hr/>

## The Setup
~~~~
<body class="example">
  <main>
    <section class="image">
      <div class="image__bg" style="background-image: url('https://source.unsplash.com/9dD0gFvrFnY/1600x900');"></div>
    </section>
    <section class="image">
      <div class="image__bg" style="background-image: url('https://source.unsplash.com/W5RuDkMkKzU/1600x900');"></div>
    </section>
    <section class="image">
      <div class="image__bg" style="background-image: url('https://source.unsplash.com/MnxT92l-3Qo/1600x900');"></div>
    </section>
    <section class="image">
      <div class="image__bg" style="background-image: url('https://source.unsplash.com/HKZPcz4Jpm8/1600x900');"></div>
    </section>
    <section class="image">
      <div class="image__bg" style="background-image: url('https://source.unsplash.com/NMbKKrLTI_k/1600x900');"></div>
    </section>
    <section class="image">
      <div class="image__bg" style="background-image: url('https://source.unsplash.com/Xcnq8hpUy9o/1600x900');"></div>
    </section>
  </main>
</body>
~~~~
~~~~
body {
  background-color: #000;
}

.image {
  position: relative;

  height: 100vh;
  width: 100%;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    height: 100%;
    width: 100%;

    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }
}
~~~~

<hr/>

## The Script
~~~~
const OpacityScroll = (() => {
  let s;

  return {
    settings() {
      return {
        windowHeight: window.innerHeight,
        halfWindowHeight: window.innerHeight / 2,
        windowWidth: window.innerWidth,
        documentHeight: document.body.scrollHeight
      };
    },

    init(page) {
      s = this.settings();
      this.bindEvents(page);
    },

    bindEvents(page) {
      this.opacityScroll(page);
    },

    opacityScroll(page) {
      const children = document.querySelectorAll(`.${page} main`)[0].children;

      [].forEach.call(children, (child, idx) => {
        child.style.left = 0;

        if (idx === 0) {
          child.style.position = 'fixed';
          child.style.top = 0;
          child.style.zIndex = 0;
        } else {
          child.style.position = 'absolute';
          child.style.top = `${idx}00vh`;
          child.style.zIndex = idx;

          let scrollOffset = child.getBoundingClientRect().top + document.body.scrollTop;
          let opacityTrigger = s.windowHeight * idx - s.halfWindowHeight;

          window.addEventListener('resize', () => {
            scrollOffset = child.getBoundingClientRect().top + document.body.scrollTop;
            s.windowHeight = window.innerHeight;
            s.halfWindowHeight = s.windowHeight / 2;
            s.documentHeight = document.body.scrollHeight;
            opacityTrigger = s.windowHeight * idx - s.halfWindowHeight;
          });

          window.addEventListener('scroll', opacityChange);
          window.addEventListener('resize', opacityChange);

          function opacityChange() {
            const scrollTop = document.documentElement.scrollTop;
            const prev = child.previousElementSibling;
            const opacity = 1 - (scrollTop - opacityTrigger) / scrollTop * idx * 2;

            if (scrollTop >= opacityTrigger) {
              prev.style.opacity = opacity > 0 ? opacity : 0;
            } else {
              prev.style.opacity = 1;
            }

            if (scrollTop >= scrollOffset && scrollTop + s.windowHeight !== s.documentHeight) {
              child.style.position = 'fixed';
              child.style.top = 0;
            } else {
              child.style.position = 'absolute';
              child.style.top = `${idx}00vh`;
              child.style.left = 0;
              child.style.zIndex = idx;
            }
          }
        }
      });
    }
  };
})();

OpacityScroll.init('example');
~~~~
