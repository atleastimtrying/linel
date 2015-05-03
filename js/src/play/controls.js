var Controls = React.createClass({displayName: "Controls",
  startMovement: function(which){
    this.position_modifier = (which === 39) ? 1 : -1;
  },
  endMovement: function(){
    this.position_modifier = false;
  },
  emit: function(){
    events.pub('increment_position', this.position_modifier);
  },
  loop: function(){
    if(this.position_modifier){
      this.emit();
    }
    requestAnimationFrame(this.loop);
  },
  componentDidMount: function(){
    window.addEventListener('keydown', function(event){
      this.startMovement(event.which);
    }.bind(this));

    window.addEventListener('keyup', function(event){
      this.endMovement();
    }.bind(this));
    this.loop();
  },
  render: function(){
    return React.createElement("div", {className: "controls"});
  }
});
