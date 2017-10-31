(function() {
    'use strict';

    angular
        .module('myApp')
        .service('lightbox', lightbox);

    function lightbox() {

        var imageIndex = 0;

        var service = {
            show: show,
            next: next
        };

        return service;

        /**
        * Display the lightbox with the associated image
        * @param {Number} n - The image index
        */
        function show(n) {        
            // Needed to offset event in boostrap or angular
            setTimeout(function(){ document.getElementById("lightBox").focus(); }, 200);
            imageIndex = n;
            display(imageIndex);
        }

        /**
        * Display the next or previous image
        * @param {Number} n - The image index offset
        */
        function next(n) {
            display(imageIndex += n);
        }

        /**
        * Private function for displaying image
        * @param {Number} n - The image index
        */
        function display(n) {
            var slides = document.getElementsByClassName("image-wrapper");

            if (n > slides.length) imageIndex = 1;
            if (n < 1) imageIndex = slides.length;

            // Hide all the active images in the lightbox. 
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            document.getElementById("lightBox").focus();
            slides[imageIndex - 1].style.display = "block";
        }
    }
})();