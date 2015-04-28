var CoinEditor = React.createClass({displayName: "CoinEditor",
  destroy: function(){
    events.pub('destroy', this.props.coin);
  },
  edit: function(){
    this.s = {
      key:this.props.coin.key,
      collection: 'coins',
      location: this.props.coin.location,
      editing: false
    };
    events.pub('edit', this.props.coin);
  },
  save: function(){
    this.props.coin.editing = false;
    events.pub('update', this.props.coin);
  },
  cancel: function(){
    events.pub('update', this.s);
  },
  get_ref_int: function(name){
    return parseInt(this.get_ref(name));
  },
  get_ref: function(name){
    return this.refs[name].getDOMNode().value;
  },
  changeInput: function(){
    this.props.coin.location = this.get_ref_int('location');
    events.pub('update', this.props.coin);
  },
  render: function(){
    var content;
    if(this.props.coin.editing){
      content =
      React.createElement("tr", null, 
        React.createElement("td", null, React.createElement("input", {type: "number", value: this.props.coin.location, onChange: this.changeInput, ref: "location"})), 
        React.createElement("td", null, React.createElement("button", {className: "negative", onClick: this.cancel}, "cancel")), 
        React.createElement("td", null, React.createElement("button", {className: "positive", onClick: this.save}, "save"))
      );
    }else{
      content =
      React.createElement("tr", null, 
        React.createElement("td", null, React.createElement("span", {className: "pre-input"}, this.props.coin.location)), 
        React.createElement("td", null, React.createElement("button", {className: "negative", onClick: this.destroy}, "destroy")), 
        React.createElement("td", null, React.createElement("button", {onClick: this.edit}, "edit"))
      );
    }
    return(content);
  }
});

