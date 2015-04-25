var PointsDisplay = React.createClass({displayName: "PointsDisplay",
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

