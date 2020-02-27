// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// import Transition from '../components/Transition';
import SEO from '../components/SEO';
// import Header from '../components/Header/Header';
// import Footer from '../components/Footer/Footer';

import '../styles/fonts.scss';
import '../styles/app.scss';

function DefaultLayout({ children, location }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <SEO />
      <main>
        {children}
      </main>
    </Fragment>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
