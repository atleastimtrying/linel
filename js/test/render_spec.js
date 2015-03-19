describe('render', function(){
  var create_dom_element = function(){
    var path = document.createElement('path');
    return path;
  };

  var events, render_spy, dom_element;

  beforeEach(function(){
    var stub  = { dom_updated: function(){} };
    dom_element = create_dom_element();
    events = new window.linel.Events();
    var render = new window.linel.Render(events, dom_element);
    render_spy = spyOn(stub, 'dom_updated');
    events.sub('dom_updated', stub.dom_updated);
  });

  it('updates dom element after position_calculated', function(){
    var old_state = {
      position: 55
    };
    events.pub('position_calculated', old_state);
    expect(dom_element.style.strokeDashoffset).toEqual("55px");
  });
});
