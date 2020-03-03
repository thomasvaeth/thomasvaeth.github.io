import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useAnimateOnScroll from '../../utils/useAnimateOnScroll';
import Post from '../Post';

import './index.scss';

function Posts({ posts }) {
  const [postsLoaded, setPostsLoaded] = useState(3);
  useAnimateOnScroll();

  const onClick = () => {
    setPostsLoaded(postsLoaded + 3);
  };

  const displayedPosts = posts.slice(0, postsLoaded).map(({ node }) => <Post node={node} key={node.fields.slug} />);
  const loadMore = postsLoaded < posts.length ?
    <span
      className="posts__next"
      onClick={onClick}
      onKeyPress={onClick}
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
          {displayedPosts}
        </div>
        <div className="posts__pagination">
          {loadMore}
        </div>
      </div>
    </section>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
