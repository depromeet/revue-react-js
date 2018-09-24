import React from 'react';
import PropTypes from 'prop-types';

const AuthorProfile = ({ url, imageSource }) => (
  <a href={url}>
    <img src={imageSource} alt="Author profile" />
  </a>
);

AuthorProfile.propTypes = {
  url: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default AuthorProfile;
