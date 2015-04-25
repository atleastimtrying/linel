var PointsTable = React.createClass({displayName: "PointsTable",
  render: function(){
    var points = this.props.points.map(function(point){
      return(
        React.createElement(PointEditor, {key: point.key, point: point})
      );
    }, this);
    return(
      React.createElement("div", null, 
        React.createElement("table", null, 
          React.createElement("tr", null, 
            React.createElement("th", null, "x"), 
            React.createElement("th", null, "y"), 
            React.createElement("th", null, "ax"), 
            React.createElement("th", null, "ay"), 
            React.createElement("th", null, "bx"), 
            React.createElement("th", null, "by"), 
            React.createElement("th", null), 
            React.createElement("th", null)
          ), 
          points
        ), 
        React.createElement(AddPoint, {points: this.props.points})
      )
    );
  }
});

