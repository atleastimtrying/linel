window.linel.DisplayState = function(events){
  var state_to_table = function(state){
    var html = '<table>';
    html += '<tr><td>direction</td><td>' + state.direction + '</td></tr>';
    html += '<tr><td>velocity</td><td>' + state.velocity + '</td></tr>';
    html += '<tr><td>position</td><td>' + state.position + '</td></tr>';
    html += '<tr><td>course_length</td><td>' + state.course_length + '</td></tr>';
    html += '</table>';
    return html;
  };
  var canvas = document.createElement('div');
  document.body.appendChild(canvas);
  events.sub('dom_updated', function(state){
    canvas.innerHTML = state_to_table(state);
  });
};
