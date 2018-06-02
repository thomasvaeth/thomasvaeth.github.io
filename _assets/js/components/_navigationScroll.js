// ----------------------------------------------
// Navigation Scroll
// ----------------------------------------------
const NavigationScroll = (() => {
  let s;

  return {
    settings() {
      return {
        headerHeight: $('.header').outerHeight(),
        lastScrollTop: 0,
        scrollDistance: $('.header').offset().top + $('.header').outerHeight(),
        body: $('body')
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      $(window).on('scroll', () => {
        this.scroll();
      });

      $(window).on('resize', () => {
        s.headerHeight = $('.header').outerHeight();
        s.scrollDistance = $('.header').offset().top + s.headerHeight;
        this.scroll();
      });
    },

    scroll() {
      const scrollTop = $(window).scrollTop();

      if (Math.abs(s.lastScrollTop - scrollTop) <= 15) {
        return;
      }

      if (scrollTop > s.lastScrollTop && scrollTop > s.headerHeight) {
        if (s.body.hasClass('js-scrolling-up')) {
          s.body.removeClass('js-scrolling-up').addClass('js-scrolling-down');
        }
      } else if (scrollTop + $(window).height() < $(document).height()) {
        s.body.removeClass('js-scrolling-down').addClass('js-scrolling-up');
      }

      if (scrollTop <= s.scrollDistance) {
        s.body.removeClass('js-scrolling-down js-scrolling-up');
      }

      s.lastScrollTop = scrollTop;
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default NavigationScroll;
