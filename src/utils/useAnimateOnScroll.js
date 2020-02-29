import { useEffect } from 'react';
import AOS from 'aos';

function useAnimateOnScroll() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
    });
  }, []);
}

export default useAnimateOnScroll;
