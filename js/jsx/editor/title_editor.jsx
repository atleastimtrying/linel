var TitleEditor = React.createClass({
  update: function(){
    events.pub('title', this.refs.input.getDOMNode().value);
  },
  render: function(){
    return(
      <input type="text" value={this.props.title} ref="input" onChange={this.update} />
    );
  }
});
