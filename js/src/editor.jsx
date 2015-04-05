window.linel.Editor = function(){
  var isPath = false;
  var svg = document.querySelector('svg');
  var path = document.querySelector('path.path');
  var pre_path = document.querySelector('path.pre_path');
  var path_display = document.querySelector('div.path_display');
  var indicator = document.querySelector('circle.indicator');
  var points = [];
  var RETURN_KEY = 13;
  points.last = function(){
    return this[this.length -1];
  };

  var editPoint = function(li, point, i){
    indicator.setAttribute('r', 5);
    indicator.setAttribute('cx', point.x);
    indicator.setAttribute('cy', point.y);
    var input = document.createElement('input');
    input.value = point.x + ' ' + point.y;
    input.addEventListener('keyup', function(event){
      if(event.keyCode === RETURN_KEY){
        li.innerHTML = input.value;
        var coords = input.value.split(' ');
        points[i] = { x: coords[0], y: coords[1]};
        render(path, points);
        show_points();
        indicator.setAttribute('r', 0);
      }
    });
    li.innerHTML = "";
    li.appendChild(input);
  };

  var make_button = function(label, fn){
    var button = document.createElement('button');
    button.className = label;
    button.innerHTML = label;
    button.addEventListener('click', fn);
    return button;
  };

  var show_points = function(){
    var ul = document.createElement('ul');
    points.forEach(function(point, i){
      var li = document.createElement('li');
      var span = document.createElement('span');

      var save_button = make_button('save',function(){
        edit_button.style.display = "inline-block";
        save_button.style.display = "none";
      });

      var edit_button = make_button('edit',function(){
        edit_button.style.display = "none";
        save_button.style.display = "inline-block";
        editPoint(span, point, i);
      });

      span.innerHTML = point.x + ' ' + point.y;
      li.appendChild(span);
      li.appendChild(edit_button);
      li.appendChild(save_button);
      ul.appendChild(li);
    });
    path_display.innerHTML = '';
    path_display.appendChild(ul);
  };

  var pointsToString = function(points){
    var strings = points.map(function(point, i){
      var prefix = i === 0 ? 'M' : 'L';
      return prefix + " " + point.x + " " + point.y;
    });
    return strings.join(" ");
  };

  var event_to_point = function(event){
    return {x:event.offsetX, y: event.offsetY};
  };

  var render = function(path, points){
    var string =  pointsToString(points);
    path.setAttribute("d", string);
    return string;
  };

  svg.addEventListener('click', function(event){
    points.push(event_to_point(event));
    render(path, points);
    show_points();
  });

  svg.addEventListener('mousemove', function(event){
    if(points.length){
      render(pre_path, [event_to_point(event), points.last()]);
    }
  });
};
