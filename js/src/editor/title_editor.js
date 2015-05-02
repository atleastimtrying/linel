var TitleEditor = React.createClass({displayName: "TitleEditor",
  update: function(){
    events.pub('title', this.refs.input.getDOMNode().value);
  },
  render: function(){
    return(
      React.createElement("input", {type: "text", value: this.props.title, ref: "input", onChange: this.update})
    );
  }
});
