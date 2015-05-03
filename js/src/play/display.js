var GameDisplay = React.createClass({displayName: "GameDisplay",
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

  calculateCoinStyle: function(coin){
    return {
      strokeDashoffset: -coin.location + "px"
    };
  },

  calculateLinelStyle: function(linel){
    return {
      strokeDasharray: linel.length + "px 100000000px",
      strokeDashoffset: -linel.position + 'px'
    };
  },

  render: function(){
    var state = this.props.state;
    var pointsString = this.pointsToString(state.points);
    var linel = state.linel;

    var coins = state.coins.map(function(coin){
      return(
        React.createElement("path", {key: coin.key, className: "coin", style: this.calculateCoinStyle(coin), d: pointsString})
      );
    }, this);

    return(
      React.createElement("svg", {className: "game_display"}, 
        React.createElement("path", {className: "container", d: pointsString}), 
        coins, 
        React.createElement("path", {className: "linel", style: this.calculateLinelStyle(linel), d: pointsString})
      )
    );
  }
});


