//var myApp = angular.module('myApp',[]);

myApp.controller('headerController', function($scope, $location) 
{ 
    $scope.isActive = function(viewLocation) { 
        return viewLocation === $location.path();
    };
});