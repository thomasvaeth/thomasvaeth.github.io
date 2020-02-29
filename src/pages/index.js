import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import CTA from '../components/CTA';
import Intro from '../components/Intro';
import Posts from '../components/Posts';
import Projects from '../components/Projects';

function IndexPage(props) {
  const { site, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          projects {
            description
            image
            title
            video
          }
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt(pruneLength: 130, truncate: true)
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM YYYY")
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  const projects = site.siteMetadata.projects;
  const posts = allMarkdownRemark.edges;

  return (
    <Fragment>
      <Intro />
      <Projects projects={projects} />
      <Posts posts={posts} />
      <CTA />
    </Fragment>
  );
}

export default IndexPage;
