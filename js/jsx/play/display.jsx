var GameDisplay = React.createClass({
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
        <Coin key={coin.id} coin={coin} path={path} />
      );
    }, this);

    return(
      <svg className="game_display">
        <path className="container" d={path} />
        {coins}
        <Linel linel={linel} path={path}/>
      </svg>
    );
  }
});

