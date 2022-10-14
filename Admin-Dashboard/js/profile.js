function logout() {
  window.localStorage.removeItem("login_input");
}
var getData = localStorage.getItem("login_input");
if (getData == null) {
  location.href = "index.html";
}

var getUser = JSON.parse(localStorage.getItem("login_input"));
document.getElementById("profileName").innerHTML =
  getUser.fname + " " + getUser.lname;

document.getElementById("first_name").value = getUser.fname;
document.getElementById("last_name").value = getUser.lname;
document.getElementById("email").value = getUser.email;
document.getElementById("userId").value = getUser.id;
document.getElementById("password").value = getUser.password;

var regexx = document.querySelectorAll(".savaData");

regexx.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var name = document.getElementById("first_name").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "first_name" && !name.match(regex)) {
      document.getElementById("correct_name").style.display = "block";
      document.getElementById("firstName").style.display = "none";
    } else {
      document.getElementById("correct_name").style.display = "none";
      document.getElementById("firstName").style.display = "none";
    }

    var email = document.getElementById("email").value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.id == "email" && !email.match(pattern)) {
      document.getElementById("correct_email").style.display = "block";
      document.getElementById("email_required").style.display = "none";
    } else {
      document.getElementById("correct_email").style.display = "none";
      document.getElementById("email_required").style.display = "none";
    }

    var lastName = document.getElementById("last_name").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "last_name" && !lastName.match(regex)) {
      document.getElementById("correct_lastName").style.display = "block";
      document.getElementById("lastName").style.display = "none";
    } else {
      document.getElementById("correct_lastName").style.display = "none";
      document.getElementById("lastName").style.display = "none";
    }

    var passtrong = document.getElementById("password").value;
    var regex1 =
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    if (e.target.id == "password" && !passtrong.match(regex1)) {
      document.getElementById("correct_password").style.display = "block";
      document.getElementById("password_required").style.display = "none";
    } else {
      document.getElementById("correct_password").style.display = "none";
      document.getElementById("password_required").style.display = "none";
    }
  });
});

var allevent = document.querySelectorAll(".saveData");
allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (
      e.target.id == "first_name" &&
      document.getElementById("first_name").value == ""
    ) {
      document.getElementById("firstName").style.display = "block";
    } else {
      document.getElementById("firstName").style.display = "none";
    }

    if (
      e.target.id == "email" &&
      document.getElementById("email").value == ""
    ) {
      document.getElementById("email_required").style.display = "block";
    } else {
      document.getElementById("email_required").style.display = "none";
    }

    if (
      e.target.id == "last_name" &&
      document.getElementById("last_name").value == ""
    ) {
      document.getElementById("lastName").style.display = "block";
    } else {
      document.getElementById("lastName").style.display = "none";
    }

    if (
      e.target.id == "password" &&
      document.getElementById("password").value == ""
    ) {
      document.getElementById("password_required").style.display = "block";
    } else {
      document.getElementById("password_required").style.display = "none";
    }
  });
});

document.getElementById("save").onclick = function (e) {
  var val = true;
  var name = document.getElementById("first_name").value;
  var lname = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var password = document.getElementById("password").value;
  var regex1 =
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
  if (!password.match(regex1)) {
    document.getElementById("correct_password").style.display = "block";
    document.getElementById("password_required").style.display = "none";
    val = false;
  }

  var email = document.getElementById("email").value;
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(pattern)) {
    document.getElementById("correct_email").style.display = "block";
    document.getElementById("email_required").style.display = "none";

    val = false;
  }

  if (password == "") {
    document.getElementById("password_required").style.display = "block";
    document.getElementById("correct_password").style.display = "none";

    val = false;
  }
  if (name == "") {
    document.getElementById("firstName").style.display = "block";

    val = false;
  }

  if (email == "") {
    document.getElementById("email_required").style.display = "block";
    document.getElementById("correct_email").style.display = "none";
    val = false;
  }

  if (lname == "") {
    document.getElementById("lastName").style.display = "block";
    val = false;
  }

  if (val === false) {
    return false;
  } else {
    var userId = document.getElementById("userId").value;

    if (parseInt(userId) === getUser.id) {
      getUser.fname = document.getElementById("first_name").value;
      getUser.lname = document.getElementById("last_name").value;
      getUser.email = document.getElementById("email").value;
      getUser.password = document.getElementById("password").value;
      swal("saved Successfully !", "", "success");
      localStorage.setItem("login_input", JSON.stringify(getUser));

      e.preventDefault();

      setTimeout(function () {
        location.reload();
      }, 1000);
    }
  }
};

var localstorageRegRecord = JSON.parse(localStorage.getItem("register_input"));

for (var i = 0; i < localstorageRegRecord.length; i++) {
  if (localstorageRegRecord[i].id === userId) {
    document.getElementById("first_name").value =
      localstorageRegRecord[i].fname;
    document.getElementById("last_name").value = localstorageRegRecord[i].lname;
    document.getElementById("email").value = localstorageRegRecord[i].email;
    document.getElementById("password").value =
      localstorageRegRecord[i].password;
    document.getElementById("userId").value = localstorageRegRecord[i].id;
  }
}

var userId = document.getElementById("userId").value;
localstorageRegRecord.map((user) => {
  if (parseInt(userId) === user.id) {
    user.fname = document.getElementById("first_name").value;
    user.lname = document.getElementById("last_name").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    localStorage.setItem(
      "register_input",
      JSON.stringify(localstorageRegRecord)
    );
  }
});
