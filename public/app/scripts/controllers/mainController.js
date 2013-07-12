'use strict';

/* Controllers */
angular.module('ckControllers', [])
	.controller('MainController', function($scope, $log) {
		$log.log('Loading main controller');
		$scope.message = 'Hello world';
	});



