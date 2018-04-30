var editUsersApp = angular.module("editUsersApp", []);

editUsersApp.controller( "editUsersController", function($scope, $http) {
	$http.get("http://jsonplaceholder.typicode.com/users")
		.success(function(result){
			$scope.users = result;
	});

	$scope.editedUser = undefined;

	$scope.edit = function(user) {
		$scope.currentuser = user;
		$scope.editedUser = {name:""};
		$scope.editedUser.name = user.name;
	};

	$scope.save = function(user) {
		$scope.currentuser.name = user.name;
		$scope.editedUser = undefined;
	}

});