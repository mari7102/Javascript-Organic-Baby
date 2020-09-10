window.addEventListener("DOMCententLoaded", function () {
    var errorCount;

    var myForm = document.forms["contactForm"];

    var fullname = myForm["fullname"];
    var email = myForm["email"];
    var phonenumber = myForm["phonenumber"];
    var message = myForm["message"];

    var lblFullname = fullname.nextElementSibling;
    var lblEmail = email.nextElementSibling;
    var lblPhonenumber = phonenumber.nextElementSibling;
    var lblMessage = message.nextElementSibling;

    var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        errorCount = 0;
        lblFullname.innerHTML = "";
        lblEmail.innerHTML = "";
        lblPhonenumber.innerHTML = "";


        if (fullname.value.lenght == 0) {
            lblFullname.innerHTML = "Full Name"
            errorCount++;
        }

        if (!regexEmail.test(email.value)) {
            lblEmail.innerHTML = "Not correct";
            errorCount++;
        }

            if (phonenumber.value.lenght == 0) {
                lblPhonenumber = "Phonenumber"
                errorCount++;
            }

            if (message.value.lenght == 0) {
                lblPhonenumber = "Message"
                errorCount++;
            }

            if (errorCount == 0) {
                myForm.submit();
            }

            
        });
});