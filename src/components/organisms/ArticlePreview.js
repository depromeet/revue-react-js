import React, { Component } from 'react';
import ArticleMetaData from '../molecules/ArticleMetaData';
import ArticlePreviewLink from '../atoms/ArticlePreviewLink';

class ArticlePreview extends Component {
  render() {
    const {
      articleURL, title, description, ...metadata
    } = this.props;

    return (
      <div className="article-preview">
        <ArticleMetaData {...metadata} />
        <ArticlePreviewLink
          url={articleURL}
          title={title}
          description={description}
        />
      </div>
    );
  }
}

export default ArticlePreview;
