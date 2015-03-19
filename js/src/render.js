window.linel.Render = function(events, dom_element){
  var update_dom = function(old_state){
    dom_element.style.strokeDashoffset = "" + old_state.position;
    return old_state;
  };

  events.sub('position_calculated', function(state){
    var new_state = update_dom(state);
    events.pub('dom_updated', new_state);
  });

};
