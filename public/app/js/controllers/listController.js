'use strict';

/* Controllers */
controllersModule.controller('ListController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
        $scope.edit = function (uid) {
            for (var i = 0, n = $rootScope.contacts.length; i < n; ++i) {
                if ($rootScope.contacts[i].id == uid) {
                    $location.path('/edit' + $rootScope.contacts.indexOf($rootScope.contacts[i]));
                    break;
                }
            }
        };
    }]);

