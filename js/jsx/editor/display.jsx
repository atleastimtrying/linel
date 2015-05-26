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
    return this.props.state.points.filter(function(point){
      return point.editing;
    })[0];
  },

  calculateCoinStyle: function(coin){
    return {
      stroke: 'yellow',
      strokeDasharray: "1px 10000000px",
      strokeDashoffset: - coin.location + "px",
      strokeWidth: 11
    };
  },

  calculateSegmentStyle: function(segment){
    return {
      stroke: segment.colour,
      strokeDasharray: segment.length +"px 10000000px",
      strokeDashoffset: - segment.start + "px",
      strokeWidth: 9
    };
  },

  componentDidUpdate: function(){
    var path_length = this.refs.container.getDOMNode().getTotalLength();
    if(this.refs.container && path_length !== this.props.state.length){
      events.pub('attribute_update', {
        attribute: 'length', 
        value: path_length
      });
    }
  },

  render: function(){
    var state = this.props.state;
    var pointsString = this.pointsToString(state.points);
    var editing = this.findEditingPoint();
    editing = editing ? editing : {x: -100, y: -100} ;

    var segments = state.segments.map(function(segment){
      return(
        <path key={segment.key} style={this.calculateSegmentStyle(segment)} d={pointsString} />
      );
    }, this);

    var coins = state.coins.map(function(coin){
      return(
        <path key={coin.key} style={this.calculateCoinStyle(coin)} d={pointsString} />
      );
    }, this);

    return(
      <svg>
        {segments}
        {coins}
        <path className="path" d={pointsString} ref="container"/>
        <circle className="indicator" cx={editing.x} cy={editing.y} r="10" />
      </svg>
    );
  }
});

