var Input = React.createClass({displayName: "Input",
  startPoint: function(event){
    var x = event.nativeEvent.offsetX;
    var y = event.nativeEvent.offsetY;
    this.p = {
      key: Date.now(),
      collection: 'points',
      x: x,
      y: y,
      ax: x,
      ay: y,
      bx: x,
      by: y,
      editing: true
    };
    window.events.pub('create', this.p);
  },
  updatePoint: function(event){
    if(this.p && this.p.editing){
      var x = event.nativeEvent.offsetX;
      var y = event.nativeEvent.offsetY;
      this.p.ax = x;
      this.p.ay = y;
      window.events.pub('update', this.p);
    }
  },
  endPoint: function(){
    this.p.editing = false;
    window.events.pub('update', this.p);
  },
  render: function(){
    return(
      React.createElement("div", {className: "input", onMouseDown: this.startPoint, onMouseMove: this.updatePoint, onMouseUp: this.endPoint})
    );
  }
});

