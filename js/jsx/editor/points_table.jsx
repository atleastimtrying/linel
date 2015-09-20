var React = require('react');
var PointEditor = require('./point_editor');
var AddPoint = require('./add_point');
module.exports = React.createClass({
  displayName: "PointsTable",
  render: function(){
    var points = this.props.points.map(function(point){
      return(
        <PointEditor key={point.key} point={point}/>
      );
    }, this);
    return(
      <div className="table_editor">
        <h2>Points</h2>
        <table>
          <thead>
            <tr>
              <th>x</th>
              <th>y</th>
              <th>ax</th>
              <th>ay</th>
              <th>bx</th>
              <th>by</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {points}
          </tbody>
        </table>
        <AddPoint points={this.props.points}/>
      </div>
    );
  }
});

