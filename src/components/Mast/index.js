import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOpacityScroll from '../../utils/useOpacityScroll';

import './index.scss';

function Mast(props) {
  const mastRef = useRef(null);
  const opacity = useOpacityScroll(mastRef);

  return (
    <section className={`${props.className} bg-lightgrey rellax`} ref={mastRef}>
      <div className="grid">
        <div className="mast__container" style={{ opacity }}>
          <h1 className="mast__title" itemProp="name headline">{props.title}</h1>
          {props.date && <time className="mast__date" dateTime="" itemProp="datePublished">{props.date}</time>}
        </div>
      </div>
    </section>
  );
}

Mast.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
};

Mast.defaultProps = {
  className: 'mast',
  date: '',
};

export default Mast;
