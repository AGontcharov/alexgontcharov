(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('navbar', ['$scope', '$window', '$location', navbar]);

  function navbar($scope, $window, $location) {
       
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.pdfViewer = function() {
      $window.open("/resume.pdf");
    };
  }
})();