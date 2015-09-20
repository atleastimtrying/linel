var React = require('react');
var AttributeEditor = require('./attribute_editor');
var Save = require('./save');
module.exports = React.createClass({
  displayName: "EditorHeader",
  render: function(){
    var state = this.props.state;
    return(
      React.createElement("header", {className: "editor_header"}, 
        React.createElement(AttributeEditor, {attribute: "title", value: state.title}), 
        React.createElement(AttributeEditor, {attribute: "author", value: state.author}), 
        React.createElement(AttributeEditor, {attribute: "difficulty", value: state.difficulty, type: "number"}), 
        React.createElement(Save, {state: state}), 
        React.createElement("a", {href: "/", className: "negative btn"}, "quit")
      )
    );
  }
});
