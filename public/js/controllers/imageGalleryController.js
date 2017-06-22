var app = angular.module('myApp');

app.controller('imageGalleryController', function($scope) {
	var slideIndex = 0;

	/* Get the current image from the thumbnail. */
	$scope.getIndex = function(n) {
		slideIndex = n;
		setTimeout(function(){ document.getElementById("lightBox").focus(); }, 170);
		showSlide(slideIndex);
	}

	/* Get the next or previous image. */
	$scope.plusSlide = function(n) {
		showSlide(slideIndex += n);
	}

	/* Get the next or previous image using left/right arrow keys. */
	$scope.nextSlide = function(event) {
		if (event.key === "ArrowLeft") showSlide(slideIndex += -1);
		if (event.key === "ArrowRight") showSlide(slideIndex += 1);
	}

	/* Display the image. */
	function showSlide(n) {
		var slides = document.getElementsByClassName("image-wrapper");

		if (n > slides.length) slideIndex = 1;
 		if (n < 1) slideIndex = slides.length;

 		/* Hide all the active images in the lightbox. */
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		document.getElementById("lightBox").focus();
		slides[slideIndex - 1].style.display = "block";
	}
});