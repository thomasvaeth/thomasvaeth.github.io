import { useEffect, useState } from 'react';
import Rellax from 'rellax';

function useOpacityScroll(ref) {
  const [opacity, setOpacity] = useState(1);

  const opacityChange = () => {
    const scrollTop = window.pageYOffset;
    const height = ref.current ? ref.current.offsetHeight / 4 : 0;
    const opacity = 1 - (scrollTop - height) / scrollTop * 1.5;

    if (scrollTop >= height) {
      setOpacity(opacity > 0 ? opacity : 0);
    } else {
      setOpacity(1);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const rellax = new Rellax(ref.current, {
      speed: -4,
    });
  }, [ref]);

  useEffect(() => {
    window.addEventListener('scroll', opacityChange);
    window.addEventListener('resize', opacityChange);

    return () => {
      window.removeEventListener('scroll', opacityChange);
      window.removeEventListener('resize', opacityChange);
    };
  });

  return opacity;
}

export default useOpacityScroll;
