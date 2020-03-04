import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './index.scss';

function Instagram() {
  const { allInstaNode } = useStaticQuery(
    graphql`
      query {
        allInstaNode(sort: {order: DESC, fields: timestamp}) {
          edges {
            node {
              id
              localFile {
                publicURL
              }
            }
          }
        }
      }
    `
  );

  const images = allInstaNode.edges.map(node => {
    const { id, localFile } = node.node;

    if (!id || !localFile) return null;

    return (
      <article key={id}>
        <a
          className="instagram__link"
          href={`https://www.instagram.com/p/${id}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="absolute-bg scale-down" style={{ backgroundImage: `url('${localFile.publicURL}')` }} />
        </a>
      </article>
    );
  }).filter(Boolean);

  return (
    <div className="instagram">
      {images.length % 2 === 0 ? images : images.slice(0, -1)}
    </div>
  )
}

export default Instagram;
