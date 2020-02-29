import React, { Fragment } from 'react';
import Mast from '../components/Mast';
import SEO from '../components/SEO';

import mastImage from '../images/work/sp-real-estate/mast.jpg';

function SPRealEstate(props) {
  return (
    <Fragment>
      <SEO title="S&P Real Estate" />
      <Mast
        title="S&P Real Estate"
        backgroundImage={mastImage}
      />
    </Fragment>
  );
}

export default SPRealEstate;
