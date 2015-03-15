window.linel.Linel = function(events){

  var position = 0;

  var return_position = function(callback){
    callback(position);
  };

  var move = function(modifier){
    position += modifier;
  };

  events.sub('get linel position', return_position);
  events.sub('move linel', move);
};
