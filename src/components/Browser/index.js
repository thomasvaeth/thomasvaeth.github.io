import React from 'react';
import Img from 'gatsby-image';
import useAnimateOnScroll from '../../utils/useAnimateOnScroll';

import './index.scss';

function Browser({ image }) {
  useAnimateOnScroll();

  return (
    <div className="browser" data-aos="fade-in">
      <span className="browser__dots" />
      <div className="browser__img">
        <Img sizes={image} />
      </div>
    </div>
  );
}

export default Browser;
