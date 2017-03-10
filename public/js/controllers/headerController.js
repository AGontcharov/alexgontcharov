var test = angular.module('myApp');

test.controller('headerController', ['$scope', '$window', '$location', function($scope, $window, $location) 
{ 
    $scope.isActive = function(viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.pdfViewer = function() {
    	$window.open("assets/resume.pdf");
    };
}]);