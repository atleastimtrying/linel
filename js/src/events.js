(function(){
  window.linel.Events = function(){
    var data = {};

    var subscribe = function(name, callback){
      if(!data[name]){
        data[name] = [callback];
      }else{
        data[name].push(callback);
      }
    };

    var publish = function(name, options){
      if(data[name]){
        data[name].forEach(function(fn){
          fn(options);
        });
      }
    };

    var open = function(){
      return data;
    };

    return {
      subscribe: subscribe,
      publish: publish,
      sub: subscribe,
      pub: publish,
      open: open
    };
  };
}());
