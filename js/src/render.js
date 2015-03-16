window.linel.Render = function(events){
  var update_dom = function(old_state){
    return old_state;
  };

  events.sub('position_calculated', function(state){
    var new_state = update_dom(state);
    events.pub('dom_updated', new_state);
  });

};
