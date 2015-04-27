var AddPoint = React.createClass({
  findLastPoint: function(){
    if(this.props.points.length){
      return this.props.points[this.props.points.length - 1];
    }else{
      return {x: 20, y: 20};
    }
  },
  emitPoint: function(){
    var last_point = this.findLastPoint();
    events.pub('create', {
      key: Date.now(),
      collection: 'points',
      x: last_point.x + 20,
      y: last_point.y,
      ax: last_point.x + 20,
      ay: last_point.y,
      bx: last_point.x + 20,
      by: last_point.y,
      editing: false
    });
  },
  render: function(){
    return(<button className="positive" onClick={this.emitPoint}>Add Point</button>);
  }
});
