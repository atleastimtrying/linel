var JSONDisplay = React.createClass({displayName: "JSONDisplay",
  stateToJSON: function(){
    return JSON.stringify(this.props.state, null , '  ');
  },

  render: function(){
    return(
      React.createElement("textarea", {value: this.stateToJSON()})
    );
  }
});

