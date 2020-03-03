import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Project from '../templates/Project';
import Browser from '../components/Browser';
import Content from '../components/Content';

import mastImage from '../images/projects/getty-images/mast.jpg';

function GettyImagesPage({ data, path }) {
  let details, home, homeJapan, homepageOne, homepageTwo, mosaic;

  data.allFile.edges.forEach(image => {
    const node = image.node;

    // eslint-disable-next-line default-case
    switch (node.name) {
      case 'details-filter':
        details = node.childImageSharp.fluid;
        break;
      case 'home':
        home = node.childImageSharp.fluid;
        break;
      case 'home-jp':
        homeJapan = node.childImageSharp.fluid;
        break;
      case 'homepage-1':
        homepageOne = node.childImageSharp.fluid;
        break;
      case 'homepage-2':
        homepageTwo = node.childImageSharp.fluid;
        break;
      case 'mosaic-filter':
        mosaic = node.childImageSharp.fluid;
        break;
    }
  });

  return (
    <Project
      title="Getty Images"
      image={mastImage}
      pathname={path}
    >
      <Content header="Moving the world with images">
        <p>The new Getty Images website was a complete redesign of an already established brand. There was a concerted effort to focus on building and growing the creative visual media side of the company. The redesign was split between several developers on different teams, but I was able bring new practices and techniques to <Link to="/2018/10/getty-images-homepage/">the homepage</Link> and the search results page.</p>
      </Content>

      <div className="section-padding bg-getty-images--alpha">
        <div className="grid">
          <Browser image={homepageOne} />
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="grid">
          <div className="project__double">
            <div>
              <Browser image={mosaic} />
            </div>
            <div>
              <Browser image={details} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-getty-images--beta">
        <div className="grid">
          <Browser image={homepageTwo} />
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="grid">
          <div className="project__double">
            <div>
              <Browser image={home} />
            </div>
            <div>
              <Browser image={homeJapan} />
            </div>
          </div>
        </div>
      </div>
    </Project>
  );
}

GettyImagesPage.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default GettyImagesPage;

export const projectQuery = graphql`
  query GettyImagesQuery {
    allFile(filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: {eq: "projects/getty-images"}
    }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
