'use strict';

/* Controllers */
angular.module('ckApp')
	.controller('MainController',
	['$rootScope', '$scope', '$log', '$location', function ($rootScope, $scope, $log, $location) {
		$log.log('Loading main controller');

		$scope.tab = 0;

		$scope.isTabSelected = function(tab) {
			return this.tab === tab;
		};

		$scope.selectTab = function(tab) {
			this.tab = tab;
		};

		$scope.list = function () {
			this.selectTab(0);	
			$location.path('/list');
		};

		$scope.new = function () {
			this.selectTab(1);
			$location.path('/new');
		};

		/*localStorage.clear();
		$log.log(JSON.parse(localStorage.getItem("source")));*/
	}]);


	