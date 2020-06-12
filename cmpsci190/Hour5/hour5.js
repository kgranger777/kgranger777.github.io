let input = document.getElementById("inputField");
let output = document.getElementById("outputField");

function sendOutput() {
    let userInput = prompt("Please enter some text: ")

    if (userInput === null) {
        alert("Error: Please input some text.");
        sendOutput();
    } else {
        output.innerHTML = convert(userInput);
    }
}

function convert(input) {
    let convertArray = Array.from(input);

    for (let i = 0; i < convertArray.length; i++) {
        if (i === 0)
            convertArray[i] = convertArray[i].toUpperCase();
        if (convertArray[i] === " ") {
            convertArray[i + 1] = convertArray[i + 1].toUpperCase();
        }
    }

    let printOutput = "";

    for (let j = 0; j < convertArray.length; j++) {
        printOutput += convertArray[j];
    }

    return printOutput;
}