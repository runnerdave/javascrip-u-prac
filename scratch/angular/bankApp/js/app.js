
	console.log("hello");

	var app = angular.module("bankApp", []);


	app.controller("balancesController",
		function($scope) {
			$scope.users = [
  							{"name":"Priscilla Smith","balance":1191, "address":"small hometown"},
			                  {"name":"Jimmy Verde", "balance":1923, "address":"small hometown"},
			                  {"name":"Hugo Chang", "balance":1289, "address":"medium hometown"}
  			];
		}

	);
