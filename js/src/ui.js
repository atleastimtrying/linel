window.linel.UI = function(events){
  window.addEventListener('keyup', function(event){
    var direction = 1;
    if(event.keyCode === 37){
      direction = -1;
    }
    events.pub('input_changed', direction);
  });
};
