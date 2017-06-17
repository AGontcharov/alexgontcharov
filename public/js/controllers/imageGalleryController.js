var app = angular.module('myApp');

app.controller('imageGalleryController', function($scope) {
	var imageIndex = 0;

	$scope.getIndex = function(index) {
		console.log(index);
		imageIndex = index - 1;
		showSlide(imageIndex);
	}

	/* Get the next or previous image. */
	function plusSlide(n) {
		console.log(n);
		showSlide(imageIndex += n);
	}

	/* Display the image. */
	function showSlide(n) {
		var slides = document.getElementsByClassName("image-wrapper");

		if (n > slides.length) {slideIndex = 0;}
 		if (n < 1) {slideIndex = slides.length - 1;}

 		/* Hide all the active images in the lightbox. */
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		if (i == 0) slides[n].style.display = "table-cell";
		else slides[n].style.display = "block";
	}
});