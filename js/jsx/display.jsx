var Display = React.createClass({
  pointsToString: function(points){
    var strings = points.map(function(point, i){
      if(i === 0){
        return "M " + point.x + " " + point.y;
      }else{
        return "C " + point.ax + " " + point.ay + ", " + point.bx + " " + point.by + ", "+ point.x + " " + point.y;
      }
    });
    return strings.join(" ");
  },

  findEditingPoint: function(){
    return this.props.points.filter(function(point){
      return point.editing;
    })[0];
  },

  calculateSegmentStyle: function(segment){
    return {
      stroke: segment.colour,
      strokeDasharray: segment.length +"px 10000000px",
      strokeDashoffset: - segment.start + "px",
      strokeWidth: 9
    };
  },

  render: function(){
    var pointsString = this.pointsToString(this.props.points);
    var editing = this.findEditingPoint();
    editing = editing ? editing : {x: -100, y: -100} ;
    var segments = this.props.segments.map(function(segment){
      return(
        <path key={segment.key} style={this.calculateSegmentStyle(segment)} d={pointsString} />
      );
    }, this);
    return(
      <svg>
        {segments}
        <path className="path" d={pointsString} />
        <circle className="indicator" cx={editing.x} cy={editing.y} r="10" />
      </svg>
    );
  }
});

