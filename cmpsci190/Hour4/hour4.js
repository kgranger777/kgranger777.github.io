// define variables
let r = document.getElementById('r');
let h = document.getElementById('h')
let output = document.getElementById('outputField');

function sendOutput() {
    // printOutput retrieves the calculated value
    let printOutput = Math.ceil(calculate(r.value, h.value));
    // this sets innerHTML of output object (outputField in HTML) to the calculated value
    output.innerHTML = printOutput + " m&#179";
}

function calculate(r, h) {
    console.log("calculate");
    // returns calculated volume using the formula
    return (Math.PI * Math.pow(r, 2) * h);
}