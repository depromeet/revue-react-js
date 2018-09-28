import React from 'react';
import PropTypes from 'prop-types';

const Span = ({ className, children }) => (
  <span className={className}>{children}</span>
);

Span.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Span.defaultProps = {
  className: '',
};

export default Span;
