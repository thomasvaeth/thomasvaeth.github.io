import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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

ContactPage.propTypes = {
  path: PropTypes.string.isRequired,
};

export default ContactPage;
