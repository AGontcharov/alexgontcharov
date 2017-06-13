var app = angular.module('myApp');

app.controller('contactController', function($scope, $window) {
	$scope.sendMail = function() {
		// console.log($scope.email);
		$window.open("mailto:alexander.goncharov@gmail.com");
	}

});