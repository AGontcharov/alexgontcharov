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
		controller: 'projectsController'
	})

	// route for the page 2
	.when('/resume', {
		templateUrl: 'public/view/resume.html',
		controller: 'resumeController',
	})

	// route for the page 3
	.when('/about', {
		templateUrl: 'public/view/about.html',
		controller: 'page3Controller'
	})

	.otherwise({
		redirectTo: '/404'
	});
});

myApp.controller('mainController', function($scope) {
});

myApp.controller('projectsController', function($scope) {
});

myApp.controller('resumeController', function($scope) {
});

myApp.controller('page3Controller', function($scope) {
});