var localstorageRegRecord =
  JSON.parse(localStorage.getItem("register_input")) ?? [];

var regexx = document.querySelectorAll(".registerUser");
regexx.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var fname = document.getElementById("exampleFirstName").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "exampleFirstName" && !fname.match(regex)) {
      document.getElementById("correctFname").style.display = "block";
      document.getElementById("requiredFname").style.display = "none";
    } else {
      document.getElementById("correctFname").style.display = "none";
      document.getElementById("requiredFname").style.display = "none";
    }

    var lname = document.getElementById("exampleLastName").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "exampleLastName" && !lname.match(regex)) {
      document.getElementById("correctLname").style.display = "block";
      document.getElementById("requiredLname").style.display = "none";
    } else {
      document.getElementById("correctLname").style.display = "none";
      document.getElementById("requiredLname").style.display = "none";
    }

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

    var email = document.getElementById("exampleInputEmail").value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.id == "exampleInputEmail" && !email.match(pattern)) {
      document.getElementById("correctEmail").style.display = "block";
      document.getElementById("requiredEmail").style.display = "none";
    } else {
      document.getElementById("correctEmail").style.display = "none";
      document.getElementById("requiredEmail").style.display = "none";
    }
  });
});

var allevent = document.querySelectorAll(".registerUser");
allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (
      e.target.id == "exampleInputEmail" &&
      document.getElementById("exampleInputEmail").value == ""
    ) {
      document.getElementById("requiredEmail").style.display = "block";
      document.getElementById("correctEmail").style.display = "none";
    } else {
      document.getElementById("requiredEmail").style.display = "none";
    }

    if (
      e.target.id == "exampleInputPassword" &&
      document.getElementById("exampleInputPassword").value == ""
    ) {
      document.getElementById("requiredPassword").style.display = "block";
      document.getElementById("correctPassword").style.display = "none";
    } else {
      document.getElementById("requiredPassword").style.display = "none";
    }

    if (
      e.target.id == "exampleFirstName" &&
      document.getElementById("exampleFirstName").value == ""
    ) {
      document.getElementById("requiredFname").style.display = "block";
      document.getElementById("correctFname").style.display = "none";
    } else {
      document.getElementById("requiredFname").style.display = "none";
    }
    if (
      e.target.id == "exampleLastName" &&
      document.getElementById("exampleLastName").value == ""
    ) {
      document.getElementById("requiredLname").style.display = "block";
      document.getElementById("correctLname").style.display = "none";
    } else {
      document.getElementById("requiredLname").style.display = "none";
    }
  });
});

var register = document.getElementById("register");
register.addEventListener("click", registerUser);

function registerUser(e) {
  var val = true;
  e.preventDefault();
  var firstName = document.getElementById("exampleFirstName").value;
  var lastName = document.getElementById("exampleLastName").value;
  var email = document.getElementById("exampleInputEmail").value;
  var password = document.getElementById("exampleInputPassword").value;

  var fname = document.getElementById("exampleFirstName").value;
  var regex = /^[a-zA-Z ]{2,30}$/;
  if (!fname.match(regex)) {
    document.getElementById("correctFname").style.display = "block";
    document.getElementById("requiredFname").style.display = "none";
    val = false;
  }

  var lname = document.getElementById("exampleLastName").value;
  var regex = /^[a-zA-Z ]{2,30}$/;
  if (!lname.match(regex)) {
    document.getElementById("correctLname").style.display = "block";
    document.getElementById("requiredLname").style.display = "none";
    val = false;
  }

  var passtrong = document.getElementById("exampleInputPassword").value;
  var regex1 =
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
  if (!passtrong.match(regex1)) {
    document.getElementById("correctPassword").style.display = "block";
    document.getElementById("requiredPassword").style.display = "none";
    val = false;
  }

  var email = document.getElementById("exampleInputEmail").value;
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(pattern)) {
    document.getElementById("correctEmail").style.display = "block";
    document.getElementById("requiredEmail").style.display = "none";
    val = false;
  }

  if (firstName == "") {
    document.getElementById("requiredFname").style.display = "block";
    document.getElementById("correctFname").style.display = "none";
    val = false;
  }

  if (lastName == "") {
    document.getElementById("requiredLname").style.display = "block";
    document.getElementById("correctLname").style.display = "none";
    val = false;
  }

  if (localstorageRegRecord != null) {
    localstorageRegRecord.filter((data) => {
      if (
        data.email.includes(email) == true &&
        firstName != "" &&
        lastName != "" &&
        email != "" &&
        password != ""
      ) {
        swal("Please login !", "", "error");
        setTimeout(function () {
          location.reload();
        }, 2000);

        val = false;
      }
    });
  }
  if (password == "") {
    document.getElementById("requiredPassword").style.display = "block";
    document.getElementById("correctPassword").style.display = "none";
    val = false;
  }

  if (email == "") {
    document.getElementById("requiredEmail").style.display = "block";
    document.getElementById("correctEmail").style.display = "none";
    val = false;
  }

  if (val === false) {
    return false;
  } else {
    swal("Registation Successfully !", "", "success");

    setTimeout(function () {
      location.href = "index.html";
    }, 2000);

    var localId = localstorageRegRecord.length + 1;

    var localObject = {
      id: localId,
      fname: document.getElementById("exampleFirstName").value,
      lname: document.getElementById("exampleLastName").value,
      email: document.getElementById("exampleInputEmail").value,
      password: document.getElementById("exampleInputPassword").value,
    };

    localstorageRegRecord.push(localObject);
    localStorage.setItem(
      "register_input",
      JSON.stringify(localstorageRegRecord)
    );
  }
}
