window.linel.Delay = function(events){
  events.sub('continue_game',function(state){
    setTimeout(function(){
      events.pub('delay_applied', state);
    }, 15);
  });
};
