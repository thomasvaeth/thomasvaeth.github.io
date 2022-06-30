import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './index.scss';

function Instagram() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          instagram {
            id
            image
          }
        }
      }
    }
  `);

  const images = site.siteMetadata.instagram.map(({ id, image }) => (
    <article key={id}>
      <a
        className="instagram__link"
        href={`https://www.instagram.com/p/${id}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure className="absolute-bg scale-down" style={{ backgroundImage: `url('${image}')` }} />
      </a>
    </article>
  )).filter(Boolean).slice(0, 12);

  return (
    <div className="instagram">
      {images.length % 2 === 0 ? images : images.slice(0, -1)}
    </div>
  )
}

export default Instagram;
