describe('ui', function(){

  var trigger_keydown_event = function(keyCode){
    var key_event = document.createEvent('Events');
    key_event.keyCode = keyCode;
    key_event.which - keyCode;
    key_event.initEvent('keydown', true, true);
    window.dispatchEvent(key_event);
  };

  var movement_spy, events;

  beforeEach(function(){
    var stub = {input_changed: function(){}};
    events = new linel.Events();
    var ui = new linel.UI(events);
    movement_spy = spyOn(stub, 'input_changed');
    events.sub('input_changed', stub.input_changed);
  });

  it('fires a move left event', function(){
    var left = 37;
    trigger_keydown_event(left);
    expect(movement_spy).toHaveBeenCalledWith(-1);
  });

  it('fires a move right event', function(){
    var right = 39;
    trigger_keydown_event(right);
    expect(movement_spy).toHaveBeenCalledWith(1);
  });

});
