import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuthorProfile from '../atoms/AuthorProfile';
import ArticleAuthorLink from '../atoms/ArticleAuthorLink';
import ArticleDate from '../atoms/ArticleDate';
import LikeButton from '../atoms/LikeButton';

class ArticleMetaData extends Component {
  static propTypes = {
    authorURL: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    profileURL: PropTypes.string.isRequired,
  };

  render() {
    const {
      authorName,
      authorURL,
      date,
      imageSource,
      likeCount,
      profileURL,
    } = this.props;

    return (
      <div className="article-meta">
        <AuthorProfile url={profileURL} imageSource={imageSource} />
        <div className="info">
          <ArticleAuthorLink url={authorURL} name={authorName} />
          <ArticleDate date={date} />
        </div>
        <LikeButton likeCount={likeCount} />
      </div>
    );
  }
}

export default ArticleMetaData;
