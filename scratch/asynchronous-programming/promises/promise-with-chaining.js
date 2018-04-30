function Promise(fn) {
  var state = "pending";
  var value;
  var deferred = null;

  function resolve(newValue) {
    value = newValue;
    state = "resolved";

    if (deferred) {
      handle(deferred);
    }
  }

  function handle(handler) {
    if (state === "pending") {
      deferred = handler;
      return;
    }

    if (!handler.onResolved) {
      handler.resolve(value);
      return;
    }

    var ret = handler.onResolved(value);
    handler.resolve(ret);
  }

  this.then = function(onResolved) {
    return new Promise(function(resolve) {
      handle({
        onResolved: onResolved,
        resolve: resolve
      });
    });
  };

  fn(resolve);
}

function doSomething(callback) {
  return new Promise(function(resolve) {
    var value = 42;
    resolve(value);
  });
}

doSomething()
  .then(function(result) {
    console.log("first result", result);
    return 88;
  })
  .then(function(secondResult) {
    console.log("second result", secondResult);
  });
