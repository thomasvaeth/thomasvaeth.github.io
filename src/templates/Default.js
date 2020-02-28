// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// import Transition from '../components/Transition';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/fonts.scss';
import '../styles/app.scss';

function DefaultLayout({ children, location }) {
  return (
    <Fragment>
      <SEO />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
