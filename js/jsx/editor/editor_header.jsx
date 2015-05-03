var EditorHeader = React.createClass({
  render: function(){
    var state = this.props.state;
    return(
      <header className="editor_header">
        <AttributeEditor attribute="title" value={state.title} />
        <AttributeEditor attribute="author" value={state.author} />
        <AttributeEditor attribute="difficulty" value={state.difficulty} type="number" />
        <Save state={state} />
        <a href="/" className="negative btn">quit</a>
      </header>
    );
  }
});
