angular
	.module('myApp')
	.controller('about', ['$scope', 'lightbox', about]);

function about($scope, lightbox) {

	/**
    * Display the current image
    * @param {Number} n - The image index offset
    */
	$scope.showImage = function(n){
		lightbox.show(n);
	}

	/**
    * Display the next or previous image
    * @param {Number} n - The image index offset
    */
	$scope.nextImage = function(n) {
		lightbox.next(n);
	}

	/**
    * Display the next or previous image on key press
    * @param {Object} event - The key event
    */
	$scope.onEventImage = function(event) {
		if (event.key === "ArrowLeft") lightbox.next(-1);
		if (event.key === "ArrowRight") lightbox.next(1);
	}
}