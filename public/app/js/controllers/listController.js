'use strict';

/* Controllers */
controllersModule.controller('ListController', ['$scope', '$rootScope', '$location', 'ContactService', function($scope, $rootScope, $location, ContactService) {

        $scope.contacts = ContactService.contacts;

        $scope.edit = function (id) {
            for (var i = 0, n = $scope.contacts.length; i < n; ++i) {
                if (ContactService.contacts[i].id == id) {
                    $location.path('/edit' + ContactService.contacts.indexOf(ContactService.contacts[i]));
                    break;
                }
            }
        };
    }]);

