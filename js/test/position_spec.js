describe("position", function(){
  var events, position_spy;

  beforeEach(function(){
    var stub  = { position_calculated: function(){} };
    events = new window.linel.Events();
    var position = new window.linel.Position(events);
    position_spy = spyOn(stub, 'position_calculated');
    events.sub('position_calculated', stub.position_calculated);
  });

  it('calculates_position if position negative and velocity negative', function(){
    var old_state = {
      position: -1,
      velocity: -3
    };

    var new_state = {
      position: -4,
      velocity: -3
    };

    events.pub('environment_applied', old_state);
    expect(position_spy).toHaveBeenCalledWith(new_state);
  });

  it('calculates_position if position negative and velocity positive', function(){
    var old_state = {
      position: -1,
      velocity: 5
    };

    var new_state = {
      position: 4,
      velocity: 5
    };

    events.pub('environment_applied', old_state);
    expect(position_spy).toHaveBeenCalledWith(new_state);
  });

  it('calculates_position if position positive and velocity positive', function(){
    var old_state = {
      position: 56,
      velocity: 5
    };

    var new_state = {
      position: 61,
      velocity: 5
    };

    events.pub('environment_applied', old_state);
    expect(position_spy).toHaveBeenCalledWith(new_state);
  });

  it('calculates_position if position positive and velocity negative', function(){
    var old_state = {
      position: 1,
      velocity: -3
    };

    var new_state = {
      position: -2,
      velocity: -3
    };

    events.pub('environment_applied', old_state);
    expect(position_spy).toHaveBeenCalledWith(new_state);
  });
});
