import React from 'react';
import { Anchor, ListElement } from '../atoms';

const FeedToggle = () => (
  <ul className="nav nav-pills outline-active">
    <ListElement className="nav-item">
      <Anchor className="nav-link disabled" linkTo="">
        Your Feed
      </Anchor>
    </ListElement>
    <ListElement className="nav-item">
      <Anchor className="nav-link active" linkTo="">
        Global Feed
      </Anchor>
    </ListElement>
  </ul>
);

export default FeedToggle;
