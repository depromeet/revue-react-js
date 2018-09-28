import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ArticlePreview, FeedToggle } from '../molecules';

const FeedList = ({ feeds }) => (
  <Fragment>
    <div className="feed-toggle">
      <FeedToggle />
    </div>
    <div>
      {feeds.map(value => {
        const { index, ...metadata } = value;
        return <ArticlePreview key={index} {...metadata} />;
      })}
    </div>
  </Fragment>
);

FeedList.propTypes = {
  feeds: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      authorURL: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      likeCount: PropTypes.number.isRequired,
      profileURL: PropTypes.string.isRequired,
      articleURL: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FeedList;
