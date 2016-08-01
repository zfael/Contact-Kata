'use strict';

/* Controllers */
angular.module('ckApp')
	.controller('ListController',
	function ($rootScope, $scope, $log, $location, ckService) {
		$log.log('Loading list controller');
		
		$scope.edit = function (pos) {
			$rootScope.edit = $scope.contacts[pos];
			$location.path('/edit');
		}

		$scope.remove = function (pos) {
			ckService.removeContact(pos, function() {
				getAllContacts();
			});
		}

		function getAllContacts() {
			ckService.getContacts(function(dados) {

				$scope.search = "";

				$scope.contacts = dados;
				$scope.posToEdit = -1;
				$log.log($scope.contacts);
			});			
		}

		getAllContacts();
	});