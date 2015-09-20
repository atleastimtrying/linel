var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
  displayName: 'LevelMenuItem',
  pointsToString: function(points){
    var strings = points.map(function(point, i){
      if(i === 0){
        return "M " + point.x + " " + point.y + " ";
      }else{
        return "C " + point.ax + " " + point.ay + ", " + point.bx + " " + point.by + ", "+ point.x + " " + point.y + " ";
      }
    }, "");
    return strings.join(" ");
  },
  render: function(){
    var level = this.props.level;
    var points_string = this.pointsToString(this.props.level.points);
    return(
      <div className="level_menu_item">
        <svg>
          <path d={points_string} />
        </svg>
        <h2>{level.title} by {level.author}</h2>
        <ul>
          <li>difficulty: {level.difficulty}</li>
          <li>coins: {level.coins.length || "0"}</li>
          <li>length: {level.length || "0"}</li>
        </ul>
        <Link to={"/editor/" + level.id} className="btn">Edit</Link>
        <Link to={"/play/" + level.id} className="btn">Play</Link>
      </div>
    );
  }
});
