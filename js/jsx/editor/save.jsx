var React = require('react');
var events = require('eventthing');
module.exports = React.createClass({
  displayName: "Save",
  save: function(){
    events.emit('save');
  },
  render: function(){
    return(
      <button className="positive" onClick={this.save}>{ this.props.state.id ? 'Update' : 'Save'}</button>
    );
  }
});
