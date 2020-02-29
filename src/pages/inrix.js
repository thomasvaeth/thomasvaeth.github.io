import React, { Fragment } from 'react';
import Mast from '../components/Mast';
import SEO from '../components/SEO';

import mastImage from '../images/work/inrix/mast.jpg';

function INRIXPage(props) {
  return (
    <Fragment>
      <SEO title="INRIX" />
      <Mast
        title="INRIX"
        backgroundImage={mastImage}
      />
    </Fragment>
  );
}

export default INRIXPage;
