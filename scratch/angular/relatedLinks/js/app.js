var app = angular.module("myRMIT", []);



app.controller("relatedLinksController", function($scope, $http) {

	var localUrl = 'relatedLinks.json';

	//$http.get("json/relatedLinks.json")
	$http({method: 'GET', url: localUrl})
	.success(function(result) {
		$scope.relatedLinks = result;
	});
});