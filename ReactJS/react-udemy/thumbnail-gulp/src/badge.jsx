var React = require('react');

// Define a 'class'
module.exports = React.createClass({
	// must contain a render function and return jsx
	render: function() {
	  return <button className="btn btn-primary" type="button">
	    {this.props.title} <span className="badge">{this.props.number}</span>
	  </button>
	}
});

