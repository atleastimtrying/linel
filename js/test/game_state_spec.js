describe('game_state',function(){
  var events, win_spy, lose_spy, continue_spy;

  beforeEach(function(){
    var stub  = { 
      win: function(){},
      lose: function(){},
      carry_on: function(){}
    };
    events = new window.linel.Events();
    var game_state = new window.linel.GameState(events);
    win_spy = spyOn(stub, 'win');
    lose_spy = spyOn(stub, 'lose');
    continue_spy = spyOn(stub, 'carry_on');
    events.sub('win_game', stub.win);
    events.sub('lose_game', stub.lose);
    events.sub('continue_game', stub.carry_on);
  });

  it('continue_game if neither win nor loses', function(){
    var old_state = {
      position: 50
    };

    var new_state = {
      position: 50
    };

    events.pub('dom_updated', old_state);
    expect(continue_spy).toHaveBeenCalledWith(new_state);
  });

  it('win_game if winning state', function(){
    var old_state = {
      position: 101
    };
    var new_state = {};
    events.pub('dom_updated', old_state);
    expect(win_spy).toHaveBeenCalled();
  });

  it('lose_game if losing state', function(){
    var old_state = {
      position: -3
    };
    var new_state = {};
    events.pub('dom_updated', old_state);
    expect(lose_spy).toHaveBeenCalled();
  });

});
