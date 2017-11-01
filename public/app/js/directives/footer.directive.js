(function() {
  'use strict';

  angular
    .module('myApp')
    .directive('myFooter', myFooter);

    function myFooter() {
      
      var directive = {
        restrict: 'EA',
        templateUrl: 'views/footer.html'
      };

      return directive;
    }
})();