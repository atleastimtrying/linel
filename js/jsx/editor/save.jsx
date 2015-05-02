var Save = React.createClass({
  save: function(){
    events.pub('save');
  },
  render: function(){
    return(
      <button className="positive" onClick={this.save}>Save</button>
    );
  }
});
