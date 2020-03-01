import React from 'react';
import Img from 'gatsby-image';
import useAnimateOnScroll from '../../utils/useAnimateOnScroll';

import './index.scss';

function Browser({ image, video }) {
  useAnimateOnScroll();

  const media = video ? (
    <video autoPlay loop muted>
      <source type="video/mp4" src={video} />
    </video>
  ) : (
    <div className="browser__img">
      <Img sizes={image} />
    </div>
  );

  return (
    <div className="browser" data-aos="fade-in">
      <span className="browser__dots" />
      {media}
    </div>
  );
}

export default Browser;
