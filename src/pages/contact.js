import React, { Fragment } from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

function ContactPage() {
  return (
    <Fragment>
      <SEO
        title="Contact"
        pathname="/contact"
      />
      <Contact />
    </Fragment>
  );
}

export default ContactPage;
