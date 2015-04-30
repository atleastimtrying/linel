var AuthorEditor = React.createClass({displayName: "AuthorEditor",
  update: function(){
    console.log(this.refs.input.getDOMNote().value);
  },
  render: function(){
    return(
      React.createElement("span", null, 
        React.createElement("input", {type: "text", value: this.props.author, ref: "input", onChange: this.update})
      )
    );
  }
});
