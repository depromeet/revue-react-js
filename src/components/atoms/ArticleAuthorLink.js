import React from 'react';
import PropTypes from 'prop-types';

const ArticleAuthorLink = ({ url, name }) => (
  <a href={url} className="author">
    {name}
  </a>
);

ArticleAuthorLink.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ArticleAuthorLink;
