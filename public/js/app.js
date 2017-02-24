var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl: 'public/view/home.html',
		controller: 'mainController',
	})

	// route for the page 1
	.when('/projects', {
		templateUrl: 'public/view/projects.html',
		controller: 'page1Controller'
	})

	// route for the page 2
	.when('/resume', {
		templateUrl: 'public/view/resume.html',
		controller: 'page2Controller',
	})

	// route for the page 3
	.when('/page3', {
		templateUrl: 'public/view/page3.html',
		controller: 'page3Controller'
	})

	.otherwise({
		redirectTo: '/404'
	});
});

myApp.controller('mainController', function($scope, $location) {
});

myApp.controller('page1Controller', function($scope) {
});

myApp.controller('page2Controller', function($scope) {
});

myApp.controller('page3Controller', function($scope) {
});