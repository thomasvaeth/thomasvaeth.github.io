import React from 'react';
import PropTypes from 'prop-types';
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
      <Img fluid={image} />
    </div>
  );

  return (
    <div className="browser" data-aos="fade-in">
      <span className="browser__dots" />
      {media}
    </div>
  );
}

Browser.propTypes = {
  image: PropTypes.object,
  video: PropTypes.string,
};

Browser.defaultProp = {
  image: '',
  video: '',
};

export default Browser;
