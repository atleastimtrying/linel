describe('ui', function(){

  var trigger_keydown_event = function(keyCode){
    var key_event = document.createEvent('Events');
    key_event.keyCode = keyCode;
    key_event.which - keyCode;
    key_event.initEvent('keyup', true, true);
    window.dispatchEvent(key_event);
  };

  var movement_spy, events;

  xit('fires a move left event', function(){
    var left = 37;
    trigger_keydown_event(left);
    expect(movement_spy).toHaveBeenCalledWith(-1);
  });

  xit('fires a move right event', function(){
    var right = 39;
    trigger_keydown_event(right);
    expect(movement_spy).toHaveBeenCalledWith(1);
  });

});
