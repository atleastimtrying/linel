var DifficultyEditor = React.createClass({
  update: function(){
    console.log(this.refs.input.getDOMNote().value);
  },
  render: function(){
    return(
      <span>
        <input type="text" value={this.props.difficulty} ref="input" onChange={this.update} />
      </span>
    );
  }
});
