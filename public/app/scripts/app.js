'use strict';

// Declare app level module which depends on filters, and services
angular.module('ckApp', []).
  config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        redirectTo: '/list'
      }).
      when('/new', {
        templateUrl: 'new',
        controller: 'NewController'
      }).
      when('/list', {
        templateUrl: 'list',
        controller: 'ListController'
      }).
      when('/edit', {
        templateUrl: 'edit',
        controller: 'EditController'
      })

      .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
  }]);