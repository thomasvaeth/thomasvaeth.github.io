import React from 'react';
import Project from '../templates/Project';

import mastImage from '../images/work/ink-volt/mast.jpg';
import mastVideo from '../images/work/ink-volt/mast.mp4';

function InkVoltPage(props) {
  return (
    <Project
      title="Ink+Volt"
      image={mastImage}
      video={mastVideo}
    >
    </Project>
  );
}

export default InkVoltPage;
