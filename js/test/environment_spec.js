describe("environment", function(){

  var stub = {
    environment_applied:function(){}
  };

  it("environment_applied after velocity_updated", function(){
    var events = new linel.Events();
    var movement = new linel.Environment(events);
    var state = {
      linel:{
        position: 0,
        velocity: 1
      }
    };

    var spy = spyOn(stub, 'environment_applied');
    events.sub('environment_applied', stub.environment_applied);
    events.pub('velocity_updated', state);
    expect(spy).toHaveBeenCalled();
  });
});
