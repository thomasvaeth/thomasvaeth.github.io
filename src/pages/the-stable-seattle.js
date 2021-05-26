import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Project from '../templates/Project';
import Browser from '../components/Browser';
import Content from '../components/Content';

import mastImage from '../images/projects/the-stable-seattle/mast.jpg';

function TheStableSeattle({ data, path }) {
  let chrome, error, home, homeMast, reservationOne, reservationTwo;

  data.allFile.edges.forEach(image => {
    const node = image.node;

    // eslint-disable-next-line default-case
    switch (node.name) {
      case 'chrome':
        chrome = node.childImageSharp.gatsbyImageData;
        break;
      case 'error':
        error = node.childImageSharp.gatsbyImageData;
        break;
      case 'home':
        home = node.childImageSharp.gatsbyImageData;
        break;
      case 'home-mast':
        homeMast = node.childImageSharp.gatsbyImageData;
        break;
      case 'reservation-1':
        reservationOne = node.childImageSharp.gatsbyImageData;
        break;
      case 'reservation-2':
        reservationTwo = node.childImageSharp.gatsbyImageData;
        break;
    }
  });

  return (
    <Project
      title="The Stable Seattle"
      image={mastImage}
      pathname={path}
    >
      <Content header="Celebratory space">
        <p>
          The Stable needed a one-page website that showed off their event space and had the ability to take
          reservations. I developed them something on WordPress, while I working for Urban Influence, where I ripped out
          all the extra things they would never need, but still let them manage content and reservations from the CMS.
          Make sure to click the centaur in the corner to see a secret animation.
        </p>
      </Content>

      <div className="section-padding bg-lightgrey">
        <div className="grid">
          <Browser image={homeMast} />
        </div>
      </div>

      <div className="section-padding bg-the-stable">
        <div className="grid">
          <div className="project__double">
            <div>
              <Browser image={reservationOne} />
            </div>
            <div>
              <Browser image={reservationTwo} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="grid">
          <div className="project__double">
            <div>
              <Browser image={chrome} />
            </div>
            <div>
              <Browser image={error} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-the-stable">
        <div className="grid">
          <Browser image={home} />
        </div>
      </div>
    </Project>
  );
}

TheStableSeattle.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default TheStableSeattle;

export const projectQuery = graphql`
  query TheStableSeattleQuery {
    allFile(filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: {eq: "projects/the-stable-seattle"}
    }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
