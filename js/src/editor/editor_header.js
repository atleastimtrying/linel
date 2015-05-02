var EditorHeader = React.createClass({displayName: "EditorHeader",
  render: function(){
    var state = this.props.state;
    return(
      React.createElement("header", null, 
        React.createElement(AttributeEditor, {attribute: "title", value: state.title}), 
        React.createElement(AttributeEditor, {attribute: "author", value: state.author}), 
        React.createElement(AttributeEditor, {attribute: "difficulty", value: state.difficulty, type: "number"}), 
        React.createElement(Save, {state: state}), 
        React.createElement("a", {href: "/", className: "negative btn"}, "quit")
      )
    );
  }
});
