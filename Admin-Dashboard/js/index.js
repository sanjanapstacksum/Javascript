var formValidation = document.querySelectorAll(".formValidation");
formValidation.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var password = document.getElementById("password").value;
    var regex1 =
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    if (e.target.id == "password" && !password.match(regex1)) {
      document.getElementById("correctPassword").style.display = "block";
      document.getElementById("requiredPassword").style.display = "none";
    } else {
      document.getElementById("correctPassword").style.display = "none";
      document.getElementById("requiredPassword").style.display = "none";
    }

    var email = document.getElementById("email").value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.id == "email" && !email.match(pattern)) {
      document.getElementById("correctEmail").style.display = "block";
      document.getElementById("requiredEmail").style.display = "none";
    } else {
      document.getElementById("correctEmail").style.display = "none";
      document.getElementById("requiredEmail").style.display = "none";
    }
  });
});

var allevent = document.querySelectorAll(".formValidation");
allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (
      e.target.id == "email" &&
      document.getElementById("email").value == ""
    ) {
      document.getElementById("requiredEmail").style.display = "block";
      document.getElementById("correctEmail").style.display = "none";
    } else {
      document.getElementById("requiredEmail").style.display = "none";
    }

    if (
      e.target.id == "password" &&
      document.getElementById("password").value == ""
    ) {
      document.getElementById("requiredPassword").style.display = "block";
      document.getElementById("correctPassword").style.display = "none";
    } else {
      document.getElementById("requiredPassword").style.display = "none";
    }
  });
});

var login = document.getElementById("login");
login.addEventListener("click", loginUser);

function loginUser(e) {
  var val = true;
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var regexEmail =
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
  if (!password.match(regexEmail)) {
    document.getElementById("correctPassword").style.display = "block";
    document.getElementById("requiredPassword").style.display = "none";
    val = false;
  }

  var email = document.getElementById("email").value;
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(pattern)) {
    document.getElementById("correctEmail").style.display = "block";
    document.getElementById("requiredEmail").style.display = "none";
    val = false;
  }

  if (email == "") {
    document.getElementById("requiredEmail").style.display = "block";
    document.getElementById("correctEmail").style.display = "none";
    val = false;
  }
  if (password == "") {
    document.getElementById("requiredPassword").style.display = "block";
    document.getElementById("correctPassword").style.display = "none";
    val = false;
  }

  if (val === false) {
    return false;
  } else {
    var localstorageRegRecord = JSON.parse(
      localStorage.getItem("register_input")
    );
    if(!localstorageRegRecord){
      swal("please register yourself First !", "", "error");
    }

    setTimeout(function () {
      location.reload()
    }, 2000);
    
    var value = true;
    localstorageRegRecord.filter((user) => {
      if (user.email == email && user.password == password) {
        swal("login Successfully !", "", "success");

        setTimeout(function () {
          location.href = "dashboard.html";
        }, 1000);

        var localObject = {
          id: 1,
          email: document.getElementById("email").value,
          fname: user.fname,
          lname: user.lname,
          password: user.password,
          image : "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
          mobileNo : ""
        };
       
        localStorage.setItem("login_input", JSON.stringify(localObject));
        value = false;
      }
      if (value === false) {
        return false;
      } else {
        value = true;
        swal("login failed !", "", "error");
      }
    });
  }
}
