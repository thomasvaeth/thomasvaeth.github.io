import React from 'react';
import Project from '../templates/Project';

import mastImage from '../images/projects/getty-images/mast.jpg';

function GettyImagesPage(props) {
  return (
    <Project
      title="Getty Images"
      image={mastImage}
    >
    </Project>
  );
}

export default GettyImagesPage;
