'use strict';

// Declare app level module which depends on filters, and services
angular.module('ckApp', ['ckControllers', 'ckServices']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {    
		templateUrl: 'partials/hello',
        controller: 'MainController'
      });
    $locationProvider.html5Mode(true);
}]);
