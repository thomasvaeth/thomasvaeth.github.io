import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// import Transition from '../components/Transition';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/fonts.scss';
import '../styles/app.scss';

function DefaultLayout({ location, children }) {
  return (
    <Fragment>
      <SEO />
      <Header pathname={location.pathname} />
      <main>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}

DefaultLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
