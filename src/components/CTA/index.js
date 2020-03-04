import React, { useContext } from 'react';
import TransitionContext from '../../templates/Context';

import './index.scss';

function CTA() {
  const { link, transitionElement } = useContext(TransitionContext);
  const TransitionLink = link;

  return (
    <section className="cta bg-black">
      <TransitionLink
        className="cta__link"
        to="/contact"
        transitionElement={transitionElement}
      >
        <span className="cta__text">Let’s talk</span>
      </TransitionLink>
    </section>
  );
}

export default CTA;
