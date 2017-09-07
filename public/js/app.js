var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
	$routeProvider

	/* Route for home page */
	.when('/', {
		templateUrl: '/view/home.html',
	})

	/* Route for projects page */
	.when('/projects', {
		templateUrl: '/view/projects.html',
	})

	/* Route for resume page */
	.when('/resume', {
		templateUrl: '/view/resume.html',
	})

	/* Route for about page */
	.when('/about', {
		templateUrl: '/view/about.html',
	})

	/* Route for 404 */
	.otherwise({
		redirectTo: '/404'
	});

	/* Use the HTML5 History API */
	$locationProvider.html5Mode(true);
});