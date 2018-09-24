import React from 'react';
import FeedItem from '../atoms/FeedItem';

const FeedToggle = () => (
  <div className="feed-toggle">
    <ul className="nav nav-pills outline-active">
      <FeedItem name="Your Feed" />
      <FeedItem name="Global Feed" />
    </ul>
  </div>
);

export default FeedToggle;
