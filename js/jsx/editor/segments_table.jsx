var SegmentsTable = React.createClass({
  render: function(){
    var segments = this.props.segments.map(function(segment){
      return(
        <SegmentEditor key={segment.key} segment={segment}/>
      );
    }, this);
    return(
      <div className="table_editor">
        <h2>Segments</h2>
        <table>
          <thead>
            <tr>
              <th>colour</th>
              <th>start</th>
              <th>length</th>
              <th>modifier</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {segments}
          </tbody>
        </table>
        <AddSegment segments={this.props.segments}/>
      </div>
    );
  }
});

