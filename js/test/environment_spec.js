describe("environment", function(){

  var events, environment_spy;

  beforeEach(function(){
    var stub  = { environment_applied: function(){} };
    events = new window.linel.Events();
    var environment = new window.linel.Environment(events);
    environment_spy = spyOn(stub, 'environment_applied');
    events.sub('environment_applied', stub.environment_applied);
  });

  it("environment_applied after velocity_updated", function(){
    var old_state = {
      position: 0,
      velocity: 1
    };

    var new_state = {
      position: 0,
      velocity: 1
    };
    events.pub('velocity_updated', old_state);
    expect(environment_spy).toHaveBeenCalled();
  });
});
