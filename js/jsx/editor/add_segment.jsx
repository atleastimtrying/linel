var React = require('react');
var events = require('eventthing');
module.exports = React.createClass({
  displayName: "AddSegment",
  findPrevious: function(){
    if(this.props.segments.length){
      return this.props.segments[this.props.segments.length - 1];
    }else{
      return { colour: '#3366DD', start: 0, length: 30, modifier: -1};
    }
  },
  emit: function(){
    var last_segment = this.findPrevious();
    events.emit('create', {
      key: Date.now(),
      collection: 'segments',
      colour: last_segment.colour,
      start: last_segment.start + last_segment.length,
      length: last_segment.length,
      modifier: last_segment.modifier,
      editing: false
    });
  },
  render: function(){
    return(<button className="positive" onClick={this.emit}>Add segment</button>);
  }
});
