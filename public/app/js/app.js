'use strict';

// Declare app level module which depends on filters, and services
angular.module('ckApp', ['ckControllers']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {    
		templateUrl: 'partials/hello',
        controller: 'MyCtrl2'
      })

      .when('/edit', {
        templateUrl: 'partials/edit',
        controller: 'MyCtrl2'
      });
    $locationProvider.html5Mode(true);
}]);