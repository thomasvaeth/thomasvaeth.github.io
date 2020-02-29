import React from 'react';
import PropTypes from 'prop-types';
import useAnimateOnScroll from '../../utils/useAnimateOnScroll';

import './index.scss';

function Content({ header, children }) {
  useAnimateOnScroll();

  return (
    <div className="content section-padding--double bg-white">
      <div className="grid-small">
        <h2>
          <span data-aos="slice-up" data-aos-duration="400">{header}</span>
        </h2>
        <div data-aos="fade-in" data-aos-duration="400" data-aos-delay="100">
          {children}
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Content;
