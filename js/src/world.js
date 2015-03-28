window.linel.World = function(){
  var events = new window.linel.Events();
  var ui = new window.linel.UI(events);
  var direction = new window.linel.Direction(events);
  var velocity = new window.linel.Velocity(events);
  var environment = new window.linel.Environment(events);
  var position = new window.linel.Position(events);
  var render = new window.linel.Render(events, document.getElementById('linel'));
  var display_state = new window.linel.DisplayState(events);
  var canvas_outliner = new window.linel.CanvasOutliner(events);
  var game_state = new window.linel.GameState(events);
  var delay = new window.linel.Delay(events);
  var length = document.getElementById('linel').getTotalLength();
  var linel = {
    direction: 0,
    velocity: 0,
    position: 40,
    course_length: length
  };
  events.pub('position_calculated', linel);
};
