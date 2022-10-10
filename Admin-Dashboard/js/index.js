var regexx = document.querySelectorAll(".formValidation");
regexx.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var passtrong = document.getElementById("exampleInputPassword").value;
    var regex1 =
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    if (e.target.id == "exampleInputPassword" && !passtrong.match(regex1)) {
      document.getElementById("correctPassword").style.display = "block";
      document.getElementById("requiredPassword").style.display = "none";
    } else {
      document.getElementById("correctPassword").style.display = "none";
      document.getElementById("requiredPassword").style.display = "none";
    }

    var Email = document.getElementById("exampleInputEmail").value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.id == "exampleInputEmail" && !Email.match(pattern)) {
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
      e.target.id == "exampleInputEmail" &&
      document.getElementById("exampleInputEmail").value == ""
    ) {
      document.getElementById("requiredEmail").style.display = "block";
    } else {
      document.getElementById("requiredEmail").style.display = "none";
    }

    if (
      e.target.id == "exampleInputPassword" &&
      document.getElementById("exampleInputPassword").value == ""
    ) {
      document.getElementById("requiredPassword").style.display = "block";
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
  var email = document.getElementById("exampleInputEmail").value;
  var password = document.getElementById("exampleInputPassword").value;

  if (password == "") {
    document.getElementById("requiredPassword").style.display = "block";
    val = false;
  }

  if (email == "") {
    document.getElementById("requiredEmail").style.display = "block";
    val = false;
  }

 
  if (val === false) {
    return false;
  } else {
    var localstorageRegRecord = JSON.parse(
      localStorage.getItem("register_input")
    );

    localstorageRegRecord.filter((user) => {
      if (user.email == email && user.password == password) {
        swal("login Successfully !", "", "success");

        setTimeout(function () {
          location.href = "dashboard.html";
        }, 1000);

        var localObject = {
          id: 1,
          email: document.getElementById("exampleInputEmail").value,
          fname: user.fname,
          lname: user.lname,
          password: user.password,
        };

        localStorage.setItem("login_input", JSON.stringify(localObject));
      } else {
        swal("login failed !", "", "error");
      }
    });
  }
}
