// define variables
var input = document.getElementById('inputField');
var output = document.getElementById('outputField');

function sendOutput() {
    // printOutput retrieves the converted value
    var printOutput = convert(input.value);
    // this sets innerHTML of output object (outputField in HTML) to the converted value
    output.innerHTML = printOutput.toFixed(2) + "&#186F";
}

function convert(input) {
    // returns input converted to Fahrenheit using the formula
    return (input * (9 / 5)) + 32;
}

//<button class="button" onclick="sendOutput()">Convert</button>