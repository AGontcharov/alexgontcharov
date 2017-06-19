var app = angular.module('myApp');

app.controller('imageGalleryController', function($scope) {
	var slideIndex = 0;

	$scope.getIndex = function(n) {
		slideIndex = n;
		showSlide(slideIndex);
	}

	/* Get the next or previous image. */
	$scope.plusSlide = function(n) {
		showSlide(slideIndex += n);
	}

	/* Display the image. */
	function showSlide(n) {
		var slides = document.getElementsByClassName("image-wrapper");

		if (n > slides.length) slideIndex = 1;
 		if (n < 1) slideIndex = slides.length;
		console.log('Index is ' + slideIndex);

 		/* Hide all the active images in the lightbox. */
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slides[slideIndex - 1].style.display = "block";
	}
});