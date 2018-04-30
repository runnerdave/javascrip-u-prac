
	console.log("hello");

	var app = angular.module("bankApp", []);


	app.controller("balancesController",
		function($scope) {
			$scope.users = [
  							{"name":"Priscilla Smith","balance":1191, "address":"small hometown"},
			                  {"name":"Jimmy Verde", "balance":1923, "address":"small hometown"},
			                  {"name":"Hugo Chang", "balance":1289, "address":"medium hometown"}
  			];
  			$scope.addNew = function(user) {
  				$scope.users.push(user);
  			};
  			$scope.remove = function(user) {
  				var index = $scope.users.indexOf(user);
  				alert("Deleting user: " + index);
  				$scope.users.splice(index, 1);
  			};
  			$scope.edit = function(user) {
  				$scope.current = user;  				
  			};
  			$scope.current = {};
		}


	);
