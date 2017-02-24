var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'view/home.html',
		controller : 'mainController'
	})

	// route for the page 1
	.when('/page1', {
		templateUrl: 'view/page1.html',
		controller: 'page1Controller'
	})

	// route for the page 2
	.when('/page2', {
		templateUrl: 'view/page2.html',
		controller: 'page2Controller'
	})

	// route for the page 3
	.when('/page3', {
		templateUrl: 'view/page3.html',
		controller: 'page3Controller'
	});

});

app.controller('mainController', function($scope) {

});

app.controller('page1Controller', function($scope) {

});

app.controller('page2Controller', function($scope) {

});

app.controller('page3Controller', function($scope) {

});