var Save = React.createClass({displayName: "Save",
  save: function(){
    console.log('save');
  },
  render: function(){
    return(
      React.createElement("button", {className: "positive", onClick: this.save}, "Save")
    );
  }
});
