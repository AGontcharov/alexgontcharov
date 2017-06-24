angular
	.module('myApp')
	.controller('contactController', function($scope, $window) {
	
	$scope.sendMail = function() {
		$window.open("mailto:alexander.goncharov@gmail.com");
	}
});