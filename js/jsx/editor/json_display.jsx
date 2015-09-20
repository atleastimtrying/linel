var React = require('react');
module.exports = React.createClass({
  displayName: "JSONDisplay",
  stateToJSON: function(){
    return JSON.stringify(this.props.state, null , '  ');
  },

  render: function(){
    return(
      <textarea readOnly value={this.stateToJSON()}></textarea>
    );
  }
});

