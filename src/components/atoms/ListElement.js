import React from 'react';
import PropTypes from 'prop-types';

const ListElement = ({ className, children }) => (
  <li className={className}>{children}</li>
);

ListElement.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

ListElement.defaultProps = {
  className: '',
};

export default ListElement;
