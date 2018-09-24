import React from 'react';
import PropTypes from 'prop-types';

const FeedItem = ({ name }) => (
  <li className="nav-item">
    <a className="nav-link disabled" href="/">
      {name}
    </a>
  </li>
);

FeedItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FeedItem;
