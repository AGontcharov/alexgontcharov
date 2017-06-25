angular
	.module('myApp')
	.controller('contactController', ['$scope', '$window', function($scope, $window) {
	
	$scope.sendMail = function() {
		$window.open("mailto:alexander.goncharov@gmail.com");
	}
}]);