// ----------------------------------------------
// Imports
// ----------------------------------------------
import AOS from 'aos';

// ----------------------------------------------
// Infinite Scroll
// ----------------------------------------------
const InfiniteScroll = (() => {
  let s;

  return {
    settings() {
      return {
        container: $('.posts__container'),
        next: $('.posts__next'),
        class: 'js-posts-loading',
        currentPage: 1,
        maxPages: $('.posts__pages').data('pages'),
        pathname: window.location.pathname.replace(/#(.*)$/g, '').replace('//g', '/'),
        isLoading: false
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      s.next.on('click', () => {
        s.next.addClass(s.class);
        this.fetchPosts();
      });
    },

    fetchPosts() {
      if (s.isLoading || s.currentPage === s.maxPages) {
        return;
      }

      s.isLoading = true;
      s.currentPage++;

      const nextPage = `${s.pathname}page/${s.currentPage}/`;

      $.ajax({
        url: nextPage,
        type: 'GET',
        success: response => {
          const parse = document.createRange().createContextualFragment(response);
          const posts = parse.querySelectorAll('.posts__post');

          if (posts.length) {
            setTimeout(() => {
              [].forEach.call(posts, post => {
                s.container.append(post);
                AOS.refreshHard();
              });

              s.next.removeClass(s.class);

              if (s.currentPage === s.maxPages) {
                s.next.addClass('posts__next--none').text('No More Articles');
              }
            }, 800);
          }
        },
        error: error => {
          console.error(error);
        }
      });

      s.isLoading = false;
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default InfiniteScroll;
