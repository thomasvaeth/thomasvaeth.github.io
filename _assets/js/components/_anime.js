// ----------------------------------------------
// Imports
// ----------------------------------------------
import anime from 'animejs';

// ----------------------------------------------
// Anime
// ----------------------------------------------
const animeShowcase = () => {
  const hover = (e, figureScale, imgScale) => {
    const target = e.target;

    anime.remove(target);
    anime({
      targets: target.querySelector('.showcase__img'),
      scale: figureScale,
      easing: 'easeInOutQuart',
      duration: 300
    });
    anime({
      targets: target.querySelector('.showcase__img img'),
      scale: imgScale,
      easing: 'easeInOutQuart',
      duration: 300
    });
  };

  const enter = e => {
    hover(e, 0.97, 1.1);
  };

  const leave = e => {
    hover(e, 1, 1);
  };

  document.querySelectorAll('.showcase__link').forEach(link => {
    link.addEventListener('mouseenter', enter);
    link.addEventListener('mouseleave', leave);
  });
};


// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  animeShowcase
};
