import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, type, children }) => (
  <button className={className} type={type}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  children: PropTypes.element.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
