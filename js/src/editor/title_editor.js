var TitleEditor = React.createClass({displayName: "TitleEditor",
  update: function(){
    console.log(this.refs.input.getDOMNote().value);
  },
  render: function(){
    return(
      React.createElement("span", null, 
        React.createElement("input", {type: "text", value: this.props.title, ref: "input", onChange: this.update})
      )
    );
  }
});
