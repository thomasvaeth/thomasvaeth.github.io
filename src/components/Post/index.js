import React from 'react';
import { Link } from 'gatsby';

import './index.scss';

function Post({ node }) {
  return (
    <article className="post" itemProp="blogPost" itemScope itemType="http://schema.org/BlogPosting">
      <Link className="post__link" to={node.fields.slug} itemProp="url" data-aos="slide-up">
        <div className="post__img">
          <div className="post__scale" data-aos="scale-down">
            <figure className="absolute-bg" style={{ backgroundImage: `url('${node.frontmatter.image.publicURL}')` }} />
          </div>
        </div>
        <header className="post__header">
          <h3 className="post__title" itemProp="name">
            <span data-aos="slice-up" data-aos-duration="400">{node.frontmatter.title}</span>
          </h3>
          <p className="post__text" data-aos="fade-in" data-aos-duration="400">
            <time dateTime="" itemProp="datePublished">{node.frontmatter.date}</time> – <span itemProp="description" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </p>
        </header>
      </Link>
    </article>
  );
}

export default Post;
