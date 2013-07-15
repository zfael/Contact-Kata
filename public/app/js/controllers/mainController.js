'use strict';

/* Controllers */
angular.module('ckControllers', [])
    .controller('MyCtrl2', ['$scope', function($scope) {
        //Testing variables. These can be removed.
        $scope.message = 'Hello World';
        $scope.contacts = [{first: 'John', last: 'Doe', email: 'jdoe@email.com'}, {first: 'Nancy', last: 'Coolperson', email: 'ncoolperson@email.com'}, {first: 'Michael', last: 'Bluth', email: 'mbluth@email.com'}]
    }]);