'use strict';

// Declare app level module which depends on views, and components
var sknApp = angular.module('sknApp', [
        'sknFloorMultFilter',
        'sknDateFilter']);

sknApp.controller('StitchCalc', ['$scope', function($scope) {
    $scope.needSts = function(stsPerIn, circumference) {
        if(stsPerIn && circumference) {
            return 0.9 * stsPerIn * circumference;
        }
        else return 0;
    };

    $scope.saveNeedSts = function(stsPerIn, circumference, mult) {
        /* find needed stitches without concern for multiples */
        var need = 0;
        if(stsPerIn && circumference) {
            var need = Math.floor(0.9 * stsPerIn * circumference);
        }

        /* find needed stitches - largest multiple of mult smaller than need */
        if(mult) { //if mult is not zero, calculate
            if(need % mult === 0) {
                return need;
            }
            else {
                for(var i = 1; i < mult; ++i) {
                    if((need - i) % mult === 0) {
                        return need - i;
                    }
                }
            }
        }
        return need;
    };

    $scope.legLength = function(heelType) {
        if(heelType === "flap") {
            return "six";
        }
        else
            return "seven";
    };
        
}]);

sknApp.controller('CraftingPosts', ['$scope', '$http', function($scope, $http) {
    var get_url = 'http://rachel.nu/wp-json/wp/v2/posts?filter[category_name]=crafting&per_page=4&_embed';
    $http.get(get_url).then(function(craftingPosts) {
        $scope.craftingPosts = craftingPosts.data;
    });
}]);
        
