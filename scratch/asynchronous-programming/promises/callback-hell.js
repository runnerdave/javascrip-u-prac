'use strict';
var i = 0;
function log(data) {console.log('%d %s', ++i, data); };

function validate() {
   log("Wait for it ...");
   // Sequence of four Long-running async activities
   setTimeout(function () {
      log('result first');
      setTimeout(function () {
         log('result second');
         setTimeout(function () {
            log('result third');
            setTimeout(function () {
               log('result fourth')
            }, 1000);
         }, 1000);
      }, 1000);
   }, 1000);

};
validate();