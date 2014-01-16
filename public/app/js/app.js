'use strict';

var controllersModule = angular.module('ckControllers', []);


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
    .run(function ($rootScope) {
        $rootScope.contacts = [
            {id: 1, first: 'John', last: 'Doe', email: 'jdoe@email.com'},
            {id: 2, first: 'Nancy', last: 'Coolperson', email: 'ncoolperson@email.com'},
            {id: 3, first: 'Michael', last: 'Bluth', email: 'mbluth@email.com'}
        ];
    });