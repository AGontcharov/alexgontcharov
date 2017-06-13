var app = angular.module('myApp');

app.controller('headerController', ['$scope', '$window', '$location', function($scope, $window, $location) 
{ 
    $scope.isActive = function(viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.pdfViewer = function() {
    	$window.open("/resume.pdf");
    };
}]);