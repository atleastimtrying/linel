var PointEditor = React.createClass({
  destroy: function(){
    events.pub('destroy', this.props.point);
  },
  edit: function(){
    this.p = {
      key:this.props.point.key,
      collection: 'points',
      x: this.props.point.x,
      y: this.props.point.y,
      ax: this.props.point.ax,
      ay: this.props.point.ay,
      bx: this.props.point.bx,
      by: this.props.point.by,
      editing: false
    };
    events.pub('edit', this.props.point);
  },
  save: function(){
    this.props.point.editing = false;
    events.pub('update', this.props.point);
  },
  cancel: function(){
    events.pub('update', this.p);
  },
  get_ref_int: function(name){
    return parseInt(this.refs[name].getDOMNode().value);
  },
  changeInput: function(){
    this.props.point.x = this.get_ref_int('x') || 0;
    this.props.point.y = this.get_ref_int('y') || 0;
    this.props.point.ax = this.get_ref_int('ax') || 0;
    this.props.point.ay = this.get_ref_int('ay') || 0;
    this.props.point.bx = this.get_ref_int('bx') || 0;
    this.props.point.by = this.get_ref_int('by') || 0;
    events.pub('update', this.props.point);
  },
  render: function(){
    var content;
    if(this.props.point.editing){
      content =
      <tr>
        <td><input type="number" value={this.props.point.x} onChange={this.changeInput} ref="x"/></td>
        <td><input type="number" value={this.props.point.y} onChange={this.changeInput} ref="y"/></td>
        <td><input type="number" value={this.props.point.ax} onChange={this.changeInput} ref="ax"/></td>
        <td><input type="number" value={this.props.point.ay} onChange={this.changeInput} ref="ay"/></td>
        <td><input type="number" value={this.props.point.bx} onChange={this.changeInput} ref="bx"/></td>
        <td><input type="number" value={this.props.point.by} onChange={this.changeInput} ref="by"/></td>
        <td><button className="negative" onClick={this.cancel}>cancel</button></td>
        <td><button className="positive" onClick={this.save}>save</button></td>
      </tr>;
    }else{
      content =
      <tr>
        <td><span className="pre-input">{this.props.point.x}</span></td>
        <td><span className="pre-input">{this.props.point.y}</span></td>
        <td><span className="pre-input">{this.props.point.ax}</span></td>
        <td><span className="pre-input">{this.props.point.ay}</span></td>
        <td><span className="pre-input">{this.props.point.bx}</span></td>
        <td><span className="pre-input">{this.props.point.by}</span></td>
        <td><button className="negative" onClick={this.destroy}>destroy</button></td>
        <td><button onClick={this.edit}>edit</button></td>
      </tr>;
    }
    return(content);
  }
});

