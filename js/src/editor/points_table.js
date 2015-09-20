var React = require('react');
var PointEditor = require('./point_editor');
var AddPoint = require('./add_point');
module.exports = React.createClass({
  displayName: "PointsTable",
  render: function(){
    var points = this.props.points.map(function(point){
      return(
        React.createElement(PointEditor, {key: point.key, point: point})
      );
    }, this);
    return(
      React.createElement("div", {className: "table_editor"}, 
        React.createElement("h2", null, "Points"), 
        React.createElement("table", null, 
          React.createElement("thead", null, 
            React.createElement("tr", null, 
              React.createElement("th", null, "x"), 
              React.createElement("th", null, "y"), 
              React.createElement("th", null, "ax"), 
              React.createElement("th", null, "ay"), 
              React.createElement("th", null, "bx"), 
              React.createElement("th", null, "by"), 
              React.createElement("th", null), 
              React.createElement("th", null)
            )
          ), 
          React.createElement("tbody", null, 
            points
          )
        ), 
        React.createElement(AddPoint, {points: this.props.points})
      )
    );
  }
});

