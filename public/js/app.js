var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
	//$locationProvider.hashPrefix('');
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl: '/view/home.html',
		controller: 'mainController',
	})

	// route for the page 1
	.when('/projects', {
		templateUrl: '/view/projects.html',
		controller: 'projectsController'
	})

	// route for the page 2
	.when('/resume', {
		templateUrl: '/view/resume.html',
		controller: 'resumeController',
	})

	// route for the page 3
	.when('/about', {
		templateUrl: '/view/about.html',
		controller: 'page3Controller'
	})

	.otherwise({
		redirectTo: '/404'
	});

	// use the HTML5 History API
	$locationProvider.html5Mode(true);
});

myApp.controller('mainController', function($scope) {
});

myApp.controller('projectsController', function($scope) {
});

myApp.controller('resumeController', function($scope) {
});

myApp.controller('page3Controller', function($scope) {
});