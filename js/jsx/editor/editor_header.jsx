var EditorHeader = React.createClass({
  render: function(){
    var state = this.props.state;
    return(
      <header>
        <TitleEditor title={state.title} />
        <AuthorEditor author={state.author} />
        <DifficultyEditor difficulty={state.difficulty} />
        <Save state={state} />
        <button className="negative">quit</button>
      </header>
    );
  }
});
