import React, { Fragment } from 'react';
import Mast from '../components/Mast';
import SEO from '../components/SEO';

import mastImage from '../images/work/the-stable-seattle/mast.jpg';

function TheStableSeattle(props) {
  return (
    <Fragment>
      <SEO title="The Stable Seattle" />
      <Mast
        title="The Stable Seattle"
        backgroundImage={mastImage}
      />
    </Fragment>
  );
}

export default TheStableSeattle;
