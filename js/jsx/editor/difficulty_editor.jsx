var DifficultyEditor = React.createClass({
  update: function(){
    console.log(this.refs.input.getDOMNote().value);
  },
  render: function(){
    return(
      <input type="text" value={this.props.difficulty} ref="input" onChange={this.update} />
    );
  }
});
