import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOpacityScroll from '../../utils/useOpacityScroll';

import './index.scss';

function Mast(props) {
  const mastRef = useRef(null);
  const opacity = useOpacityScroll(mastRef);

  const classNames = props.backgroundImage || props.backgroundVideo ? 'mast--media bg-black' : 'mast bg-lightgrey';

  let media = null;
  if (props.backgroundVideo) {
    media = (
      <div className="absolute-vid">
        <video autoPlay loop muted>
          <source type="video/mp4" src={props.backgroundVideo} />
        </video>
      </div>
    );
  } else if (props.backgroundImage) {
    media = <figure className="absolute-bg" style={{ backgroundImage: `url('${props.backgroundImage}')` }} />;
  }

  return (
    <section className={`${classNames} rellax`} ref={mastRef}>
      {media}
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
  backgroundImage: PropTypes.string,
  backgroundVideo: PropTypes.string,
};

Mast.defaultProps = {
  date: '',
  backgroundImage: null,
  backgroundVideo: null,
};

export default Mast;
