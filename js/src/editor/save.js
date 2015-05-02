var Save = React.createClass({displayName: "Save",
  save: function(){
    events.pub('save');
  },
  render: function(){
    return(
      React.createElement("button", {className: "positive", onClick: this.save},  this.props.state.id ? 'Update' : 'Save')
    );
  }
});
