let output = document.getElementById("outputField");

let months =
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let message = "";
for (let i in months) {
    message += 'Month ' + (parseInt(i) + 1) + ' is ' + months[i] + '<br>';
}

output.innerHTML = message;