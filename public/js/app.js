var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl: 'public/view/home.html',
		controller: 'mainController'
	})

	// route for the page 1
	.when('/page1', {
		templateUrl: 'public/view/page1.html',
		controller: 'page1Controller'
	})

	// route for the page 2
	.when('/page2', {
		templateUrl: 'public/view/page2.html',
		controller: 'page2Controller'
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

myApp.controller('mainController', function($scope) {
	console.log("hi main");
});

myApp.controller('page1Controller', function($scope) {
	console.log("hi page1");
});

myApp.controller('page2Controller', function($scope) {
	console.log("hi page2");
});

myApp.controller('page3Controller', function($scope) {
	console.log("hi page2");
});