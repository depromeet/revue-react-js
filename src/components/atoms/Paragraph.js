import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ className, children }) => (
  <p className={className}>{children}</p>
);

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Paragraph.defaultProps = {
  className: '',
};

export default Paragraph;
