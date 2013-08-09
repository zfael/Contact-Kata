'use strict';

// Declare app level module which depends on filters, and services
angular.module('ckApp', ['ckControllers', 'ckServices']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {    
		templateUrl: 'partials/hello',
        controller: 'MyCtrl1'
      })

      .when('/edit:id', {
        templateUrl: 'partials/edit',
        controller: 'MyCtrl2'
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