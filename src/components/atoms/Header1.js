import React from 'react';
import PropTypes from 'prop-types';

const Header1 = ({ className, children }) => (
  <h1 className={className}>{children}</h1>
);

Header1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Header1.defaultProps = {
  className: '',
};

export default Header1;
