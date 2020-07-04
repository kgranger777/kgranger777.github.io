$(function() {
    $("#postDesc").hide();
    $("#sliderSelect").slider({
        max: 9999999999,
        min: 1111111111,
        slide: function( event, ui ) {
            let numString = ui.value.toString();
            $("#phoneOutput").val("(" + numString.substring(0,3) + ")" + numString.substring(3,6)
                + "-" + numString.substring(6));
        }
    });
})

function submit() {
    let phoneNumber = $("#phoneOutput").val().toString();
    $("#textOutput").text("The area code of the number you entered is " + phoneNumber.substring(1,4) + ".");
    $("#textOutput").fadeTo("slow", 1);
    $("#desc").fadeOut(function () {
        $("#postDesc").fadeIn();
    });

}