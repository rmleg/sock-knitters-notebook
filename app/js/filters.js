/* Filter for finding the next-smallest multiple of input number */
angular.module('sknFloorMultFilter', []).filter('floorMult', function() {
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

/*Filter for month day, year from WP REST API date*/
angular.module('sknDateFilter', []).filter('date', function() {
    return function(input) {
        var months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        var year = input.substr(0, 4);
        var month = months[parseInt(input.substr(5, 2)) - 1];
        var day = input.substr(8, 2);
        var dateString = day + " " + month + " " + year;
        return dateString;
    }
});
