var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

// Create instance of this class and render this class
var element = React.createElement(Dropdown, options);

// After render this class, place it into the body tag
React.render(element, document.querySelector('.target'));
