// define variables
var input = document.getElementById('inputField');
var output = document.getElementById('outputField');

// this function updates the output when it is called
function sendOutput(input) {
    console.log(input);
    if (isNaN(input.target.value)) {
        // if input is not a number, output invalid message to innerHTML
        output.innerHTML = "Invalid input.";
    } else if(input.target.value === "") {
        // if input is not received, output default text (nothing)
        output.innerHTML = "";
    } else {
        // if input is received, run convert function and output to innerHTML
        output.innerHTML = convert(input.target.value);
    }
}

function convert(input) {
    // returns input converted to Fahrenheit using the formula
    return (input * 9/5) + 32 + "&#186F";
}

// add new EventListener to continuously listen for user input into text field
// calls sendOutput when input is detected
input.addEventListener("input", sendOutput);