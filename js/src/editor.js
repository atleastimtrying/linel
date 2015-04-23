window.linel.Editor = function(){

  var events = window.linel.Events();

  var Input = React.createClass({displayName: "Input",
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
        React.createElement("div", {className: "input", onClick: this.create})
      );
    }
  });


  var Display = React.createClass({displayName: "Display",
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
        React.createElement("svg", null, 
            React.createElement("path", {className: "path", d: pointsString}), 
            React.createElement("path", {className: "pre_path"}), 
            React.createElement("circle", {className: "indicator", cx: "10", cy: "10", r: "0"})
        )
      );
    }
  });

  var JSONDisplay = React.createClass({displayName: "JSONDisplay",
    stateToJSON: function(){
      return JSON.stringify(this.props.state);
    },

    render: function(){
      return(
        React.createElement("textarea", {value: this.stateToJSON()})
      );
    }
  });

  var PointEditor = React.createClass({displayName: "PointEditor",
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
        React.createElement("tr", null, 
          React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.point.x, onChange: this.changeInput, ref: "x"})), 
          React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.point.y, onChange: this.changeInput, ref: "y"})), 
          React.createElement("td", null, React.createElement("button", {onClick: this.save}, "save")), 
          React.createElement("td", null, React.createElement("button", {onClick: this.cancel}, "cancel"))
        );
      }else{
        content =
        React.createElement("tr", null, 
          React.createElement("td", null, this.props.point.x), 
          React.createElement("td", null, this.props.point.y), 
          React.createElement("td", null, React.createElement("button", {onClick: this.destroy}, "destroy")), 
          React.createElement("td", null, React.createElement("button", {onClick: this.edit}, "edit"))
        );
      }
      return(content);
    }
  });

  var PointsDisplay = React.createClass({displayName: "PointsDisplay",
    render: function(){
      var points = this.props.points.map(function(point){
        return(
          React.createElement(PointEditor, {key: point.key, point: point})
        );
      }, this);

      return(
        React.createElement("table", null, 
          React.createElement("tr", null, 
            React.createElement("th", null, "x"), 
            React.createElement("th", null, "y"), 
            React.createElement("th", null), 
            React.createElement("th", null)
          ), 
          points
        )
      );
    }
  });

  var App = React.createClass({displayName: "App",
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
      React.createElement("div", null, 
        React.createElement(Input, null), 
        React.createElement(Display, {points: this.state.points}), 
        React.createElement(JSONDisplay, {state: this.state}), 
        React.createElement(PointsDisplay, {points: this.state.points})
      )
      );
    }
  });
  React.render(React.createElement(App, null), document.querySelector('.editor'));
};
