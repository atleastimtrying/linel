window.linel.Velocity = function(events){
  var in_range = function(os){
    return (
      (os.velocity < 10) &&
      (os.velocity > -10)) ||
      ( os.velocity === -10 && os.direction > 0) ||
      ( os.velocity === 10 && os.direction < 0);
  };

  var calculate_velocity = function(old_state){
    var velocity = old_state.velocity;
    if(in_range(old_state)){
      velocity += (old_state.direction * 0.02);
    }
    return velocity;
  };

  var update_velocity = function(old_state){
    var velocity = calculate_velocity(old_state);
    return {
      direction: old_state.direction,
      velocity: velocity,
      position: old_state.position,
      course_length: old_state.course_length
    };
  };

  events.sub('direction_chosen', function(state){
    var new_state = update_velocity(state);
    events.pub('velocity_updated', new_state);
  });

};
