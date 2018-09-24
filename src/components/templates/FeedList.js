import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedToggle from '../molecules/FeedToggle';
import ArticlePreview from '../organisms/ArticlePreview';

class FeedList extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { articles } = this.props;
    return (
      <div className="col-md-9">
        <FeedToggle />
        {articles.map(({ index, articleURL, ...value }) => (
          <ArticlePreview key={index} articleURL={articleURL} {...value} />
        ))}
      </div>
    );
  }
}

export default FeedList;
