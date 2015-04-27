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

    componentDidMount: function(){
      events.sub('destroy', this.destroy);
      events.sub('create', this.create);
      events.sub('edit', this.edit);
      events.sub('update', this.update);
    },
    getInitialState: function(){
      return {
        title: 'new_level',
        points: [],
        segments: []
      };
    },
    render: function(){
      return(
        React.createElement("div", {className: "editor wrapper"}, 
          React.createElement("div", {className: "view"}, 
            React.createElement("div", {className: "svgContainer"}, 
              React.createElement(Input, null), 
              React.createElement(Display, {points: this.state.points, segments: this.state.segments})
            ), 
            React.createElement(JSONDisplay, {state: this.state})
          ), 
          React.createElement("div", {className: "aside"}, 
            React.createElement(PointsTable, {points: this.state.points}), 
            React.createElement(SegmentsTable, {segments: this.state.segments})
          )
        )
      );
    }
  });
  React.render(React.createElement(App, null), document.body);
};
