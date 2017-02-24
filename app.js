var app = angular.module('myApp', []);

app.config(function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		viewURL : 'view/home.html',
		controller : 'mainController'
	})

	// route for the page 1
	.when('/page1', {
		viewURL: 'view/page1.html',
		controller: 'page1Controller'
	})

	// route for the page 2
	.when('/page2', {
		viewURL: 'view/page2.html',
		controller: 'page2Controller'
	})

	// route for the page 3
	.when('/page3', {
		viewURL: 'view/page3.html',
		controller: 'page3Controller'
	});

});