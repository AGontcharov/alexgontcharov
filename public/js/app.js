var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
	//$locationProvider.hashPrefix('');
	$routeProvider

	// route for home page
	.when('/', {
		templateUrl: '/view/home.html',
		controller: 'mainController',
	})

	// route for projects page
	.when('/projects', {
		templateUrl: '/view/projects.html',
		controller: 'projectsController'
	})

	// route for resume page
	.when('/resume', {
		templateUrl: '/view/resume.html',
		controller: 'resumeController',
	})

	// route for about me page
	.when('/about', {
		templateUrl: '/view/about.html',
		controller: 'aboutController'
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

myApp.controller('resumeController', ['$scope', function($scope) {
}]);

myApp.controller('aboutController', function($scope) {
});