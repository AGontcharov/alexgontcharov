var app = angular.module('myApp');

app.controller('imageGalleryController', function($scope) {
	$scope.openModal = function(slide) {
		console.log(slide);
	}

});