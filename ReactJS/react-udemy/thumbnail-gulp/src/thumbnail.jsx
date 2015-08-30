var React = require('react');
var Badge = require('./badge');

module.export = React.createClass({
  render: function() {
    return <div className="col-md-4">
      <div className="thumbnail">
        <img src={this.props.imageUrl} />
        <div className="caption">
          <h3>{this.props.header}</h3>
          <p>{this.props.description}</p>
          <p>
            <Badge title={this.props.title} number={this.props.number} />
          </p>
        </div>
      </div>
    </div>
  }
});

