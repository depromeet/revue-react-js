import React from 'react';
import PropTypes from 'prop-types';

const ArticlePreviewLink = ({ url, title, description }) => (
  <a href={url} className="preview-link">
    <h1>{title}</h1>
    <p>{description}</p>
    <span>Read more...</span>
  </a>
);

ArticlePreviewLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ArticlePreviewLink;
