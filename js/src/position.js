window.linel.Position = function(events){
  var calculate_position = function(old_state){
    events.pub('position_calculated');
  };

  events.sub('environment_applied', calculate_position);
};
