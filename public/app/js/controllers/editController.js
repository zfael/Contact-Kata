'use strict';

/* Controllers */
controllersModule.controller('EditController', ['$scope','$rootScope','$routeParams', 'ContactService', function ($scope, $rootScope, $routeParams, ContactService) {
        var id = $routeParams.id || null;

        //$scope.editing = false;
        $scope.contact = {};

        if (id) {
            $scope.contact = ContactService.contacts[id];
        }

        $scope.delete = function () {
            // TODO: some dialog
            ContactService.delete($scope.contact.id);
        };

        $scope.save = function () {
            if (!id) {
                ContactService.add($scope.contact);

            } else {
                ContactService.save($scope.contact);
            }
        }
    }]);

