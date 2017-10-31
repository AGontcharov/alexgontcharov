(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('footer', ['$scope', '$window', footer]);

  function footer($scope, $window) {
      
    $scope.sendMail = function() {
      $window.open("mailto:alexander.goncharov@gmail.com");
    };
  }
})();