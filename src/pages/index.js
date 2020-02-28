import React, { Fragment, useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AOS from 'aos';
import CTA from '../components/CTA';
import Intro from '../components/Intro';
import Posts from '../components/Posts';

function IndexPage(props) {
  const [postsLoaded, setPostsLoaded] = useState(3);

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true
    });
  }, []);

  const posts = allMarkdownRemark.edges;

  const onClick = () => {
    setPostsLoaded(postsLoaded + 3);
  };

  return (
    <Fragment>
      <Intro />
      <Posts
        posts={posts.slice(0, postsLoaded)}
        onClick={onClick}
        loadMore={postsLoaded < posts.length}
      />
      <CTA />
    </Fragment>
  );
}

export default IndexPage;
