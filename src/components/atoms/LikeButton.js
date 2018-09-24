import React from 'react';
import PropTypes from 'prop-types';

const LikeButton = ({ likeCount }) => (
  <button
    type="button"
    className="btn btn-outline-primary btn-sm pull-xs-right"
  >
    <i className="ion-heart" />
    {` ${likeCount}`}
  </button>
);

LikeButton.propTypes = {
  likeCount: PropTypes.number.isRequired,
};

export default LikeButton;
