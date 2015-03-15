window.linel.Environment = function(events){
  var apply_environment = function(old_state){
    return old_state;
  };

  events.sub('velocity_updated', function(state){
    var new_state = apply_environment(state);
    events.pub('environment_applied', new_state);
  });

};
