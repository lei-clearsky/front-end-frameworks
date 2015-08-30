var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [
    {
      title: 'See Tutorials',
      number: 32,
      header: 'React',
      description: 'React is fantastic new library for making fast, dynamic pages. React is fantastic new library for making fast, dynamic pages.',
      imageUrl: 'http://formatjs.io/img/react.svg'
    },
    {
      title: 'See Tutorials',
      number: 12,
      header: 'Gulp',
      description: 'Gulp will speed up our development work flow. Gulp will speed up our development work flow.',
      imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
    }
  ]
};

// Create instance of this class and render this class
var element = React.createElement(ThumbnailList, options);

// After render this class, place it into the body tag
React.render(element, document.querySelector('.target'));