/* Filter for finding the next-smallest multiple of four */
angular.module('sknFilters', []).filter('floorFour', function() {
    return function(input) {
        if(input % 4 === 0) {
            return input;
        }
        else {
            var inputFloor = Math.floor(input);
            if(inputFloor % 4 === 0) {
                return inputFloor;
            }
            else {
                for(var i = 3; i > 0; --i) {
                    if((inputFloor - i) % 4 === 0) {
                        return inputFloor - i;
                    }
                }
            }
        return input;
        }
    }
});
