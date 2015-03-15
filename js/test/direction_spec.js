describe('direction', function(){
  var stub, events, direction, direction_spy;

  beforeEach(function(){
    stub  = { direction_chosen: function(){} };
    events = new window.linel.Events();
    direction = new window.linel.Direction(events);
    direction_spy = spyOn(stub, 'direction_chosen');
    events.sub('direction_chosen', stub.direction_chosen);
  });

  it('maintains a direction of 1', function(){

    var old_state = { direction: 1 };
    var new_state = { direction: 1 };

    events.pub('input_changed', 1);

    events.pub('game_continues', old_state);
    expect(direction_spy).toHaveBeenCalledWith(new_state);
  });

  it('maintains a direction of -1', function(){

    var old_state = { direction: -1 };
    var new_state = { direction: -1 };

    events.pub('input_changed', -1);

    events.pub('game_continues', old_state);
    expect(direction_spy).toHaveBeenCalledWith(new_state);
  });

  it('ignores a direction of 0', function(){

    var old_state = { direction: 1 };
    var new_state = { direction: 1 };

    events.pub('input_changed', 0);

    events.pub('game_continues', old_state);
    expect(direction_spy).toHaveBeenCalledWith(new_state);
  });

  it('assigns a direction of -1', function(){

    var old_state = { direction: 1 };
    var new_state = { direction: -1 };

    events.pub('input_changed', -1);

    events.pub('game_continues', old_state);
    expect(direction_spy).toHaveBeenCalledWith(new_state);
  });

  it('assigns a direction of 1', function(){

    var old_state = { direction: -1 };
    var new_state = { direction: 1 };

    events.pub('input_changed', 1);

    events.pub('game_continues', old_state);
    expect(direction_spy).toHaveBeenCalledWith(new_state);
  });

});