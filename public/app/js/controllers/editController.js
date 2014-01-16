'use strict';

/* Controllers */
controllersModule.controller('EditController', ['$scope','$rootScope','$routeParams', function ($scope, $rootScope, $routeParams) {
        var uid = $routeParams.id || null;

        $scope.editing = false;

        if (uid) {
            $scope.first   = $rootScope.contacts[uid].first;
            $scope.last    = $rootScope.contacts[uid].last;
            $scope.email   = $rootScope.contacts[uid].email;
        }

        $scope.delete = function () {
            // TODO: some dialog
            $rootScope.contacts.splice($rootScope.contacts.indexOf($rootScope.contacts[uid]), 1);
        };

        $scope.save = function () {
            if (!uid) {
                $rootScope.contacts.push({
                    id: $rootScope.contacts.length + 1,
                    first: $scope.first,
                    last: $scope.last,
                    email: $scope.email
                });
            } else {
                $rootScope.contacts[uid].first = $scope.first;
                $rootScope.contacts[uid].last  = $scope.last;
                $rootScope.contacts[uid].email = $scope.email;
            }
        }
    }]);

