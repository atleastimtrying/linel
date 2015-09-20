var React = require('react');
var events = require('eventthing');
module.exports = React.createClass({
  displayName: "SegmentEditor",
  destroy: function(){
    events.emit('destroy', this.props.segment);
  },
  edit: function(){
    this.s = {
      key:this.props.segment.key,
      collection: 'segments',
      colour: this.props.segment.colour,
      start: this.props.segment.start,
      length: this.props.segment.length,
      modifier: this.props.segment.modifier,
      editing: false
    };
    events.emit('edit', this.props.segment);
  },
  save: function(){
    this.props.segment.editing = false;
    events.emit('update', this.props.segment);
  },
  cancel: function(){
    events.emit('update', this.s);
  },
  get_ref_int: function(name){
    return parseInt(this.get_ref(name));
  },
  get_ref: function(name){
    return this.refs[name].getDOMNode().value;
  },
  changeInput: function(){
    this.props.segment.colour = this.get_ref('colour');
    this.props.segment.start = this.get_ref_int('start');
    this.props.segment.length = this.get_ref_int('length');
    this.props.segment.modifier = this.get_ref_int('modifier');
    events.emit('update', this.props.segment);
  },
  render: function(){
    var content;
    if(this.props.segment.editing){
      content =
      React.createElement("tr", null, 
        React.createElement("td", null, React.createElement("input", {type: "text", value: this.props.segment.colour, onChange: this.changeInput, ref: "colour"})), 
        React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.segment.start, onChange: this.changeInput, ref: "start"})), 
        React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.segment.length, onChange: this.changeInput, ref: "length"})), 
        React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.segment.modifier, onChange: this.changeInput, ref: "modifier"})), 
        React.createElement("td", null, React.createElement("button", {className: "negative", onClick: this.cancel}, "cancel")), 
        React.createElement("td", null, React.createElement("button", {className: "positive", onClick: this.save}, "save"))
      );
    }else{
      content =
      React.createElement("tr", null, 
        React.createElement("td", null, React.createElement("span", {className: "pre-input"}, this.props.segment.colour)), 
        React.createElement("td", null, React.createElement("span", {className: "pre-input"}, this.props.segment.start)), 
        React.createElement("td", null, React.createElement("span", {className: "pre-input"}, this.props.segment.length)), 
        React.createElement("td", null, React.createElement("span", {className: "pre-input"}, this.props.segment.modifier)), 
        React.createElement("td", null, React.createElement("button", {className: "negative", onClick: this.destroy}, "destroy")), 
        React.createElement("td", null, React.createElement("button", {onClick: this.edit}, "edit"))
      );
    }
    return(content);
  }
});

