import React from 'react';
import PropTypes from 'prop-types';
import { Anchor } from '../atoms';

const TagList = ({ tags }) => (
  <div className="sidebar">
    <p>Popular Tags</p>

    <div className="tag-list">
      {tags.map(value => {
        const { index, name } = value;
        return (
          <Anchor key={index} className="tag-pill tag-default" linkTo="#">
            {name}
          </Anchor>
        );
      })}
    </div>
  </div>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TagList;
