
$(document).ready(function() {
    $('input').keyup(check_not_empty)
});

function check_not_empty() {
    if ($("#username").val() !== '') {
        if ($("#password").val !== '') {
            $("#login_button").removeAttr('disabled');
        }
    }
}