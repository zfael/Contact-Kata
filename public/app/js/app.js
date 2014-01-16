'use strict';

var controllersModule = angular.module('ckControllers', []);
var servicesModule = angular.module('ckServices', []);

// Declare app level module which depends on filters, and services
angular.module('ckApp', ['ckControllers', 'ckServices']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {    
		templateUrl: 'partials/list',
        controller: 'ListController'
      })

      .when('/edit:id', {
        templateUrl: 'partials/edit',
        controller: 'EditController'
      });

    $locationProvider.html5Mode(true);
}])
    .run(function ($rootScope, ContactService) {
        ContactService.retrieveAll();
    });