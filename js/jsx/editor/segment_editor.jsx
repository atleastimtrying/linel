var SegmentEditor = React.createClass({
  destroy: function(){
    events.pub('destroy', this.props.segment);
  },
  edit: function(){
    this.s = {
      key:this.props.segment.key,
      collection: 'segments',
      colour: this.props.segment.colour,
      start: this.props.segment.start,
      length: this.props.segment.length,
      modifier: this.props.segment.modifier,
      editing: false
    };
    events.pub('edit', this.props.segment);
  },
  save: function(){
    this.props.segment.editing = false;
    events.pub('update', this.props.segment);
  },
  cancel: function(){
    events.pub('update', this.s);
  },
  get_ref_int: function(name){
    return parseInt(this.get_ref(name));
  },
  get_ref: function(name){
    return this.refs[name].getDOMNode().value;
  },
  changeInput: function(){
    this.props.segment.colour = this.get_ref('colour');
    this.props.segment.start = this.get_ref_int('start');
    this.props.segment.length = this.get_ref_int('length');
    this.props.segment.modifier = this.get_ref_int('modifier');
    events.pub('update', this.props.segment);
  },
  render: function(){
    var content;
    if(this.props.segment.editing){
      content =
      <tr>
        <td><input type="text" value={this.props.segment.colour} onChange={this.changeInput} ref="colour"/></td>
        <td><input type="number" value={this.props.segment.start} onChange={this.changeInput} ref="start"/></td>
        <td><input type="number" value={this.props.segment.length} onChange={this.changeInput} ref="length"/></td>
        <td><input type="number" value={this.props.segment.modifier} onChange={this.changeInput} ref="modifier"/></td>
        <td><button className="negative" onClick={this.cancel}>cancel</button></td>
        <td><button className="positive" onClick={this.save}>save</button></td>
      </tr>;
    }else{
      content =
      <tr>
        <td><span className="pre-input">{this.props.segment.colour}</span></td>
        <td><span className="pre-input">{this.props.segment.start}</span></td>
        <td><span className="pre-input">{this.props.segment.length}</span></td>
        <td><span className="pre-input">{this.props.segment.modifier}</span></td>
        <td><button className="negative" onClick={this.destroy}>destroy</button></td>
        <td><button onClick={this.edit}>edit</button></td>
      </tr>;
    }
    return(content);
  }
});

