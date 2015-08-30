var Controls = React.createClass({
  startMovement: function(which){
    this.position_modifier = (which === 39) ? 1 : -1;
  },
  endMovement: function(){
    this.position_modifier = false;
  },
  emit: function(position_modifier){
    events.pub('increment_position', position_modifier);
  },
  loop: function(){
    if(this.position_modifier){
      this.emit(this.position_modifier);
    }else{
      this.emit(0);
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
    return <div className="controls" />;
  }
});
