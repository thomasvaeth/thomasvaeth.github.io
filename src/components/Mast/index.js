import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Rellax from 'rellax';

import './index.scss';

function Mast(props) {
  const rellaxRef = useRef(null);

  useEffect(() => {
    const rellax = new Rellax(rellaxRef.current, {
      speed: -4,
    });
  }, []);

  return (
    <section className="mast bg-lightgrey rellax" ref={rellaxRef}>
      <div className="grid">
        <div className="mast__container">
          <h1 className="mast__title" itemProp="name headline">{props.title}</h1>
          {props.date && <time className="mast__date" dateTime="" itemProp="datePublished">{props.date}</time>}
        </div>
      </div>
    </section>
  );
}

Mast.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
};

Mast.defaultProps = {
  date: '',
};

export default Mast;
