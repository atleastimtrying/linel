window.linel.Editor = function(){

  var events = window.linel.Events();

  var Input = React.createClass({
    create: function(event){
      events.pub('create', {
        key: Date.now(),
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
        editing: false
      });
    },
    render: function(){
      return(
        <div className="input" onClick={this.create} />
      );
    }
  });


  var Display = React.createClass({
    pointsToString: function(points){
      var strings = points.map(function(point, i){
        var prefix = i === 0 ? 'M' : 'L';
        return prefix + " " + point.x + " " + point.y;
      });
      return strings.join(" ");
    },

    render: function(){
      var pointsString = this.pointsToString(this.props.points);
      return(
        <svg>
            <path className="path" d={pointsString} />
            <path className="pre_path" />
            <circle className="indicator" cx="10" cy="10" r="0" />
        </svg>
      );
    }
  });

  var Controls = React.createClass({
    render: function(){
      return(
        <div className="controls" />
      );
    }
  });

  var PointEditor = React.createClass({
    destroy: function(){
      events.pub('destroy', this.props.point);
    },
    edit: function(){
      this.p = {
        key:this.props.point.key,
        x: this.props.point.x,
        y: this.props.point.y,
        editing: false
      };
      events.pub('edit', this.props.point);
    },
    save: function(){
      this.props.point.editing = false;
      events.pub('update', this.props.point);
    },
    cancel: function(){
      console.log(this.p, this.props.point);
      events.pub('update', this.p);
    },
    get_ref_int: function(name){
      return parseInt(this.refs[name].getDOMNode().value);
    },
    changeInput: function(){
      this.props.point.x = this.get_ref_int('x') || 0;
      this.props.point.y = this.get_ref_int('y') || 0;
      events.pub('update', this.props.point);
    },
    render: function(){
      var content;
      if(this.props.point.editing){
        content =
        <tr>
          <td><input type="number" value={this.props.point.x} onChange={this.changeInput} ref="x"/></td>
          <td><input type="number" value={this.props.point.y} onChange={this.changeInput} ref="y"/></td>
          <td><button onClick={this.save}>save</button></td>
          <td><button onClick={this.cancel}>cancel</button></td>
        </tr>;
      }else{
        content =
        <tr>
          <td>{this.props.point.x}</td>
          <td>{this.props.point.y}</td>
          <td><button onClick={this.destroy}>destroy</button></td>
          <td><button onClick={this.edit}>edit</button></td>
        </tr>;
      }
      return(content);
    }
  });

  var PointsDisplay = React.createClass({
    render: function(){
      var points = this.props.points.map(function(point){
        return(
          <PointEditor key={point.key} point={point}/>
        );
      }, this);

      return(
        <table>
          <tr>
            <th>x</th>
            <th>y</th>
            <th></th>
            <th></th>
          </tr>
          {points}
        </table>
      );
    }
  });

  var App = React.createClass({
    createPoint: function(point_to_add){
      this.state.points.push(point_to_add);
      this.setState(this.state);
    },
    destroyPoint: function(point_to_remove){
      this.state.points = this.state.points.filter(function(point){
        return point.key !== point_to_remove.key;
      });
      this.setState(this.state);
    },
    editPoint: function(point_to_edit){
      this.state.points = this.state.points.map(function(point){
        point.editing = (point.key === point_to_edit.key);
        return point;
      });
      this.setState(this.state);
    },
    updatePoint: function(update_details){
      this.state.points = this.state.points.map(function(point){
        if(point.key === update_details.key){
          point = update_details;
        }
        return point;
      });
      this.setState(this.state);
    },
    componentDidMount: function(){
      events.sub('destroy', this.destroyPoint);
      events.sub('create', this.createPoint);
      events.sub('edit', this.editPoint);
      events.sub('update', this.updatePoint);
    },
    getInitialState: function(){
      return {points: []};
    },
    render: function(){
      return(
      <div>
        <Input />
        <Display points={this.state.points}/>
        <Controls points={this.state.points} />
        <PointsDisplay points={this.state.points} />
      </div>
      );
    }
  });
  React.render(<App/>, document.querySelector('.editor'));
};
