window.linel.Editor = function(){
  window.events = new window.linel.Events();

  var App = React.createClass({displayName: "App",

    create: function(element){
      this.state[element.collection].push(element);
      this.setState(this.state);
    },

    destroy: function(element){
      this.state[element.collection] = this.state[element.collection].filter(function(item){
        return item.key !== element.key;
      });
      this.setState(this.state);
    },

    edit: function(element){
      this.state[element.collection] = this.state[element.collection].map(function(item){
        item.editing = (item.key === element.key);
        return item;
      });
      this.setState(this.state);
    },

    update: function(element){
      this.state[element.collection] = this.state[element.collection].map(function(item){
        if(item.key === element.key){
          item = element;
        }
        return item;
      });
      this.setState(this.state);
    },

    get_all_levels: function(){
      return JSON.parse(localStorage.getItem('linel_levels')) || [];
    },

    create_level: function(){
      var levels = this.get_all_levels();
      var highest_level = levels.reduce(function(previous, level){
        return Math.max(previous, parseInt(level.id));
      }, 0);
      this.state.id = highest_level + 1;
      levels.push(this.state);
      this.set_levels(levels);
    },

    set_levels: function(levels){
      localStorage.setItem('linel_levels', JSON.stringify(levels));
    },

    update_level: function(){
      var new_levels = this.get_all_levels().map(function(level){
        if(level.id === this.state.id){
          return this.state;
        }else{
          return level;
        }
      }, this);
      this.set_levels(new_levels);
    },

    save: function(){
      if(this.state.id === undefined){
        this.create_level();
      }else{
        this.update_level();
      }
    },

    attribute_update: function(reference){
      this.state[reference.attribute] = reference.value;
      this.setState(this.state);
    },

    starter: function(){
      return({
        title: 'new_level',
        author: '',
        difficulty: 1,
        points: [],
        segments: [],
        coins: []
      });
    },

    local_get: function(){
      var id = parseInt(window.location.hash.substr(1));
      var levels = this.get_all_levels();
      return levels.filter(function(level){
        return level.id === id;
      })[0];
    },

    componentDidMount: function(){
      events.sub('destroy', this.destroy);
      events.sub('create', this.create);
      events.sub('edit', this.edit);
      events.sub('update', this.update);
      events.sub('attribute_update', this.attribute_update);
      events.sub('save', this.save);
    },

    getInitialState: function(){
      return this.local_get() || this.starter();
    },

    render: function(){
      return(
        React.createElement("div", null, 
          React.createElement(EditorHeader, {state: this.state}), 
          React.createElement("div", {className: "editor wrapper"}, 
            React.createElement("div", {className: "view"}, 
              React.createElement("div", {className: "svgContainer"}, 
                React.createElement(Input, null), 
                React.createElement(Display, {state: this.state})
              ), 
              React.createElement(CoinsTable, {coins: this.state.coins})
            ), 
            React.createElement("div", {className: "aside"}, 
              React.createElement(PointsTable, {points: this.state.points}), 
              React.createElement(SegmentsTable, {segments: this.state.segments}), 
              React.createElement(JSONDisplay, {state: this.state})
            )
          )
        )
      );
    }
  });
  React.render(React.createElement(App, null), document.body);
};
