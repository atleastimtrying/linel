var PointsTable = React.createClass({
  render: function(){
    var points = this.props.points.map(function(point){
      return(
        <PointEditor key={point.key} point={point}/>
      );
    }, this);
    return(
      <div>
        <table>
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
          {points}
        </table>
        <AddPoint points={this.props.points}/>
      </div>
    );
  }
});

