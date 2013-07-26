'use strict';

/* Controllers */
angular.module('ckControllers', [])
    .controller('MyCtrl1', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
        //Testing variables. These can be removed.
        $scope.message = 'hi';

        $scope.edit = function (uid) {
            for (var i = 0, n = $rootScope.contacts.length; i < n; ++i) {
                if ($rootScope.contacts[i].id == uid) {
                    // get information
                    $location.path('/edit' + i);
                    break;
                }
            }
        };
    }])
    .controller('MyCtrl2', ['$scope','$rootScope','$routeParams', function ($scope, $rootScope, $routeParams) {
        var id = null;
        $scope.first = null;
        $scope.last = null;
        $scope.email = null;
        $scope.editing = false;

        if ($routeParams.id) {
            id = $routeParams.id;

            $scope.first = $rootScope.contacts[id].first;
            $scope.last = $rootScope.contacts[id].last;
            $scope.email = $rootScope.contacts[id].email;
        }

        $scope.save = function () {
            if (!id) {
                $rootScope.contacts.push({
                    id: $rootScope.contacts.length + 1,
                    first: $scope.first,
                    last: $scope.last,
                    email: $scope.email
                });
            }
            else {
                $rootScope.contacts[id].first = $scope.first;
                $rootScope.contacts[id].last  = $scope.last;
                $rootScope.contacts[id].email = $scope.email;
            }
        }
    }]);

