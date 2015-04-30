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
      return {
        title: 'new_level',
        author: '',
        difficulty: 1,
        points: [],
        segments: [],
        coins: []
      };
    },
    render: function(){
      return(
        <div>
          <div>
            <TitleEditor title={this.state.title} />
            <AuthorEditor author={this.state.author} />
            <DifficultyEditor difficulty={this.state.difficulty} />
            <Save state={this.state} />
            <button className="negative">quit</button>
          </div>
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
