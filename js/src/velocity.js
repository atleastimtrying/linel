window.linel.Velocity = function(events){
  var update_velocity = function(old_state){
    return {
      direction: old_state.direction,
      velocity: old_state.velocity + old_state.direction,
      position: old_state.position
    };
  };

  events.sub('direction_chosen', function(state){
    var new_state = update_velocity(state);
    events.pub('velocity_updated', new_state);
  });

};
