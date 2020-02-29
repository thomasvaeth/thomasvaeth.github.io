import React from 'react';
import { Link } from 'gatsby';

import './index.scss';

function CTA() {
  return (
    <section className="cta bg-black">
      <Link className="cta__link" to="/contact">
        <span className="cta__text">Let’s talk</span>
      </Link>
    </section>
  );
}

export default CTA;
