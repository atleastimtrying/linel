describe('render', function(){
  var events, render_spy;

  beforeEach(function(){
    var stub  = { dom_updated: function(){} };
    events = new window.linel.Events();
    var render = new window.linel.Render(events);
    render_spy = spyOn(stub, 'dom_updated');
    events.sub('dom_updated', stub.dom_updated);
  });

  it('updates_dom after position_calculated', function(){
    var old_state = {};
    var new_state = {};
    events.pub('position_calculated', old_state);
    expect(render_spy).toHaveBeenCalledWith(new_state);
  });
});
