import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Mast from '../../components/Mast';
import SEO from '../../components/SEO';

import './index.scss';

function Post(props) {
  const post = props.data.markdownRemark;

  return (
    <Fragment>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image.publicURL}
        pathname={post.fields.slug}
        article
      />
      <article itemProp="blogPost" itemScope itemType="http://schema.org/BlogPosting">
        <Mast title={post.frontmatter.title} date={post.frontmatter.date} />

        <section className="section-padding bg-white">
          <div className="grid-small">
            <div id="markdown" itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </section>
      </article>
    </Fragment>
  );
}

export default Post;

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM YYYY")
        image {
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`;
