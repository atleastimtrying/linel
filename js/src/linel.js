window.linel.Linel = function(events){

  var position = 0;

  var return_position = function(callback){
    callback(position);
  };

  events.sub('get linel position', return_position);
};
