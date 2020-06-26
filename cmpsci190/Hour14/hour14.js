let form = $("inputForm");
let formFields = form.getElements();
let output = $("outputField");

function generate() {
    let username1 = formFields[0].value.toLowerCase() + "."
        + formFields[1].value.toLowerCase().substring(0,1)
        + formFields[2].value.toLowerCase().substring(2,4)
        + formFields[2].value.toLowerCase().substring(8,10);

    let username2 = formFields[0].value.toLowerCase().substring(0,1) + "."
        + formFields[1].value.toLowerCase()
        + formFields[2].value.toLowerCase().substring(0,4);

    output.innerHTML = "Because your first name is " + formFields[0].value
        + ", your last name is " + formFields[1].value
        + " and your birthday is "+ formFields[2].value
        + ", a good username for you might be " + username1 + " or " + username2;
}