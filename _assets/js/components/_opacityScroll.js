// ----------------------------------------------
// Opacity Scroll
// ----------------------------------------------
const OpacityScroll = (() => {
  let s;

  return {
    settings() {
      return {
        halfMastHeight: $('.intro, .mast, .mast--media').outerHeight() / 2
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      $(window).on('scroll', () => {
        this.opacityScroll();
      });

      $(window).on('resize', () => {
        s.halfmastHeight = $('.intro, .mast, .mast--media').outerHeight() / 2;
        this.opacityScroll();
      });
    },

    opacityScroll() {
      const scrollTop = $(window).scrollTop();
      const opacity = 1 - (scrollTop - s.halfMastHeight) / scrollTop * 2;

      if (scrollTop >= s.halfMastHeight) {
        $('.intro__text, .mast__title').css('opacity', opacity > 0 ? opacity : 0);
      } else {
        $('.intro__text, .mast__title').css('opacity', 1);
      }
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default OpacityScroll;
