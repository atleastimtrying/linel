window.linel.Play = function(){
  var App = React.createClass({
    getInitialState: function(){
      return({})
    },
    render: function(){
      return(
        <div className="play wrapper">
          <div className="view">
            <h1>Not ready yet</h1>
            <p>sorry :(</p>
          </div>
          <div className="aside">
            <a href="/index.html">Home</a>
          </div>
        </div>
      );
    }
  });
  React.render(<App/>, document.body);
};

