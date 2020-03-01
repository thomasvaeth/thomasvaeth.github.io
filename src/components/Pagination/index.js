import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import slugify from '../../utils/slugify';

import './index.scss';

function Pagination({ current }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          projects {
            title
          }
        }
      }
    }
  `);

  const projects = site.siteMetadata.projects;
  let previous, next;
  const index = projects.findIndex(obj => obj.title === current);

  const Paginate = ({ idx }) => {
    const title = projects[idx].title;
    const slug = `/${slugify(title)}/`;

    return (
      <Link className="pagination__link section-padding" to={slug}>
        <span className="pagination__text">{title}</span>
      </Link>
    );
  };

  if (index === 0) {
    previous = <Paginate idx={projects.length - 1} />;
    next = <Paginate idx={index + 1} />;
  } else if (index === projects.length - 1) {
    previous = <Paginate idx={index - 1} />;
    next = <Paginate idx={0} />;
  } else {
    previous = <Paginate idx={index - 1} />;
    next = <Paginate idx={index + 1} />;
  }

  return (
    <div className="pagination">
      {previous}
      {next}
    </div>
  );
}

Pagination.propTypes = {
  current: PropTypes.string.isRequired,
};

export default Pagination;
