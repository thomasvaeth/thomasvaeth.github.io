import React from 'react';
import useAnimateOnScroll from '../../utils/useAnimateOnScroll';
import Post from '../Post';

import './index.scss';

function Posts(props) {
  useAnimateOnScroll();

  const posts = props.posts.map(({ node }) => <Post node={node} key={node.fields.slug} />);
  const loadMore = props.loadMore ?
    <span
      className="posts__next"
      onClick={props.onClick}
      onKeyPress={props.onClick}
      role="button"
      tabIndex="0"
    >
      Load More Articles
    </span> :
    <span className="posts__next posts__next--none">No More Articles</span>
  ;

  return (
    <section id="articles" className="posts section-padding bg-white">
      <div className="grid">
        <h2 className="posts__title">
          <span data-aos="slice-up" data-aos-duration="400">Recent</span> <span data-aos="slice-up" data-aos-duration="400" data-aos-delay="100">articles</span>
        </h2>
        <div className="posts__container" itemScope itemType="http://schema.org/Blog">

          {posts}

        </div>

        <div className="posts__pagination">
          {loadMore}
        </div>

      </div>
    </section>
  );
}

export default Posts;
