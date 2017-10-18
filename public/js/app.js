angular
	.module('myApp', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', '$httpProvider', config]);

function config($routeProvider, $locationProvider) {
	$routeProvider

	.when('/', {
		templateUrl: '/view/home.html',
	})
	.when('/projects', {
		templateUrl: '/view/projects.html',
	})
	.when('/resume', {
		templateUrl: '/view/resume.html',
	})
	.when('/about', {
		templateUrl: '/view/about.html',
		controller: 'imageGallery'
	})
	.otherwise({
		redirectTo: '/'
	});

	/* Use the HTML5 History API */
	$locationProvider.html5Mode(true);
}