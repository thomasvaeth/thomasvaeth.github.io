---
title: Load More
date: 2018-09-04
description: ""
image: "../../../images/posts/load-more.jpg"
---
I make blog layouts a lot and wanted a nicer way of loading new posts without loading a new page. I also wanted to do that without using jQuery. So I wrote a script to load more posts for static site generators.

<hr/>

## The Setup
~~~~
<section>
  <div class="posts__container">
    <!-- Posts Here -->
  </div>
  <span class="posts__next">Load More Articles</span>
</section>
~~~~
<p>There is also the option to add some CSS. The script currently adds the class <code>js-posts-loading</code> to <code>posts__next</code> when the user clicks it. A spinner can be added to show the posts are loading. The class will be removed when the posts are finished loading. And there is a CSS keyframe animation named <code>fade-up</code> that has to be written and can be changed to something else.</p>

<hr/>

## The Script
<p>There needs to be a variable called <code>maxPages</code> before the script for this to work. In this version I am just adding the variable at the end of the HTML, but I have also used it as data attributes on the posts container and returned the value in the settings object.</p>

~~~~
// Jekyll
var maxPages = parseInt('&#x7B;&#x7B; paginator.total_pages &#x7D;&#x7D;');

// Ghost
var maxPages = parseInt('&#x7B;&#x7B; pagination.pages &#x7D;&#x7D;');
~~~~

~~~~
const LoadMore = (() => {
  let s;

  return {
    settings() {
      return {
        container: document.querySelector('.posts__container'),
        next: document.querySelector('.posts__next'),
        class: 'js-posts-loading',
        animation: 'fade-up',
        currentPage: 1,
        pathname: window.location.pathname.replace(/#(.*)$/g, '').replace('//g', '/'),
        isLoading: false
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      s.next.addEventListener('click', () => {
        this.requestPosts();
      });
    },

    requestPosts() {
      if (s.isLoading || s.currentPage === maxPages) {
        return;
      }

      s.isLoading = true;
      s.currentPage++;

      const request = new XMLHttpRequest();
      const nextPage = `${s.pathname}page/${s.currentPage}/`;

      request.open('GET', nextPage, true);
      request.send();

      request.onreadystatechange = () => {
        if (request.readyState < 4) {
          s.next.classList.add(s.class);
        } else if (request.readyState === 4 && request.status === 200) {
          const parse = document.createRange().createContextualFragment(request.response);
          const posts = parse.querySelectorAll('.posts__post');

          if (posts.length) {
            setTimeout(() => {
              [].forEach.call(posts, post => {
                post.classList.add(s.animation);
                s.container.appendChild(post);
              });

              s.next.classList.remove(s.class);

              if (s.currentPage === maxPages) {
                const child = document.querySelector('.posts__pagination');

                child.parentNode.removeChild(child);
              }
            }, 750);
          }
        } else {
          console.error(`${request.status} – ${request.statusText}`);
        }
      }

      s.isLoading = false;
    }
  };
})();

LoadMore.init();
~~~~

<hr/>

## Demos
<p><a href="http://barber.samesies.io/" target="_blank">Barber</a> – Custom Blog for <a href="https://github.com/samesies/barber-jekyll" target="_blank">Jekyll</a> and <a href="https://github.com/samesies/barber-ghost" target="_blank">Ghost</a></p>
<p><a href="https://github.com/samesies/Casper" target="_blank">Casper</a> – Fork of Ghost Blog</p>
