'use strict';
var i = 0;
function log(data) {console.log('%d %s', ++i, data); };

// Asynchronous fn executes a callback result fn
function async(arg, callBack) {
   setTimeout(function(){
      log('result ' + arg);
      callBack();
   }, 1000);
};

function validate() {
   log("Wait for it ...");
   // Sequence of four Long-running async activities
   async('first', function () {
      async('second',function () {
         async('third', function () {
            async('fourth', function () {});
         });
      });
   });
};
validate();