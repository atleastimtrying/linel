var React = require('react');
var events = require('eventthing');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var GameDisplay = require('../play/display');
var Controls = require('../play/controls');
var Fullscreen = require('../play/fullscreen_button');
var JSONDisplay = require('../editor/json_display');
module.exports = React.createClass({
  displayName: 'Play',
  get_all_levels: function(){
    return JSON.parse(localStorage.getItem('linel_levels')) || [];
  },

  local_get: function(){
    var id = parseInt(this.props.params.level_id);
    var levels = this.get_all_levels();
    return levels.filter(function(level){
      return level.id === id;
    })[0];
  },

  start_linel: function(){
    return({
      position: 0,
      length: 10,
      coins: 0
    });
  },

  componentDidMount: function(){
    events.on('increment_position', this.incrementPosition);
  },

  empty_level: function(){
    return({
      coins: [],
      segments: [],
      points: [],
      title: ""
    });
  },

  getInitialState: function(){
    var level = this.local_get() || this.empty_level();
    level.gameover = false;
    level.coins = level.coins.map(function(coin){
      coin.found = false;
      return coin;
    });
    level.linel = this.start_linel();
    return level;
  },

  checkCoins: function(){
    this.state.coins = this.state.coins.map(function(coin){
      if(this.state.linel.position === coin.location){
        coin.found = true;
      }
      return coin;
    }, this);
  },

  checkGameEnd: function(){
    if(this.state.length <= this.state.linel.position){
      this.state.gameover = true;
    }
  },

  getSegmentModifier: function(position){
    return this.state.segments.filter(function(segment){
      return(segment.start < position && segment.start + segment.length > position);
    }).map(function(segment){
      return segment.modifier;
    }).reduce(function(previous, current){
      return previous + current;
    }, 0);
  },

  acceleration: 0,

  incrementPosition: function(direction){
    var segment_modifier = this.getSegmentModifier(this.state.linel.position);

    //environment;
    this.acceleration += segment_modifier/8;

    //linel_motion;
    this.acceleration += direction/4;

    //friction;
    if(this.acceleration > 0){
      this.acceleration -= 0.1;
    }
    if(this.acceleration < 0){
      this.acceleration += 0.1;
    }

    //speed limit
    if(this.acceleration < -10){
      this.acceleration = -10;
    }
    if(this.acceleration > 10){
      this.acceleration = 10;
    }
    this.state.linel.position += this.acceleration;

    this.checkCoins();
    this.checkGameEnd();
    this.setState(this.state);
  },

  render: function(){
    var found_coins = this.state.coins.filter(function(coin){ return coin.found; }).length;
    var title = (this.state.gameover) ? React.createElement("h2", null, 'Game over!') : React.createElement("h2", null, "Coins: ", found_coins, " / ", this.state.coins.length);
    return(
      React.createElement("div", {className: "play wrapper"}, 
      React.createElement("div", {className: "view"}, 
      React.createElement("h1", null, this.state.title), 
      title, 
      React.createElement(GameDisplay, {state: this.state}), 
      React.createElement(Controls, null)
      ), 
      React.createElement("div", {className: "aside"}, 
      React.createElement(Link, {className: "btn", to: "/"}, "Home"), 
      React.createElement(Fullscreen, null)
      )
      )
    );
  }
});

