var EditorHeader = React.createClass({
  render: function(){
    return(
      <header>
        <h1>{this.props.level.title}</h1>
      </header>
    );
  }
});
