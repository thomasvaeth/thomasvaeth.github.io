// ----------------------------------------------
// Opacity Scroll
// ----------------------------------------------
const OpacityScroll = (() => {
  let s;

  return {
    settings() {
      return {
        quarterMastHeight: $('.intro, .mast, .mast--media').outerHeight() / 4
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
        s.quarterMastHeight = $('.intro, .mast, .mast--media').outerHeight() / 4;
        this.opacityScroll();
      });
    },

    opacityScroll() {
      const scrollTop = $(window).scrollTop();
      const opacity = 1 - (scrollTop - s.quarterMastHeight) / scrollTop * 1.5;

      console.log(opacity);

      if (scrollTop >= s.quarterMastHeight) {
        $('.intro__text, .mast__container').css('opacity', opacity > 0 ? opacity : 0);
      } else {
        $('.intro__text, .mast__container').css('opacity', 1);
      }
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default OpacityScroll;
