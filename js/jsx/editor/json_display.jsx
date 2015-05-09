var JSONDisplay = React.createClass({
  stateToJSON: function(){
    return JSON.stringify(this.props.state, null , '  ');
  },

  render: function(){
    return(
      <textarea readOnly value={this.stateToJSON()}></textarea>
    );
  }
});

