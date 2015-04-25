window.linel.Editor = function(){
  window.events = new window.linel.Events();

  var App = React.createClass({

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
      return {points: [], segments: []};
    },
    render: function(){
      return(
        <div className="editor">
          <div className="view">
            <div className="svgContainer">
              <Input />
              <Display points={this.state.points} segments={this.state.segments}/>
            </div>
            <JSONDisplay state={this.state}/>
          </div>
          <div className="aside">
            <PointsTable points={this.state.points} />
            <SegmentsTable segments={this.state.segments} />
          </div>
        </div>
      );
    }
  });
  React.render(<App/>, document.body);
};
