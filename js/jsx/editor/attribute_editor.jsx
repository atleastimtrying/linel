var AttributeEditor = React.createClass({
  update: function(){
    events.pub('attribute_update', {attribute: this.props.attribute, value: this.refs.input.getDOMNode().value});
  },
  render: function(){
    var type = this.props.type || 'text'
    return(
      <input type={type} value={this.props.value} ref="input" onChange={this.update} />
    );
  }
});
