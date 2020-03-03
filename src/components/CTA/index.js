import React from 'react';
import ContextConsumer from '../../templates/Context';

import './index.scss';

function CTA() {
  return (
    <ContextConsumer>
      {({ link, transitionElement }) => {
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
      }}
    </ContextConsumer>
  );
}

export default CTA;
