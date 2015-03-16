describe("position", function(){
  var events, position_spy;

  beforeEach(function(){
    var stub  = { position_calculated: function(){} };
    events = new window.linel.Events();
    var position = new window.linel.Position(events);
    position_spy = spyOn(stub, 'position_calculated');
    events.sub('position_calculated', stub.position_calculated);
  });

  it('calculates_position after environment_applied', function(){
    var old_state = {};
    events.pub('environment_applied', old_state);
    expect(position_spy).toHaveBeenCalled();
  });
});
