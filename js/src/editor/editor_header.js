var EditorHeader = React.createClass({displayName: "EditorHeader",
  render: function(){
    var state = this.props.state;
    return(
      React.createElement("header", null, 
        React.createElement(TitleEditor, {title: state.title}), 
        React.createElement(AuthorEditor, {author: state.author}), 
        React.createElement(DifficultyEditor, {difficulty: state.difficulty}), 
        React.createElement(Save, {state: state}), 
        React.createElement("button", {className: "negative"}, "quit")
      )
    );
  }
});
