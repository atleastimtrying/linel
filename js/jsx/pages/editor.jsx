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

    get_all_levels: function(){
      return JSON.parse(localStorage.getItem('linel_levels')) || [];
    },

    create_level: function(){
      console.log("create isn't made yet");
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

    title: function(title){
      this.state.title = title;
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
      events.sub('title', this.title);
      events.sub('save', this.save);
    },

    getInitialState: function(){
      return this.local_get() || this.starter();
    },

    render: function(){
      return(
        <div>
          <EditorHeader state={this.state} />
          <div className="editor wrapper">
            <div className="view">
              <div className="svgContainer">
                <Input />
                <Display state={this.state} />
              </div>
              <CoinsTable coins={this.state.coins} />
            </div>
            <div className="aside">
              <PointsTable points={this.state.points} />
              <SegmentsTable segments={this.state.segments} />
              <JSONDisplay state={this.state}/>
            </div>
          </div>
        </div>
      );
    }
  });
  React.render(<App/>, document.body);
};
