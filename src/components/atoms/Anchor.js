import React from 'react';
import PropTypes from 'prop-types';

const Anchor = ({ className, linkTo, children }) => (
  <a className={className} href={linkTo}>
    {children}
  </a>
);

Anchor.propTypes = {
  className: PropTypes.string,
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

Anchor.defaultProps = {
  className: '',
};

export default Anchor;
