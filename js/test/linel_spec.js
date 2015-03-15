describe('linel', function(){
  var he = it;
  var context = describe;

  var events_factory = function(){
    return new window.linel.Events();
  };

  var linel_factory = function(events){
    return new window.linel.Linel(events);
  };

  var event_spy_factory = function(events, event_name){
    var foo = {
      event_callback:function(){}
    };
    var spy = spyOn(foo, 'event_callback');

    events.pub(event_name, foo.event_callback);
    return spy;
  };

  he('should be able to be instantiated', function(){
    var events = events_factory();
    var chap = linel_factory(events);
    expect(chap).toBeDefined();
  });

  he('should return his position', function(){
    var events = events_factory();
    var chap = linel_factory(events);

    var position_spy = event_spy_factory(events, 'get linel position');

    expect(position_spy).toHaveBeenCalled();
  });

  he('should start at 0', function(){
    var events = events_factory();
    var chap = linel_factory(events);

    var position_spy = event_spy_factory(events, 'get linel position');

    expect(position_spy).toHaveBeenCalledWith(0);
  });
});
