import React, { Component, Fragment } from 'react';
import { Banner, FeedList, TagList } from '../organisms';

const articles = [
  {
    index: 0,
    authorURL: '/',
    authorName: 'Eric Simons',
    date: 'January 20th',
    imageSrc: 'http://i.imgur.com/Qr71crq.jpg',
    likeCount: 29,
    profileURL: 'profile.html',
    articleURL: '/',
    title: 'How to build webapps that scale',
    description: 'This is the description for the post.',
  },
  {
    index: 1,
    authorURL: '/',
    authorName: 'Albert Pai',
    date: 'January 20th',
    imageSrc: 'http://i.imgur.com/N4VcUeJ.jpg',
    likeCount: 32,
    profileURL: 'profile.html',
    articleURL: '/',
    title: "The song you won't ever stop singing.No matter how hard you try.",
    description: 'This is the description for the post.',
  },
];

const tags = [
  { name: 'javascript', index: 0 },
  { name: 'emberjs', index: 1 },
  { name: 'angularjs', index: 2 },
  { name: 'react', index: 3 },
  { name: 'mean', index: 4 },
  { name: 'node', index: 5 },
  { name: 'rails', index: 6 },
];

class HomeLayout extends Component {
  render() {
    return (
      <Fragment>
        <div className="banner">
          <Banner />
        </div>
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedList feeds={articles} />
            </div>
            <div className="col-md-3">
              <TagList tags={tags} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeLayout;
