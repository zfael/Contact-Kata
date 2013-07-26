'use strict';

/* Controllers */
angular.module('ckControllers', [])
    .controller('MyCtrl2', ['$scope', function($scope) {
<<<<<<< .merge_file_a05700
        //Testing variables. These can be removed.
        $scope.message = 'hi';
        $scope.contacts = [
            {first: 'John', last: 'Doe', email: 'jdoe@email.com'},
            {first: 'Nancy', last: 'Coolperson', email: 'ncoolperson@email.com'},
            {first: 'Michael', last: 'Bluth', email: 'mbluth@email.com'}
        ];
=======
        //Testing variable. This can be removed.
        $scope.contacts = [{first: 'John', last: 'Doe', email: 'jdoe@email.com'}, {first: 'Nancy', last: 'Coolperson', email: 'ncoolperson@email.com'}, {first: 'Michael', last: 'Bluth', email: 'mbluth@email.com'}]
>>>>>>> .merge_file_a01756
    }]);