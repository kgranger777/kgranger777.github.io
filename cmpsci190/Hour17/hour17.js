function checkFields() {
    return (!(($("#name").val().length < 4)
        || ($("#email").val().length < 4)));
}

$("button").click(function () {
    console.log($('form1').serialize())
    if (checkFields()) {
        $.post(
            'hour17.php', $("#form1").serialize(),
            function (data) {
                $("#outputField").html(data);
            });
    } else {
        alert("Please enter 4 or more characters into both text boxes.");
        return false;
    }
});