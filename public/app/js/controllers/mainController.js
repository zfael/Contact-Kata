'use strict';

/* Controllers */
angular.module('ckControllers', [])
    .controller('MyCtrl2', ['$scope', function($scope) {
        //Testing variable. This can be removed.
        $scope.contacts = [{first: 'John', last: 'Doe', email: 'jdoe@email.com'}, {first: 'Nancy', last: 'Coolperson', email: 'ncoolperson@email.com'}, {first: 'Michael', last: 'Bluth', email: 'mbluth@email.com'}]
    }]);