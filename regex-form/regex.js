
var regexx = document.querySelectorAll('.alleve')
regexx.forEach(e => {

    e.addEventListener('keyup', (e) => {
        var name = document.getElementById('name').value;
        var regex = /^[a-zA-Z ]{2,30}$/;
        if (e.target.id == "name" && !name.match(regex)) {
            document.getElementById('fnameval').style.display = "block"
            document.getElementById('firstnameIconStatus').style.display = "none";
        }
        else {
            document.getElementById('fnameval').style.display = "none";
            document.getElementById('firstnameIconStatus').style.display = "none";
        }

        var Email = document.getElementById('email').value;
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (e.target.id == "email" && !Email.match(pattern)) {
            document.getElementById('emailllfun').style.display = "block";
            document.getElementById('emailfun').style.display = "none";
        }
        else {
            document.getElementById('emailllfun').style.display = "none";
            document.getElementById('emailfun').style.display = "none";
        }

        var name = document.getElementById('fullname').value;
        var regex = /^[a-zA-Z ]{3,30}$/;
        if (e.target.id == "fullname" && !name.match(regex)) {
            document.getElementById('fullnameval').style.display = "block";
            document.getElementById('fstatus').style.display = "none";
        }
        else {
            document.getElementById('fullnameval').style.display = "none";
            document.getElementById('fstatus').style.display = "none";
        }


        var passtrong = document.getElementById('password').value;
        var regex1 = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
        if (e.target.id == "password" && !passtrong.match(regex1)) {
            document.getElementById('passfullval').style.display = "block";
            document.getElementById('passfun').style.display = "none";
        }
        else {
            document.getElementById('passfullval').style.display = "none";
            document.getElementById('passfun').style.display = "none";
        }

        var passtrong = document.getElementById('mobileno').value;
        var regex1 = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/
        if (e.target.id == "mobileno" && !passtrong.match(regex1)) {
            document.getElementById('mobvalid').style.display = "block";
            document.getElementById('mobfun').style.display = "none";
        }
        else {
            document.getElementById('mobvalid').style.display = "none";
            document.getElementById('mobfun').style.display = "none";
        }
    })
})


var alleve = document.querySelectorAll('.alleve')
console.log(alleve)
alleve.forEach(element => {

    element.addEventListener('blur', (e) => {
        console.log(e)

        if (e.target.id == "name" && document.getElementById('name').value == "") {
            document.getElementById('firstnameIconStatus').style.display = "block";
        }
        else {
            document.getElementById('firstnameIconStatus').style.display = "none";

        }

        if (e.target.id == "email" && document.getElementById('email').value == "") {
            document.getElementById('emailfun').style.display = "block";

        }
        else {
            document.getElementById('emailfun').style.display = "none";
        }

        if (e.target.id == "fullname" && document.getElementById('fullname').value == "") {
            document.getElementById('fstatus').style.display = "block";
        }
        else {
            document.getElementById('fstatus').style.display = "none";
        }

        if (e.target.id == "password" && document.getElementById('password').value == "") {
            document.getElementById('passfun').style.display = "block";

        }
        else {
            document.getElementById('passfun').style.display = "none";
        }

        if (e.target.id == "mobileno" && document.getElementById('mobileno').value == "") {
            document.getElementById('mobfun').style.display = "block";

        }
        else {
            document.getElementById('mobfun').style.display = "none";
        }
    });

});

var submit = document.getElementById('btns')
submit.addEventListener('click', subfunc)
function subfunc(e) {
    var val = true
    var Name = document.getElementById('name').value
    var Email = document.getElementById('email').value
    var Fullname = document.getElementById('fullname').value
    var Password = document.getElementById('password').value
    var Mobileno = document.getElementById('mobileno').value
    if (Name == "") {
        document.getElementById('firstnameIconStatus').style.display = "block";
        val = false
    }

    if (Email == "") {
        document.getElementById('emailfun').style.display = "block";
        val = false
    }

    if (Fullname == "") {
        document.getElementById('fstatus').style.display = "block";
        val = false
    }

    if (Password == "") {
        document.getElementById('passfun').style.display = "block";
        val = false
    }

    if (Mobileno == "") {
        document.getElementById('mobfun').style.display = "block";
        val = false
    }

    if(val==false){
        return false;
     }
    else {
        var val = true;
        swal("Login Successfully !", "", "success");
        setTimeout(function () {

            location.reload()
        }, 2000)
    }
}


