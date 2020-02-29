import React, { useRef } from 'react';
import useOpacityScroll from '../../utils/useOpacityScroll';

import './index.scss';

function Intro() {
  const introRef = useRef(null);
  const opacity = useOpacityScroll(introRef);

  return (
    <section className="intro bg-white rellax" ref={introRef}>
      <div className="grid">
        <div>
          <h1 className="intro__text" style={{ opacity }}>Hi, I’m Thomas. A front-end developer based in Seattle.</h1>
        </div>
      </div>
    </section>
  );
}

export default Intro;
