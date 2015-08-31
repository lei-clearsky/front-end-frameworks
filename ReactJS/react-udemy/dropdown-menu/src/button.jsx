var React = require('react');

// Define a 'class'
module.exports = React.createClass({
	// must contain a render function and return jsx

  handleClick: function() {
    alert('button is clicked');           
  },

	render: function() {
	  return <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
      {this.props.title} 
      <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
	  </button>
	}
});

