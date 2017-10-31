(function() {
  'use strict';

  angular
    .module('myApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider', config]);

  function config($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
      templateUrl: '/views/home.html'
    })
    .when('/projects', {
      templateUrl: '/views/projects.html'
    })
    .when('/resume', {
      templateUrl: '/views/resume.html'
    })
    .when('/about', {
      templateUrl: '/views/about.html',
      controller: 'about'
    })
    .otherwise({
      redirectTo: '/'
    });

    /* Use the HTML5 History API */
    $locationProvider.html5Mode(true);
  }
})();