describe("Velocity", function(){
  var events, velocity_spy;

  beforeEach(function(){
    var stub  = { velocity_updated: function(){} };
    events = new window.linel.Events();
    var velocity = new window.linel.Velocity(events);
    velocity_spy = spyOn(stub, 'velocity_updated');
    events.sub('velocity_updated', stub.velocity_updated);
  });

  it("updates_velocity after direction_chosen", function(){
    var old_state = {
      direction: 1,
      velocity: 1,
      position: 0,
      course_length: 100
    };

    events.pub('direction_chosen', old_state);
    expect(velocity_spy).toHaveBeenCalled();
  });

  it('accelerates if previous velocity was positive and direction positive', function(){
    var old_state = {
      direction: 1,
      velocity: 1,
      position: 0,
      course_length: 100
    };

    var new_state = {
      direction: 1,
      velocity: 1.02,
      position: 0,
      course_length: 100
    };

    events.pub('direction_chosen', old_state);
    expect(velocity_spy).toHaveBeenCalledWith(new_state);
  });

  it('decelerates if previous velocity was positive and direction negative'
      , function(){
    var old_state = {
      direction: -1,
      velocity: 2,
      position: 0,
      course_length: 100
    };

    var new_state = {
      direction: -1,
      velocity: 1.98,
      position: 0,
      course_length: 100
    };

    events.pub('direction_chosen', old_state);
    expect(velocity_spy).toHaveBeenCalledWith(new_state);
  });

  it('accelerates if previous velocity was negative and direction negative', function(){
    var old_state = {
      direction: -1,
      velocity: -1,
      position: 0,
      course_length: 100
    };

    var new_state = {
      direction: -1,
      velocity: -1.02,
      position: 0,
      course_length: 100
    };

    events.pub('direction_chosen', old_state);
    expect(velocity_spy).toHaveBeenCalledWith(new_state);
  });

  it('decelerates if previous velocity was negative and direction positive', function(){
    var old_state = {
      direction: 1,
      velocity: -2,
      position: 0,
      course_length: 100
    };

    var new_state = {
      direction: 1,
      velocity: -1.98,
      position: 0,
      course_length: 100
    };

    events.pub('direction_chosen', old_state);
    expect(velocity_spy).toHaveBeenCalledWith(new_state);
  });

  it('stays below a limit of 10', function(){
    var old_state = {
      direction: 1,
      velocity: 10,
      position: 0,
      course_length: 100
    };

    var new_state = {
      direction: 1,
      velocity: 10,
      position: 0,
      course_length: 100
    };

    events.pub('direction_chosen', old_state);
    expect(velocity_spy).toHaveBeenCalledWith(new_state);
  });

  it('stays above a limit of -10', function(){
    var old_state = {
      direction: -1,
      velocity: -10,
      position: 0,
      course_length: 100
    };

    var new_state = {
      direction: -1,
      velocity: -10,
      position: 0,
      course_length: 100
    };

    events.pub('direction_chosen', old_state);
    expect(velocity_spy).toHaveBeenCalledWith(new_state);
  });

  it('can sped up from -10', function(){
    var old_state = {
      direction: 1,
      velocity: -10,
      position: 0,
      course_length: 100
    };

    var new_state = {
      direction: 1,
      velocity: -9.98,
      position: 0,
      course_length: 100
    };

    events.pub('direction_chosen', old_state);
    expect(velocity_spy).toHaveBeenCalledWith(new_state);
  });

  it('can sped up from 10', function(){
    var old_state = {
      direction: -1,
      velocity: 10,
      position: 0,
      course_length: 100
    };

    var new_state = {
      direction: -1,
      velocity: 9.98,
      position: 0,
      course_length: 100
    };

    events.pub('direction_chosen', old_state);
    expect(velocity_spy).toHaveBeenCalledWith(new_state);
  });
});
