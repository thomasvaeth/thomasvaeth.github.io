import React, { Fragment } from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

function ContactPage({ path }) {
  return (
    <Fragment>
      <SEO
        title="Contact"
        pathname={path}
      />
      <Contact />
    </Fragment>
  );
}

export default ContactPage;
