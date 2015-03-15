window.linel.Velocity = function(events){
  var update_velocity = function(old_state){
    return old_state;
  };

  events.sub('direction_chosen', function(state){
    var new_state = update_velocity(state);
    events.pub('velocity_updated', new_state);
  });

};
