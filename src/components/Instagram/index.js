import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './index.scss';

function Instagram(props) {
  const { allInstaNode } = useStaticQuery(
    graphql`
      query {
        allInstaNode(sort: {order: DESC, fields: timestamp}) {
          edges {
            node {
              id
              localFile {
                childImageSharp {
                  fixed(width: 494, height: 494) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return allInstaNode.edges.map(node => {
    const { id, localFile } = node.node;

    return (
      <article className="instagram" key={id}>
        <a className="instagram__link" href={`https://www.instagram.com/p/${id}/`} target="_blank">
          <figure className="absolute-bg scale-down" style={{ backgroundImage: `url('${localFile.childImageSharp.fixed.src}')` }} />
        </a>
      </article>
    );
  });
}

export default Instagram;
