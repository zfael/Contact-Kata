'use strict';

/* Controllers */
angular.module('ckApp')
    .controller('NewController',
    function ($scope, $log, $location, ckService) {
        $log.log('Loading New controller');

        var pos = localStorage.getItem("pos");
        if (pos != null)
            pos = parseInt(pos);
        else 
            pos = 0;

        $scope.data = {};
        $scope.data.pos = pos;
        $scope.data.active = true;
        $scope.save = function () {
            ckService.createContact($scope.data, pos, function() {
                $location.path('/list');
            });
        };
    });