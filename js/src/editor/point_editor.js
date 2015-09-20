var React = require('react');
var events = require('eventthing');
module.exports = React.createClass({
  displayName: "PointEditor",
  destroy: function(){
    events.emit('destroy', this.props.point);
  },
  edit: function(){
    this.p = {
      key:this.props.point.key,
      collection: 'points',
      x: this.props.point.x,
      y: this.props.point.y,
      ax: this.props.point.ax,
      ay: this.props.point.ay,
      bx: this.props.point.bx,
      by: this.props.point.by,
      editing: false
    };
    events.emit('edit', this.props.point);
  },
  save: function(){
    this.props.point.editing = false;
    events.emit('update', this.props.point);
  },
  cancel: function(){
    events.emit('update', this.p);
  },
  get_ref_int: function(name){
    return parseInt(this.refs[name].getDOMNode().value);
  },
  changeInput: function(){
    this.props.point.x = this.get_ref_int('x') || 0;
    this.props.point.y = this.get_ref_int('y') || 0;
    this.props.point.ax = this.get_ref_int('ax') || 0;
    this.props.point.ay = this.get_ref_int('ay') || 0;
    this.props.point.bx = this.get_ref_int('bx') || 0;
    this.props.point.by = this.get_ref_int('by') || 0;
    events.emit('update', this.props.point);
  },
  render: function(){
    var content;
    if(this.props.point.editing){
      content =
      React.createElement("tr", null, 
        React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.point.x, onChange: this.changeInput, ref: "x"})), 
        React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.point.y, onChange: this.changeInput, ref: "y"})), 
        React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.point.ax, onChange: this.changeInput, ref: "ax"})), 
        React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.point.ay, onChange: this.changeInput, ref: "ay"})), 
        React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.point.bx, onChange: this.changeInput, ref: "bx"})), 
        React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.point.by, onChange: this.changeInput, ref: "by"})), 
        React.createElement("td", null, React.createElement("button", {className: "negative", onClick: this.cancel}, "cancel")), 
        React.createElement("td", null, React.createElement("button", {className: "positive", onClick: this.save}, "save"))
      );
    }else{
      content =
      React.createElement("tr", null, 
        React.createElement("td", null, React.createElement("span", {className: "pre-input"}, this.props.point.x)), 
        React.createElement("td", null, React.createElement("span", {className: "pre-input"}, this.props.point.y)), 
        React.createElement("td", null, React.createElement("span", {className: "pre-input"}, this.props.point.ax)), 
        React.createElement("td", null, React.createElement("span", {className: "pre-input"}, this.props.point.ay)), 
        React.createElement("td", null, React.createElement("span", {className: "pre-input"}, this.props.point.bx)), 
        React.createElement("td", null, React.createElement("span", {className: "pre-input"}, this.props.point.by)), 
        React.createElement("td", null, React.createElement("button", {className: "negative", onClick: this.destroy}, "destroy")), 
        React.createElement("td", null, React.createElement("button", {onClick: this.edit}, "edit"))
      );
    }
    return(content);
  }
});

