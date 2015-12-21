'use strict';

// Declare app level module which depends on views, and components
var SockKnittersApp = angular.module('ngSockKnittersApp', []);

SockKnittersApp.controller('printName', ['$scope', function($scope) {
    $scope.name = 'World'
}]);
