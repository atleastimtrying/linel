describe("position", function(){
  var events, position_spy;

  beforeEach(function(){
    var stub  = { position_calculated: function(){} };
    events = new window.linel.Events();
    var position = new window.linel.Position(events);
    position_spy = spyOn(stub, 'position_calculated');
    events.sub('position_calculated', stub.position_calculated);
  });

  it('calculates_position if velocity positive', function(){
    var old_state = {
      position: 56,
      velocity: 5,
      direction: 1,
      course_length: 100
    };

    var new_state = {
      position: 61,
      velocity: 5,
      direction: 1,
      course_length: 100
    };

    events.pub('environment_applied', old_state);
    expect(position_spy).toHaveBeenCalledWith(new_state);
  });

  it('calculates_position if velocity negative', function(){
    var old_state = {
      position: 10,
      velocity: -3,
      direction: 1,
      course_length: 100
    };

    var new_state = {
      position: 7,
      velocity: -3,
      direction: 1,
      course_length: 100
    };

    events.pub('environment_applied', old_state);
    expect(position_spy).toHaveBeenCalledWith(new_state);
  });
});
