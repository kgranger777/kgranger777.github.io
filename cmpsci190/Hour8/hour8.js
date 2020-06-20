let today = new Date();

// define new function to return numeric value for yesterday
Date.prototype.getYesterday = function() {
    return today.getDay() - 1;
}

// switch cases output strings that correspond to numbered days
function stringOutput(input) {
    switch (input) {
        case 1:
            return "Sunday";
            break;
        case 2:
            return "Monday";
            break;
        case 3:
            return "Tuesday";
            break;
        case 4:
            return "Wednesday";
            break;
        case 5:
            return "Thursday";
            break;
        case 6:
            return "Friday";
            break;
        case 7:
            return "Saturday";
            break;
        default:
            return "Invalid Date";
    }
}

// define output element
let output = document.getElementById("outputField");
// set innerHTML of output element
output.innerHTML = "Today is " + stringOutput(today.getDay())
    + " and yesterday was " + stringOutput(today.getYesterday()) + ".";