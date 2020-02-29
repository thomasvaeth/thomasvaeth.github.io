import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Mast from '../../components/Mast';
import SEO from '../../components/SEO';

import './index.scss';

function Project({ title, description, pathname, image, video, children }) {
  return (
    <Fragment>
      <SEO
        title={title}
        description={description}
        image={image}
        pathname={pathname}
      />
        <article>
          <Mast
            title={title}
            backgroundImage={image}
            backgroundVideo={video}
          />
          <section className="project">
            {children}
          </section>
        </article>
    </Fragment>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  video: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Project.defaultProps = {
  description: '',
  video: null,
};

export default Project;
