var test = angular.module('myApp');

test.controller('headerController', function($scope, $location) 
{ 
    $scope.isActive = function(viewLocation) { 
        return viewLocation === $location.path();
    };
});