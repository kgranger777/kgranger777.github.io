let ellipse = document.getElementById("ellipse");

ellipse.style.margin = "auto";
ellipse.style.width = "300px";
ellipse.style.height = "200px";
ellipse.style.backgroundColor = "antiquewhite";

ellipse.style.borderTopLeftRadius = "50%";
ellipse.style.borderTopRightRadius = "50%";
ellipse.style.borderBottomLeftRadius = "50%";
ellipse.style.borderBottomRightRadius = "50%";

styleProps = window.getComputedStyle(ellipse);

console.log("Top Left radius is:     " + styleProps.borderTopLeftRadius);
console.log("Top Right radius is:    " + styleProps.borderTopRightRadius);
console.log("Bottom Left radius is:  " + styleProps.borderBottomLeftRadius);
console.log("Bottom Right radius is: " + styleProps.borderBottomRightRadius);
setTimeout(() => {alert("Console has been updated!");}, 1000);