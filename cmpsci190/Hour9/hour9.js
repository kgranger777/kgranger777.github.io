let output = document.getElementById("outputField");
let currentNode = document.body.childNodes[1];
let stringOutput = "";

for (let i in currentNode.childNodes) {
    if (currentNode.childNodes[i].nodeType === 8) {
        stringOutput += currentNode.childNodes[i].nodeValue + "<br>";
    }
}

output.innerHTML = "Comments will be output below: <br><br>" + stringOutput;