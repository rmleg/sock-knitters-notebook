'use strict';

// Declare app level module which depends on views, and components
var sknApp = angular.module('sknApp', [
        'sknFilters']);

sknApp.controller('StitchCalc', ['$scope', function($scope) {
    $scope.needSts = function(stsPerIn, circumference) {
        return 0.9 * stsPerIn * circumference;
    }
}]);
