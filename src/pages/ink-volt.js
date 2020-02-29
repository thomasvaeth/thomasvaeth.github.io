import React, { Fragment } from 'react';
import Mast from '../components/Mast';
import SEO from '../components/SEO';

import mastVideo from '../images/work/ink-volt/mast.mp4';

function InkVoltPage(props) {
  return (
    <Fragment>
      <SEO title="Ink+Volt" />
      <Mast
        title="Ink+Volt"
        backgroundVideo={mastVideo}
      />
    </Fragment>
  );
}

export default InkVoltPage;
