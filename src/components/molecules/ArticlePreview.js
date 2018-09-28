import React from 'react';
import PropTypes from 'prop-types';
import {
  Anchor, Button, Header1, Paragraph, Span,
} from '../atoms';

const ArticlePreview = ({
  profileURL,
  imageSrc,
  authorURL,
  authorName,
  date,
  likeCount,
  articleURL,
  title,
  description,
}) => (
  <div className="article-preview">
    <div className="article-meta">
      <Anchor linkTo={profileURL}>
        <img src={imageSrc} alt="author profile" />
      </Anchor>
      <div className="info">
        <Anchor linkTo={authorURL} className="author">
          {authorName}
        </Anchor>
        <Span className="date">{date}</Span>
      </div>
      <Button
        className="btn btn-outline-primary btn-sm pull-xs-right"
        type="button"
      >
        <i className="ion-heart" />
        {` ${likeCount}`}
      </Button>
    </div>
    <Anchor linkTo={articleURL} className="preview-link">
      <Header1>{title}</Header1>
      <Paragraph>{description}</Paragraph>
      <Span>Read more...</Span>
    </Anchor>
  </div>
);

ArticlePreview.propTypes = {
  profileURL: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  authorURL: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  articleURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ArticlePreview;
