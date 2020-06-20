newObject = new Object();

newObject.numbers = [1, 2, 3, 4, 5];
newObject.strings = ["One", "Two", "Three", "Four", "Five"];
newObject.names = ["Benjamin", "Christopher", "Jason", "Timothy", "Urvashi"];

document.getElementById("outputField").innerText = JSON.stringify(newObject);