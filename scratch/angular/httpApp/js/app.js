var app = angular.module("httpApp", []);

app.controller("httpController", function($scope, $http) {
	$http.get("http://jsonplaceholder.typicode.com/users")
	.success(function(result) {
		$scope.users = result;
	});
});