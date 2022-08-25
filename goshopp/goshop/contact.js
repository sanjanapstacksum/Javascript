function contactkeyfunc() {

    var Form = document.getElementById("contact-form");
    var Email = document.getElementById('cf_email').value;
    document.getElementById('emailrequired3').style.display = "none";

    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (Email.match(pattern)) { 
        document.getElementById('email5').style.display = "none";
        document.getElementById('emailrequired3').style.display = "none";

       
    }
    else {
       
        document.getElementById('email5').style.display = "block";
        document.getElementById('email6').style.display = "none";

        Form.classList.remove("valid");
        Form.classList.add("invalid");

    }
}

function hellocontactform() {
    var signin = document.getElementById('cf_email')

    if (signin.value == "") {
        document.getElementById('emailrequired3').style.display = "block";
        return true;
    }
    else {
        document.getElementById('emailrequired3').style.display = "none";
        return true;
    }

}


function namecontactform() {
    var signin = document.getElementById('cf_name')

    if (signin.value == "") {
        document.getElementById('nameisrequired').style.display = "block";
        return true;
    }
    else {
        document.getElementById('nameisrequired').style.display = "none";
        return true;
    }

}

function mescontactform() {
    var signin = document.getElementById('cf_message')

    if (signin.value == "") {
        document.getElementById('mesisrequired').style.display = "block";
        return true;
    }
    else {
        document.getElementById('mesisrequired').style.display = "none";
        return true;
    }

}

var entry = document.getElementById('sendnow')
entry.addEventListener('click', conbutton)

function conbutton() {

    document.getElementById('email6').style.display = "none";


    var cname = document.getElementById('cf_name').value
    var cpass = document.getElementById('cf_email').value
    var cmes = document.getElementById('cf_message').value

    var validate = true;

    var Form = document.getElementById("contact-form");
    var Email = document.getElementById('cf_email').value;
    document.getElementById('emailrequired3').style.display = "none";



    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!Email.match(pattern)) {
        document.getElementById('email5').style.display = "block";
        document.getElementById('emailrequired3').style.display = "none";
        validate = false;
    }

    if (cpass == '') {
        document.getElementById('emailrequired3').style.display = "block";
        document.getElementById('email5').style.display = "none";
        document.getElementById('email6').style.display = "none";
        validate = false;
    }

    if (cname == '') {
        document.getElementById('nameisrequired').style.display = "block";
        validate = false;
    }
    if (cpass == '') {
        document.getElementById('mesisrequired').style.display = "block";
        validate = false;
    }



    if (validate == false) {
        return false;
    }


    else {
        document.getElementById('submitted').style.display = "block";
        


        // alert("successfully Registered")
    }
}


