import React, { Component } from 'react';
import { HomeLayout } from '../templates';
// TODO Add redux integration further on

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <HomeLayout />
      </div>
    );
  }
}
