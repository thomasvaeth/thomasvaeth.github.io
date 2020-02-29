import React, { Fragment } from 'react';
import Mast from '../components/Mast';
import SEO from '../components/SEO';

import mastImage from '../images/work/art-by-elina/mast.jpg';

function ArtByElinaPage(props) {
  return (
    <Fragment>
      <SEO title="Art by Elina" />
      <Mast
        title="Art by Elina"
        backgroundImage={mastImage}
      />
    </Fragment>
  );
}

export default ArtByElinaPage;
