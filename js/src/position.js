window.linel.Position = function(events){
  var calculate_position = function(old_state){
    var new_position = old_state.position + old_state.velocity;
    events.pub('position_calculated', {
      position: new_position,
      velocity: old_state.velocity
    });
  };

  events.sub('environment_applied', calculate_position);
};
