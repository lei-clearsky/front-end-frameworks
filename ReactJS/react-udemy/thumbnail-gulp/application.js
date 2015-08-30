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
// Define a 'class'
var Badge = React.createClass({displayName: "Badge",
// must contain a render function and return jsx
render: function() {
  return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
    this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
  )
}
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
render: function() {
  var list = this.props.thumbnailData.map(function(thumbnailProps){
    // passing all properties from thumbnail object
    return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
  });
  return React.createElement("div", null, list)
}
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "col-md-4"}, 
      React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {src: this.props.imageUrl}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
          React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
            React.createElement(Badge, {title: this.props.title, number: this.props.number})
          )
        )
      )
    )
  }
});