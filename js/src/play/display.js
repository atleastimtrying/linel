var GameDisplay = React.createClass({displayName: "GameDisplay",
  pointsToPath: function(points){
    if(this.path){
      return this.path;
    }else{
      var strings = points.map(function(point, i){
        if(i === 0){
          return "M " + point.x + " " + point.y;
        }else{
          return "C " + point.ax + " " + point.ay + ", " + point.bx + " " + point.by + ", "+ point.x + " " + point.y;
        }
      });
      this.path = strings.join(" ");
      return this.path;
    }
  },

  render: function(){
    var state = this.props.state;
    var path = this.pointsToPath(state.points);
    var linel = state.linel;

    var coins = state.coins.map(function(coin){
      return(
        React.createElement(Coin, {key: coin.id, coin: coin, path: path})
      );
    }, this);

    return(
      React.createElement("svg", {className: "game_display"}, 
        React.createElement("path", {className: "container", d: path}), 
        coins, 
        React.createElement(Linel, {linel: linel, path: path})
      )
    );
  }
});

