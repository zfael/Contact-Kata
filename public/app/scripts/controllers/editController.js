'use strict';

/* Controllers */
angular.module('ckApp')
    .controller('EditController',
    function ($rootScope, $scope, $log, $location, ckService) {
        $log.log('Loading Edit controller');       

        $scope.data = $rootScope.edit;
        $scope.save = function () {
            ckService.editContact($scope.data, $scope.data.pos, function() {
                $location.path('/list');
            });
        };
    });