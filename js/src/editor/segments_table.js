var SegmentsTable = React.createClass({displayName: "SegmentsTable",
  render: function(){
    var segments = this.props.segments.map(function(segment){
      return(
        React.createElement(SegmentEditor, {key: segment.key, segment: segment})
      );
    }, this);
    return(
      React.createElement("div", {className: "table_editor"}, 
        React.createElement("h2", null, "Segments"), 
        React.createElement("table", null, 
          React.createElement("thead", null, 
            React.createElement("tr", null, 
              React.createElement("th", null, "colour"), 
              React.createElement("th", null, "start"), 
              React.createElement("th", null, "length"), 
              React.createElement("th", null, "modifier"), 
              React.createElement("th", null), 
              React.createElement("th", null)
            )
          ), 
          React.createElement("tbody", null, 
            segments
          )
        ), 
        React.createElement(AddSegment, {segments: this.props.segments})
      )
    );
  }
});

