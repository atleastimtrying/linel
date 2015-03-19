window.linel.GameState = function(events){
  var calculate_game_state = function(old_state){
    if(old_state.position < 0){
      events.pub('lose_game', old_state);
    }

    if(old_state.position > 100){
      events.pub('win_game', old_state);
    }

    if(old_state.position > 0 || old_state.position < 100){
      events.pub('continue_game', old_state);
    }
  };

  events.sub('dom_updated', calculate_game_state);
};
