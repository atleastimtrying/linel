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
      React.createElement("div", {className: "level_menu_item"}, 
        React.createElement("svg", null, 
          React.createElement("path", {d: points_string})
        ), 
        React.createElement("h2", null, level.title, " by ", level.author), 
        React.createElement("ul", null, 
          React.createElement("li", null, "difficulty: ", level.difficulty), 
          React.createElement("li", null, "coins: ", level.coins.length || "0"), 
          React.createElement("li", null, "length: ", level.length || "0")
        ), 
        React.createElement(Link, {to: "/editor/" + level.id, className: "btn"}, "Edit"), 
        React.createElement(Link, {to: "/play/" + level.id, className: "btn"}, "Play")
      )
    );
  }
});
