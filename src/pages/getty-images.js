import React, { Fragment } from 'react';
import Mast from '../components/Mast';
import SEO from '../components/SEO';

import mastImage from '../images/work/getty-images/mast.jpg';

function GettyImagesPage(props) {
  return (
    <Fragment>
      <SEO title="Getty Images" />
      <Mast
        title="Getty Images"
        backgroundImage={mastImage}
      />
    </Fragment>
  );
}

export default GettyImagesPage;
