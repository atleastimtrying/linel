window.linel.Direction = function(events){
  var input_direction;

  var update_input_direction = function(new_direction){
    input_direction = new_direction;
  };

  var apply_direction = function(state){
    if(input_direction){
      state.direction = input_direction;
    }
    events.pub('direction_chosen', state);
  };

  events.sub('input_changed', update_input_direction);
  events.sub('continue_game', apply_direction);
};
