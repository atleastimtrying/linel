window.linel.GameState = function(events){
  var calculate_game_state = function(old_state){
    events.pub('continue_game', old_state);
    events.pub('win_game', old_state);
    events.pub('lose_game', old_state);
  };

  events.sub('dom_updated', calculate_game_state);
};
