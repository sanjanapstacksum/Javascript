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

var allevent = document.querySelectorAll(".registerUser");
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

    if (
      e.target.id == "exampleFirstName" &&
      document.getElementById("exampleFirstName").value == ""
    ) {
      document.getElementById("requiredFname").style.display = "block";
    } else {
      document.getElementById("requiredFname").style.display = "none";
    }
    if (
      e.target.id == "exampleLastName" &&
      document.getElementById("exampleLastName").value == ""
    ) {
      document.getElementById("requiredLname").style.display = "block";
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
  var Fname = document.getElementById("exampleFirstName").value;
  var Lname = document.getElementById("exampleLastName").value;
  var Email = document.getElementById("exampleInputEmail").value;
  var Password = document.getElementById("exampleInputPassword").value;

  if (Password == "") {
    document.getElementById("requiredPassword").style.display = "block";
    val = false;
  }

  if (Email == "") {
    document.getElementById("requiredEmail").style.display = "block";
    val = false;
  }

  if (Fname == "") {
    document.getElementById("requiredFname").style.display = "block";
    val = false;
  }

  if (Lname == "") {
    document.getElementById("requiredLname").style.display = "block";
    val = false;
  }

  if (val === false) {
    return false;
  } else {
    swal("Registation Successfully !", "", "success");

    setTimeout(function () {
      location.href = "index.html";
    }, 2000);

    var localstorageRegRecord =
      JSON.parse(localStorage.getItem("register_input")) ?? [];
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
