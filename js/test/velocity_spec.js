var stub = {
  velocity_updated:function(){}
};

describe("Velocity", function(){
  it("updates_velocity after direction_chosen", function(){
    var events = new linel.Events();
    var movement = new linel.Velocity(events);
    var state = {
      linel:{
        position: 0,
        velocity: 1
      }
    };

    var spy = spyOn(stub, 'velocity_updated');
    events.sub('velocity_updated', stub.velocity_updated);
    events.pub('direction_chosen', state);
    expect(spy).toHaveBeenCalled();
  });

  it('accelerates if previous velocity was positive and direction positive');
  it('decelerates if previous velocity was positive and direction negative');
  it('accelerates if previous velocity was negative and direction negative');
  it('decelerates if previous velocity was negative and direction positive');
});
