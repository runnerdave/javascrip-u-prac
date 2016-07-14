var app = angular.module("filterApp", []);

app.controller("httpController", function($scope, $http) {
	$http.get("http://jsonplaceholder.typicode.com/posts")
	.success(function(result) {
		$scope.posts = result;
	});

	$scope.handleChange = function(postingid) {
		$http.get("http://jsonplaceholder.typicode.com/comments?postId=" + postingid)
		.success(function(postcomments) {
			$scope.comments = postcomments;
		}
		);
	};
});