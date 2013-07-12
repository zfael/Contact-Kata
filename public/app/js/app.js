'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {    
		templateUrl: 'partials/hello',
        controller: 'MyCtrl2'
      });
    $locationProvider.html5Mode(true);
}]);