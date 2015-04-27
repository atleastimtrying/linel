var EditorHeader = React.createClass({displayName: "EditorHeader",
  render: function(){
    return(
      React.createElement("header", null, 
        React.createElement("h1", null, this.props.level.title)
      )
    );
  }
});
