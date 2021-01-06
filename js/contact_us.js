// form validation
function validation() {
    var name = document.forms["ContactForm"]["Name"];
    var email = document.forms["ContactForm"]["EMail"];
    var contact = document.forms["ContactForm"]["Contact Number"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (contact.value == "") {
        window.alert(
            "Please enter your telephone number.");
        contact.focus();
        return false;
    }
    return true;
}