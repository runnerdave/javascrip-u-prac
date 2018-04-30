'use strict';
var Q = require('kew');
var i = 0;

function log(data) {console.log('%d %s', ++i, data); };

// Asynchronous fn returns a promise
function async(arg) {
	var deferred = Q.defer();
	setTimeout(function () {
		deferred.resolve('result ' + arg);
	}, 1000);
	return deferred.promise;
};

// Flattened promise chain
function validate() {
	log("Wait for it ...");
	async('first').then(function(resp){
		log(resp);
		return async('second');
	})
	.then(function(resp){
		log(resp);
		return async('third')
	})
	.then(function(resp){
		log(resp);
		return async('fourth');
	})
	.then(function(resp){
		log(resp);
	}).fail(log);
};
validate();