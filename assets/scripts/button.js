function buttonPressed() {
    let x = document.getElementById("pressButtonAction");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0";
    }
}