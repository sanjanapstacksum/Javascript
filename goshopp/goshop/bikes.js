function firstname() {
    var signin = document.getElementById('secondname')

    if (signin.value == "") {
        document.getElementById('userrequired').style.display = "block";
        return true;
    }
    else {
        document.getElementById('userrequired').style.display = "none";
        return true;
    }

}
function mailfunc() {
    var signin = document.getElementById('secondemail')

    if (signin.value == "") {
        document.getElementById('emailrequired2').style.display = "block";
        return true;
    }
    else {
        document.getElementById('emailrequired2').style.display = "none";
        return true;
    }

}
function pass2func() {
    var signin = document.getElementById('secondpassword')

    if (signin.value == "") {
        document.getElementById('passwordrequired2').style.display = "block";
        return true;
    }
    else {
        document.getElementById('passwordrequired2').style.display = "none";
        return true;
    }

}
function contactfumc() {
    var signin = document.getElementById('secondnumber')

    if (signin.value == "") {
        document.getElementById('contactrequired').style.display = "block";
        return true;
    }
    else {
        document.getElementById('contactrequired').style.display = "none";
        return true;
    }

}
function mail2func() {

    var Form = document.getElementById("secondform2");
    var Email = document.getElementById('secondemail').value;
    document.getElementById('emailrequired2').style.display = "none";



    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (Email.match(pattern)) {
        document.getElementById('email3').style.display = "none";
        document.getElementById('emailrequired2').style.display = "none";


    }
    else {
        document.getElementById('email3').style.display = "block";
        document.getElementById('email4').style.display = "none";

        Form.classList.remove("valid");
        Form.classList.add("invalid");

    }
}
var entry = document.getElementById('button1')
entry.addEventListener('click', show2)

function show2() {

    document.getElementById('email4').style.display = "none";
    var uname = document.getElementById('secondname').value
    var mail2 = document.getElementById('secondemail').value
    var pass2 = document.getElementById('secondpassword').value
    var contact = document.getElementById('secondnumber').value

    var validate = true;
    var Form = document.getElementById("secondform2");
    var Email = document.getElementById('secondemail').value;

    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!Email.match(pattern)) {
        document.getElementById('email3').style.display = "block";
        document.getElementById('emailrequired2').style.display = "none";
        validate = false;
    }
    if (mail2 == '') {
        document.getElementById('emailrequired2').style.display = "block";
        document.getElementById('email3').style.display = "none";
        document.getElementById('email4').style.display = "none";
        validate = false;
    }
    if (pass2 == '') {
        document.getElementById('passwordrequired2').style.display = "block";
        validate = false;
    }
    if (uname == '') {
        document.getElementById('userrequired').style.display = "block";
        validate = false;
    }
    if (contact == '') {
        document.getElementById('contactrequired').style.display = "block";
        validate = false;
    }

    if (validate == false) {
        return false;
    }
    else {
        validate = true;
        setTimeout(function(){
            $('#login-bottom').modal('hide'); $('#login-popup').modal('show');

            swal("Registration completed Successfully !", "", "success");  
            location.reload();
       },4000);
    }
}
// for form1
function hellofirstform() {
    var signin = document.getElementById('email')

    if (signin.value == "") {
        document.getElementById('emailrequired').style.display = "block";
        return true;
    }
    else {
        document.getElementById('emailrequired').style.display = "none";
        return true;
    }
}
function passfirstform() {
    var signin = document.getElementById('password')

    if (signin.value == "") {
        document.getElementById('email2').style.display = "none";
        document.getElementById('passwordrequired').style.display = "block";
        return true;
    }
    else {
        document.getElementById('passwordrequired').style.display = "none";
        return true;
    }
}
function emailkeyfunc() {

    var Form = document.getElementById("firstf");
    var Email = document.getElementById('email').value;
    document.getElementById('emailrequired').style.display = "none";

    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (Email.match(pattern)) {
        document.getElementById('email1').style.display = "none";
        document.getElementById('emailrequired').style.display = "none";
    }
    else {
        document.getElementById('email1').style.display = "block";
        document.getElementById('email2').style.display = "none";
        Form.classList.remove("valid");
        Form.classList.add("invalid");
    }
}

var entry = document.getElementById('button')
entry.addEventListener('click', show)
function show() {
    var mail = document.getElementById('email').value
    var pass = document.getElementById('password').value
    var validate = true;

    var Form = document.getElementById("firstf");
    var Email = document.getElementById('email').value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!Email.match(pattern)) {
        document.getElementById('email1').style.display = "block";
        document.getElementById('emailrequired').style.display = "none";
        validate = false;
    }
    if (mail == '') {

        document.getElementById('emailrequired').style.display = "block";
        document.getElementById('email1').style.display = "none";
        validate = false;
    }
    if (pass == '') {
        document.getElementById('passwordrequired').style.display = "block";
        validate = false;
    }
    if (validate == false) {
        return false;
    }
    else {
        validate = true;
        setTimeout(function(){
            $('#login-popup').modal('hide');
            swal("Login Successfully !", "", "success");
            location.reload();
            
       },4000);
       
    
    }
}

fetch("bikes.json")
    .then(function (response) {
        return response.json();
    })

    .then(function (products) {
        let output = document.querySelector(".products-slider");
        let out = "";
        for (let product of products) {
            out += `
            <div class="products-slider nav-2 owl-carousel owl-theme owl-center owl-loaded">
            <div class="owl-item cloned active" style="width: 337.25px; margin-right: 0px;">
                
                <div class="product">
                <div class="product-media">
                    <img src="${product.images}" alt="" />
                </div>
                <div class="product-content">
                    <h3> <a href="single-product.html" class="title-2">${product.Name}</a> </h3>
                    <p class="font-2">Start from <span class="thm-clr">${product.price}  </span> </p>
                </div>
                </div> </div> </div>`;
        }
        output.innerHTML = out;
        console.log(out);
    }
    )
