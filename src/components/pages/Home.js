import React, { Component } from 'react';
import Banner from '../organisms/Banner';
import FeedList from '../templates/FeedList';
import TagList from '../templates/TagList';

const tags = [
  { name: 'javascript', index: 0 },
  { name: 'emberjs', index: 1 },
  { name: 'angularjs', index: 2 },
  { name: 'react', index: 3 },
  { name: 'mean', index: 4 },
  { name: 'node', index: 5 },
  { name: 'rails', index: 6 },
];

const articles = [
  {
    index: 0,
    authorURL: '/',
    authorName: 'Eric Simons',
    date: 'January 20th',
    imageSource: 'http://i.imgur.com/Qr71crq.jpg',
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
    imageSource: 'http://i.imgur.com/N4VcUeJ.jpg',
    likeCount: 32,
    profileURL: 'profile.html',
    articleURL: '/',
    title: "The song you won't ever stop singing.No matter how hard you try.",
    description: 'This is the description for the post.',
  },
];

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Banner />
        <div className="container page">
          <div className="row">
            <FeedList articles={articles} />
            <TagList tags={tags} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
