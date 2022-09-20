const userdata = JSON.parse(localStorage.getItem("user_records"));

// validation of add modal//

var submit = document.getElementById("btn1");
submit.addEventListener("click", subfunc);

var regexx = document.querySelectorAll(".allEvent");
regexx.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var name = document.getElementById("name").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "name" && !name.match(regex)) {
      document.getElementById("correctName").style.display = "block";
      document.getElementById("firstnameIconStatus").style.display = "none";
    } else {
      document.getElementById("correctName").style.display = "none";
      document.getElementById("firstnameIconStatus").style.display = "none";
    }

    var Email = document.getElementById("email").value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.id == "email" && !Email.match(pattern)) {
      document.getElementById("emailllfun").style.display = "block";
      document.getElementById("emailfun").style.display = "none";
    } else {
      document.getElementById("emailllfun").style.display = "none";
      document.getElementById("emailfun").style.display = "none";
    }

    var fullName = document.getElementById("fullname").value;
    var regex = /^[a-zA-Z ]{3,30}$/;
    if (e.target.id == "fullname" && !fullName.match(regex)) {
      document.getElementById("correctFullname").style.display = "block";
      document.getElementById("fstatus").style.display = "none";
    } else {
      document.getElementById("correctFullname").style.display = "none";
      document.getElementById("fstatus").style.display = "none";
    }
  });
});
row = 1;
function loadFunction() {
  const userData = JSON.parse(localStorage.getItem("user_records"));
  if (userData.length === 0) {
    document.getElementById("noData").style.display = "block";
  }

  document.getElementById("form").reset();
  document.getElementById("noData").style.display = "none";
  

  for (let values of userData) {
    var delUpdate = `<div><span class=" " ><a onclick="updaterecord(${values.id})" href="update:;"><i class="fa-solid fa-pen-to-square" style="color:green"></i></a></span> &nbsp &nbsp<span class=""><a onclick="deleteRecord(event,${values.id})" href="deleterecord:;" data-id="${values.id}" ><i class="fa-sharp fa-solid fa-trash" style="color:red"></i></a></span></div>`;

    var val = true;
    count = 0;
    var table = document.getElementById("table-add");
    var newRow = table.insertRow(row);
    var cell1 = newRow.insertCell(values[0]);
    var cell2 = newRow.insertCell(values[1]);
    var cell3 = newRow.insertCell(values[2]);
    var cell4 = newRow.insertCell(values[3]);
    var cell5 = newRow.insertCell(values[4]);
    var cell6 = newRow.insertCell(values[5]);

    count = count + 1;

    cell1.innerHTML = values.fname;
    cell2.innerHTML = values.lname;
    cell3.innerHTML = values.email;
    cell4.innerHTML = values.college;
    cell5.innerHTML = values.city;
    cell6.innerHTML = delUpdate;
    row++;
  }
}

var allevent = document.querySelectorAll(".allEvent");

allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (e.target.id == "name" && document.getElementById("name").value == "") {
      document.getElementById("firstnameIconStatus").style.display = "block";
    } else {
      document.getElementById("firstnameIconStatus").style.display = "none";
    }

    if (
      e.target.id == "email" &&
      document.getElementById("email").value == ""
    ) {
      document.getElementById("emailfun").style.display = "block";
    } else {
      document.getElementById("emailfun").style.display = "none";
    }

    if (
      e.target.id == "fullname" &&
      document.getElementById("fullname").value == ""
    ) {
      document.getElementById("fstatus").style.display = "block";
    } else {
      document.getElementById("fstatus").style.display = "none";
    }

    if (
      e.target.id == "college" &&
      document.getElementById("college").value == ""
    ) {
      document.getElementById("collegefun").style.display = "block";
    } else {
      document.getElementById("collegefun").style.display = "none";
    }

    if (e.target.id == "city" && document.getElementById("city").value == "") {
      document.getElementById("cityfun").style.display = "block";
    } else {
      document.getElementById("cityfun").style.display = "none";
    }
  });
});

var row = 1;
function subfunc(e) {
  var val = true;
  var Name = document.getElementById("name").value;
  var Email = document.getElementById("email").value;
  var Fullname = document.getElementById("fullname").value;
  var college = document.getElementById("college").value;
  var city = document.getElementById("city").value;

  if (Name == "") {
    document.getElementById("firstnameIconStatus").style.display = "block";
    val = false;
  }

  if (Email == "") {
    document.getElementById("emailfun").style.display = "block";
    val = false;
  }

  if (Fullname == "") {
    document.getElementById("fstatus").style.display = "block";
    val = false;
  }

  if (college == "") {
    document.getElementById("collegefun").style.display = "block";
    val = false;
  }

  if (city == "") {
    document.getElementById("cityfun").style.display = "block";
    val = false;
  }

  if (val === false) {
    return false;
  } else {
    // add user_records//

    location.reload();
    var localstorageArr = JSON.parse(localStorage.getItem("user_records")) ?? [];
    var localId = localstorageArr.length + 1;
    

    var localObject = {
      id: localId,
      fname: document.getElementById("name").value,
      lname: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      college: document.getElementById("college").value,
      city: document.getElementById("city").value,
    };
    
    document.getElementById("form").reset();
    localstorageArr.push(localObject);
    localStorage.setItem("user_records", JSON.stringify(localstorageArr));
  }
}

