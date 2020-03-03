import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Project from '../templates/Project';
import Browser from '../components/Browser';
import Content from '../components/Content';

import mastImage from '../images/projects/ink-volt/mast.jpg';
import mastVideo from '../images/projects/ink-volt/mast.mp4';

function InkVoltPage({ data, path }) {
  let blog, home, shop, shopSingleOne, shopSingleTwo;

  data.allFile.edges.forEach(image => {
    const node = image.node;

    // eslint-disable-next-line default-case
    switch (node.name) {
      case 'blog':
        blog = node.childImageSharp.fluid;
        break;
      case 'home':
        home = node.childImageSharp.fluid;
        break;
      case 'shop':
        shop = node.childImageSharp.fluid;
        break;
      case 'shop-single-1':
        shopSingleOne = node.childImageSharp.fluid;
        break;
      case 'shop-single-2':
        shopSingleTwo = node.childImageSharp.fluid;
        break;
    }
  });

  return (
    <Project
      title="Ink+Volt"
      image={mastImage}
      video={mastVideo}
      pathname={path}
    >
      <Content header="Notebooks and planners">
        <p>Kate Matsudaira's product line of notebooks and planners needed somewhere to grow after her successful Kickstart campaigns. She needed an e-commerce website to sell products  year-round, so a clean and minimal storefront was built on WordPress and WooCommerce. Development focused on components that could be reused as the brand continued to grow.</p>
        <p>The Ink+Volt website has received recognition from <a href="https://www.cssdesignawards.com/sites/ink-volt/29013/" target="_blank" rel="noopener noreferrer">CSS Design Awards</a> and <a href="https://www.thebestdesigns.com/designs/ink-volt" target="_blank" rel="noopener noreferrer">The Best Designs</a>.</p>
      </Content>

      <div className="section-padding bg-lightgrey">
        <div className="grid">
          <Browser image={home} />
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="grid">
          <Browser image={shop} />
        </div>
      </div>

      <div className="section-padding bg-lightgrey">
        <div className="grid">
          <div className="project__double">
            <div>
              <Browser image={shopSingleOne} />
            </div>
            <div>
              <Browser image={shopSingleTwo} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="grid">
          <Browser image={blog} />
        </div>
      </div>
    </Project>
  );
}

InkVoltPage.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default InkVoltPage;

export const projectQuery = graphql`
  query InkVoltQuery {
    allFile(filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: {eq: "projects/ink-volt"}
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
