/* Filter for finding the next-smallest multiple of input number */
angular.module('sknFilters', []).filter('floorMult', function() {
    return function(input, multSize) {
        if(input % multSize === 0) {
            return input;
        }
        else {
            var inputFloor = Math.floor(input);
            if(inputFloor % multSize === 0) {
                return inputFloor;
            }
            else {
                for(var i = 1; i < multSize; ++i) {
                    if((inputFloor - i) % multSize === 0) {
                        return inputFloor - i;
                    }
                }
            }
        return input;
        }
    }
});
