import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagElement from '../atoms/TagElement';

class TagList extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { tags } = this.props;
    return (
      <div className="col-md-3">
        <div className="sidebar">
          <p>Popular Tags</p>
          <div className="tag-list">
            {tags.map(value => {
              const { index, name } = value;
              return <TagElement key={index} name={name} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TagList;
