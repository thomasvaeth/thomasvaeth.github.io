import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Project from '../templates/Project';
import Browser from '../components/Browser';
import Content from '../components/Content';

import mastImage from '../images/projects/sp-real-estate/mast.jpg';

function SPRealEstate({ data, path }) {
  let approach, homeMast, map, news, portfolio, portfolioSingleOne, portfolioSingleTwo, worldHousing;

  data.allFile.edges.forEach(image => {
    const node = image.node;

    // eslint-disable-next-line default-case
    switch (node.name) {
      case 'approach':
        approach = node.childImageSharp.gatsbyImageData;
        break;
      case 'home-mast':
        homeMast = node.childImageSharp.gatsbyImageData;
        break;
      case 'map':
        map = node.publicURL;
        break;
      case 'news':
        news = node.publicURL;
        break;
      case 'portfolio':
        portfolio = node.childImageSharp.gatsbyImageData;
        break;
      case 'portfolio-single-1':
        portfolioSingleOne = node.childImageSharp.gatsbyImageData;
        break;
      case 'portfolio-single-2':
        portfolioSingleTwo = node.childImageSharp.gatsbyImageData;
        break;
      case 'world-housing':
        worldHousing = node.childImageSharp.gatsbyImageData;
        break;
    }
  });

  const awwwardsLink = (
    <a
      href="https://www.awwwards.com/sites/s-p-real-estate-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      Awwwards
    </a>
  );

  const cssDesignAwardsLink = (
    <a
      href="https://www.cssdesignawards.com/sites/s-p-real-estate/31111/"
      target="_blank"
      rel="noopener noreferrer"
    >
      CSS Design Awards
    </a>
  );

  return (
    <Project
      title="S&amp;P Real Estate"
      image={mastImage}
      pathname={path}
    >
      <Content header="“Super prime” real estate">
        <p>
          S&amp;P is an international real estate boutique specializing in the design, marketing, and sale of luxury and
          "super prime" real estate and the website needed to reflect the properties in their portfolio. The WordPress
          website does that through its reserved color palette, animations and interactions, and architectural imagery.
          The CMS uses drag and drop modules, so they can continue following these patterns with no guidance from
          designers or developers.
        </p>
        <p>
          The S&amp;P website was done at Urban Influence and has received recognition from {awwwardsLink} and {cssDesignAwardsLink}.
        </p>
      </Content>

      <div className="section-padding bg-lightgrey">
        <div className="grid">
          <Browser image={homeMast} />
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="grid">
          <Browser image={portfolio} />
        </div>
      </div>

      <div className="section-padding bg-lightgrey">
        <div className="grid">
          <div className="project__double">
            <div>
              <Browser image={portfolioSingleOne} />
            </div>
            <div>
              <Browser image={portfolioSingleTwo} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-black">
        <div className="grid">
          <Browser video={news} />
        </div>
      </div>

      <div className="section-padding bg-lightgrey">
        <div className="grid">
          <div className="project__double">
            <div>
              <Browser image={approach} />
            </div>
            <div>
              <Browser image={worldHousing} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="grid">
          <Browser video={map} />
        </div>
      </div>
    </Project>
  );
}

SPRealEstate.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default SPRealEstate;

export const projectQuery = graphql`
  query SPRealEstateQuery {
    allFile(filter: {
        extension: { regex: "/(jpg)|(mp4)/" }
        relativeDirectory: {eq: "projects/sp-real-estate"}
    }) {
      edges {
        node {
          name
          publicURL
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
