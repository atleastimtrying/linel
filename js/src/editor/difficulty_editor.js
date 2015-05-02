var DifficultyEditor = React.createClass({displayName: "DifficultyEditor",
  update: function(){
    console.log(this.refs.input.getDOMNote().value);
  },
  render: function(){
    return(
      React.createElement("input", {type: "text", value: this.props.difficulty, ref: "input", onChange: this.update})
    );
  }
});
