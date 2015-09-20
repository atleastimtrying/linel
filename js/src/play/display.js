var React = require('react');
var Linel = require('./linel');
var Coin = require('./coin');

module.exports = React.createClass({
  displayName: 'GameDisplay',
  boundary: 150,
  needs_updating: function(state){
    var linel_path = document.querySelector('path.linel');
    var frame = document.querySelector('svg.game_display');
    var offset, frame_width, frame_height;
    if(linel_path){
      offset = linel_path.getPointAtLength(state.linel.position);
      frame_width = frame.width.baseVal.value;
      frame_height = frame.height.baseVal.value;
    }
    return linel_path && this.out_of_bounds(offset, frame_width, frame_height);
  },

  out_of_bounds: function(offset, frame_width, frame_height){
    return(
      (
        offset.x < this.boundary ||
        offset.x > (frame_width - this.boundary)
      ) || (
        offset.y < this.boundary ||
        offset.y > (frame_height - this.boundary)
      )
    );
  },

  adjust_state: function(state){
    if(this.needs_updating(state)){
      return this.update_state(state);
    }else{
      return state;
    }
  },

  move_everything: function(state, x_adjustment, y_adjustment){
    state.points = state.points.map(function(point){
      point.x = point.x + x_adjustment;
      point.ax = point.ax + x_adjustment;
      point.bx = point.bx + x_adjustment;

      point.y = point.y + y_adjustment;
      point.ay = point.ay + y_adjustment;
      point.by = point.by + y_adjustment;
      return point;
    });
    return state;
  },

  update_state: function(state){
    var linel_path = document.querySelector('path.linel');
    var offset = linel_path.getPointAtLength(state.linel.position);
    var frame = document.querySelector('svg.game_display');
    var x_offset = offset.x;
    var y_offset = offset.y;
    var frame_width = frame.width.baseVal.value;
    var frame_height = frame.height.baseVal.value;
    var x_adjustment = 0;
    var y_adjustment = 0;
    if(x_offset < this.boundary){
      x_adjustment = (this.boundary - x_offset);
    }
    if(x_offset > frame_width - this.boundary){
      x_adjustment = -(x_offset - (frame_width - this.boundary));
    }

    if(y_offset < this.boundary){
      y_adjustment = (this.boundary - y_offset);
    }
    if(y_offset > frame_height - this.boundary){
      y_adjustment = -(y_offset - (frame_height - this.boundary));
    }
    return this.move_everything(state, x_adjustment, y_adjustment);
  },

  pointsToString: function(points){
    var strings = points.map(function(point, i){
      if(i === 0){
        return "M " + point.x + " " + point.y;
      }else{
        return "C " + point.ax + " " + point.ay + ", " + point.bx + " " + point.by + ", "+ point.x + " " + point.y;
      }
    });
    return strings.join(" ");
  },

  pointsToPath: function(points){
      this.path = this.pointsToString(points);
    return this.path;
  },

  not_found: function(coin){
    return !coin.found;
  },

  render: function(){
    var state = this.props.state;
    state = this.adjust_state(state);
    var path = this.pointsToPath(state.points);
    var linel = state.linel;

    var coins = state.coins.filter(this.not_found).map(function(coin){
      return(
        React.createElement(Coin, {key: coin.id, coin: coin, path: path})
      );
    }, this);
    return(
      React.createElement("svg", {className: "game_display"}, 
        React.createElement("path", {className: "container", d: path}), 
        coins, 
        React.createElement(Linel, {linel: linel, path: path})
      )
    );
  }
});

