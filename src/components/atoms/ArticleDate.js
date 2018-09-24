import React from 'react';
import PropTypes from 'prop-types';

const ArticleDate = ({ date }) => <span className="date">{date}</span>;

ArticleDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ArticleDate;
