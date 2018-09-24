import React from 'react';
import PropTypes from 'prop-types';

const TagElement = ({ name }) => (
  <a href="/" className="tag-pill tag-default">
    {name}
  </a>
);

TagElement.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TagElement;
