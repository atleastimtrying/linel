var AddSegment = React.createClass({
  findPrevious: function(){
    if(this.props.segments.length){
      return this.props.segments[this.props.segments.length - 1];
    }else{
      return { colour: 'green', start: 0, length: 30};
    }
  },
  emit: function(){
    var last_segment = this.findPrevious();
    events.pub('create', {
      key: Date.now(),
      collection: 'segments',
      colour: last_segment.colour,
      start: last_segment.start + last_segment.length,
      length: last_segment.length,
      editing: false
    });
  },
  render: function(){
    return(<button className="positive" onClick={this.emit}>Add segment</button>);
  }
});