// delete user_records//

let deleteRecord = (event, recordId) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover your data!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      for (var i = 0; i < userdata.length; i++) {
        if (userdata[i].id === recordId) {
          userdata.splice(i, 1);
          const elementdelete = document.getElementById("s" + recordId);
          localStorage.setItem("user_records", JSON.stringify(userdata));
        }
      }
      location.reload();
    } else {
      swal("Your Blog is safe!");
    }
  });
};

// update user_records//

function updaterecord(userId) {
  for (var i = 0; i < userdata.length; i++) {
    if (userdata[i].id === userId) {
      document.getElementById("update_name").value = userdata[i].fname;
      document.getElementById("update_fullname").value = userdata[i].lname;
      document.getElementById("update_email").value = userdata[i].email;
      document.getElementById("update_college").value = userdata[i].college;
      document.getElementById("update_city").value = userdata[i].city;
      document.getElementById("userId").value = userId;
      $("#updateUserModel").modal("show");
    }
  }
}

const updateDataValue = JSON.parse(localStorage.getItem("user_records"));

// validation of edit modal //

var regexx = document.querySelectorAll(".updateEvent");
regexx.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var name = document.getElementById("update_name").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "update_name" && !name.match(regex)) {
      document.getElementById("CorrectName").style.display = "block";
      document.getElementById("requiredName").style.display = "none";
    } else {
      document.getElementById("CorrectName").style.display = "none";
      document.getElementById("requiredName").style.display = "none";
    }

    var Email = document.getElementById("update_email").value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.id == "update_email" && !Email.match(pattern)) {
      document.getElementById("CorrectEmail").style.display = "block";
      document.getElementById("requiredEmail").style.display = "none";
    } else {
      document.getElementById("emailllfun").style.display = "none";
      document.getElementById("requiredEmail").style.display = "none";
    }

    var fullName = document.getElementById("update_fullname").value;
    var regex = /^[a-zA-Z ]{3,30}$/;
    if (e.target.id == "update_fullname" && !fullName.match(regex)) {
      document.getElementById("CorrectFullname").style.display = "block";
      document.getElementById("requiredFullname").style.display = "none";
    } else {
      document.getElementById("CorrectFullname").style.display = "none";
      document.getElementById("requiredFullname").style.display = "none";
    }
  });
});

var allevent = document.querySelectorAll(".updateEvent");

allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (
      e.target.id == "update_name" &&
      document.getElementById("update_name").value == ""
    ) {
      document.getElementById("requiredName").style.display = "block";
    } else {
      document.getElementById("requiredName").style.display = "none";
    }

    if (
      e.target.id == "update_email" &&
      document.getElementById("update_email").value == ""
    ) {
      document.getElementById("requiredEmail").style.display = "block";
    } else {
      document.getElementById("requiredEmail").style.display = "none";
    }

    if (
      e.target.id == "update_fullname" &&
      document.getElementById("update_fullname").value == ""
    ) {
      document.getElementById("requiredFullname").style.display = "block";
    } else {
      document.getElementById("requiredFullname").style.display = "none";
    }

    if (
      e.target.id == "update_college" &&
      document.getElementById("update_college").value == ""
    ) {
      document.getElementById("Collegefun").style.display = "block";
    } else {
      document.getElementById("Collegefun").style.display = "none";
    }

    if (
      e.target.id == "update_city" &&
      document.getElementById("update_city").value == ""
    ) {
      document.getElementById("Cityfun").style.display = "block";
    } else {
      document.getElementById("Cityfun").style.display = "none";
    }
  });
});

document.getElementById("btnModel").onclick = function () {
  var val = true;
  var Name = document.getElementById("update_name").value;
  var Email = document.getElementById("update_email").value;
  var Fullname = document.getElementById("update_fullname").value;
  var college = document.getElementById("update_college").value;
  var city = document.getElementById("update_city").value;

  if (Name == "") {
    document.getElementById("requiredName").style.display = "block";
    val = false;
  }

  if (Email == "") {
    document.getElementById("requiredEmail").style.display = "block";
    val = false;
  }

  if (Fullname == "") {
    document.getElementById("requiredFullname").style.display = "block";
    val = false;
  }

  if (college == "") {
    document.getElementById("Collegefun").style.display = "block";
    val = false;
  }

  if (city == "") {
    document.getElementById("Cityfun").style.display = "block";
    val = false;
  }

  if (val === false) {
    return false;
  } else {
    var userId = document.getElementById("userId").value;
    updateDataValue.map((user) => {
      if (parseInt(userId) === user.id) {
        user.fname = document.getElementById("update_name").value;
        user.lname = document.getElementById("update_fullname").value;
        user.email = document.getElementById("update_email").value;
        user.college = document.getElementById("update_college").value;
        user.city = document.getElementById("update_city").value;

        localStorage.setItem("user_records", JSON.stringify(updateDataValue));
        $("#updateUserModel").modal("hide");
        location.reload();
      }
    });
  }
};
