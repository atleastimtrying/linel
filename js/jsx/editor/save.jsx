var Save = React.createClass({
  save: function(){
    console.log('save');
  },
  render: function(){
    return(
      <button className="positive" onClick={this.save}>Save</button>
    );
  }
});
