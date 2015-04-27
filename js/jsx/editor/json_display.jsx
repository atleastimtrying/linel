var JSONDisplay = React.createClass({
  stateToJSON: function(){
    return JSON.stringify(this.props.state);
  },

  render: function(){
    return(
      <textarea value={this.stateToJSON()}></textarea>
    );
  }
});

