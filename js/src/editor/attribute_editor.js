var React = require('react');
var events = require('eventthing');
module.exports = React.createClass({
  displayName: "AttributeEditor",
  update: function(){
    events.emit('attribute_update', {attribute: this.props.attribute, value: this.refs.input.getDOMNode().value});
  },
  render: function(){
    var type = this.props.type || 'text';
    return(
      React.createElement("input", {type: type, value: this.props.value, ref: "input", onChange: this.update})
    );
  }
});
