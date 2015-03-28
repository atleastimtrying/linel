window.linel.Position = function(events){
  var constrain_position = function(length, position){
    if(position <= 0){
      return 0;
    }
    if(position >= length){
      return length;
    }
    return position;
  };

  var calculate_position = function(old_state){
    var new_position = old_state.position + old_state.velocity;
    var position = constrain_position(old_state.course_length, new_position);
    events.pub('position_calculated', {
      position: position,
      velocity: old_state.velocity,
      direction: old_state.direction,
      course_length: old_state.course_length
    });
  };

  events.sub('environment_applied', calculate_position);
};
