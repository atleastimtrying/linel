var SegmentsTable = React.createClass({
  render: function(){
    var segments = this.props.segments.map(function(segment){
      return(
        <SegmentEditor key={segment.key} segment={segment}/>
      );
    }, this);
    return(
      <div>
        <table>
          <tr>
            <th>colour</th>
            <th>start</th>
            <th>length</th>
            <th></th>
            <th></th>
          </tr>
          {segments}
        </table>
        <AddSegment segments={this.props.segments}/>
      </div>
    );
  }
});

