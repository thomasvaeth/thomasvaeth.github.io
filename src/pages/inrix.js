import React from 'react';
import { graphql } from 'gatsby';
import Project from '../templates/Project';
import Browser from '../components/Browser';
import Content from '../components/Content';

import mastImage from '../images/projects/inrix/mast.jpg';

function INRIXPage({ data, path }) {
  let blog, careers, home, homeMast, industry, report, reportMast, scorecard;

  data.allFile.edges.forEach(image => {
    const node = image.node;

    // eslint-disable-next-line default-case
    switch (node.name) {
      case 'blog':
        blog = node.childImageSharp.fluid;
        break;
      case 'careers':
        careers = node.childImageSharp.fluid;
        break;
      case 'home':
        home = node.childImageSharp.fluid;
        break;
      case 'home-mast':
        homeMast = node.childImageSharp.fluid;
        break;
      case 'industry':
        industry = node.childImageSharp.fluid;
        break;
      case 'report':
        report = node.childImageSharp.fluid;
        break;
      case 'report-mast':
        reportMast = node.childImageSharp.fluid;
        break;
      case 'scorecard':
        scorecard = node.childImageSharp.fluid;
        break;
    }
  });

  return (
    <Project
      title="INRIX"
      image={mastImage}
      pathname={path}
    >
      <Content header="Analytics for driving, parking, and traffic">
        <p>The new INRIX website was a large-scale WordPress build. The company offers a large set of products and solutions, so a CMS to handle all the content creation was very important.</p>
        <p>In addition to their marketing website and CMS, a separate project was built to visualize their traffic data on 1,064 cities in 38 countries. A SPA-style dashboard of city ranking stats was the result after collaborating with their in-house data scientists.</p>
        <p>
          The INRIX website was done at Urban Influence and has received recognition from <a href="https://www.awwwards.com/sites/inrix" target="_blank" rel="noopener noreferrer">Awwwards</a> and <a href="https://www.cssdesignawards.com/sites/inrix/30488/" target="_blank" rel="noopener noreferrer">CSS Design Awards</a>.
          The Global Traffic Scorecards received a lot of high profile attention, including articles on <a href="https://www.wired.com/2017/02/love-driving-hellish-traffic-visit-cities/" target="_blank" rel="noopener noreferrer">WIRED</a>, <a href="https://www.geekwire.com/2017/think-seattle-worlds-worst-traffic-not-even-close-says-new-study/" target="_blank" rel="noopener noreferrer">GeekWire</a>, <a href="https://www.seattletimes.com/seattle-news/transportation/seattle-is-a-world-class-city-for-traffic-congestion/" target="_blank" rel="noopener noreferrer">The Seattle Times</a>, <a href="https://www.washingtonpost.com/news/dr-gridlock/wp/2017/02/21/d-c-area-lags-in-new-survey-of-global-traffic-congestion/?noredirect=on&utm_term=.afe95a5d838f" target="_blank" rel="noopener noreferrer">The Washington Post</a>, <a href="http://www.phillyvoice.com/traffic-scorecard-ranks-philadelphia-as-one-of-most-congested-cities-in-the-us-/" target="_blank" rel="noopener noreferrer">PhillyVoice</a>, and <a href="http://www.foxnews.com/auto/2017/02/20/traffic-study-ranks-los-angeles-as-worlds-most-clogged-city.html" target="_blank" rel="noopener noreferrer">Fox News</a>.
        </p>
      </Content>

      <div className="section-padding bg-inrix--alpha">
        <div className="grid">
          <Browser image={homeMast} />
        </div>
      </div>

      <div className="section-padding bg-lightgrey">
        <div className="grid">
          <div className="project__double">
            <div>
              <Browser image={home} />
            </div>
            <div>
              <Browser image={industry} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-inrix--beta">
        <div className="grid">
          <div className="project__double">
            <div>
              <Browser image={blog} />
            </div>
            <div>
              <Browser image={careers} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-inrix--gamma">
        <div className="grid">
          <Browser image={reportMast} />
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="grid">
          <div className="project__double">
            <div>
              <Browser image={scorecard} />
            </div>
            <div>
              <Browser image={report} />
            </div>
          </div>
        </div>
      </div>
    </Project>
  );
}

export default INRIXPage;

export const projectQuery = graphql`
  query INRIXQuery {
    allFile(filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: {eq: "projects/inrix"}
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
