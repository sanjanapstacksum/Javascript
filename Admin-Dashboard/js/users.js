function logout() {
  window.localStorage.removeItem("login_input");
}
var userArray = JSON.parse(localStorage.getItem("register_input"));
var loginUser = JSON.parse(localStorage.getItem("login_input"));
document.getElementById("profileName").innerHTML =
  loginUser.fname + " " + loginUser.lname;

var tableInfo = "";
const renderTable = (data) => {
  data.forEach((users) => {
    tableInfo += `
   <tr id="user_${users.id}">
    <td> ${users.fname}</a></td>
    <td>${users.lname}</td>
    <td>${users.email}</td>
    <td><a onclick="updaterecord(${users.id})" href="javascript:;"><i class="fa-solid fa-pen-to-square" style="color:green"></i></a> |
    <a onclick="deletedata(${users.id})" href="javascript:;" data-id="${users.id}" ><i class="fa-sharp fa-solid fa-trash" style="color:red"></i></a></td>
    </tr>`;
  });

  return (document.getElementById("customtable").innerHTML = tableInfo);
};
renderTable(userArray);

// pagination//
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("customtable").rows;
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const paginationLimit = 5;
const pageCount = Math.ceil(userArray.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  var rows = Array.from(paginatedList);

  rows.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};
window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });
  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

// validation of add modal //

var formValidation = document.querySelectorAll(".allEvent");

formValidation.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var name = document.getElementById("name").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "name" && !name.match(regex)) {
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
      document.getElementById("emailRequired").style.display = "none";
    } else {
      document.getElementById("correct_email").style.display = "none";
      document.getElementById("emailRequired").style.display = "none";
    }

    var lastName = document.getElementById("lastName").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "lastName" && !lastName.match(regex)) {
      document.getElementById("correct_lastName").style.display = "block";
      document.getElementById("last_name").style.display = "none";
    } else {
      document.getElementById("correct_lastName").style.display = "none";
      document.getElementById("last_name").style.display = "none";
    }

    var password = document.getElementById("password").value;
    var regex1 =
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    if (e.target.id == "password" && !password.match(regex1)) {
      document.getElementById("correct_password").style.display = "block";
      document.getElementById("passwordRequired").style.display = "none";
    } else {
      document.getElementById("correct_password").style.display = "none";
      document.getElementById("passwordRequired").style.display = "none";
    }
  });
});

var allevent = document.querySelectorAll(".allEvent");
allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (e.target.id == "name" && document.getElementById("name").value == "") {
      document.getElementById("firstName").style.display = "block";
      document.getElementById("correct_name").style.display = "none";
    } else {
      document.getElementById("firstName").style.display = "none";
    }

    if (
      e.target.id == "email" &&
      document.getElementById("email").value == ""
    ) {
      document.getElementById("emailRequired").style.display = "block";
      document.getElementById("correct_email").style.display = "none";
    } else {
      document.getElementById("emailRequired").style.display = "none";
    }

    if (
      e.target.id == "lastName" &&
      document.getElementById("lastName").value == ""
    ) {
      document.getElementById("last_name").style.display = "block";
      document.getElementById("correct_lastName").style.display = "none";
    } else {
      document.getElementById("last_name").style.display = "none";
    }

    if (
      e.target.id == "password" &&
      document.getElementById("password").value == ""
    ) {
      document.getElementById("passwordRequired").style.display = "block";
      document.getElementById("correct_password").style.display = "none";
    } else {
      document.getElementById("passwordRequired").style.display = "none";
    }
  });
});

var submit = document.getElementById("btnSubmit");
submit.addEventListener("click", submitUser);
function submitUser() {
  var val = true;
  var name = document.getElementById("name").value;
  var lname = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var password = document.getElementById("password").value;
  var regex1 =
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
  if (password != "" && !password.match(regex1)) {
    document.getElementById("correct_password").style.display = "block";
    val = false;
  }

  var name = document.getElementById("name").value;
  var regex = /^[a-zA-Z ]{2,30}$/;
  if (name != "" && !name.match(regex)) {
    document.getElementById("correct_name").style.display = "block";
    document.getElementById("firstName").style.display = "none";
    val = false;
  }

  var email = document.getElementById("email").value;
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email != "" && !email.match(pattern)) {
    document.getElementById("correct_email").style.display = "block";
    document.getElementById("emailRequired").style.display = "none";
    val = false;
  }

  var lastName = document.getElementById("lastName").value;
  var regex = /^[a-zA-Z ]{2,30}$/;
  if (lastName != "" && !lastName.match(regex)) {
    document.getElementById("correct_lastName").style.display = "block";
    document.getElementById("last_name").style.display = "none";
    val = false;
  }
  if (name == "") {
    document.getElementById("firstName").style.display = "block";
    val = false;
  }

  if (email == "") {
    document.getElementById("emailRequired").style.display = "block";
    document.getElementById("correct_email").style.display = "none";
    val = false;
  }

  if (lname == "") {
    document.getElementById("last_name").style.display = "block";
    val = false;
  }

  if (password == "") {
    document.getElementById("passwordRequired").style.display = "block";
    val = false;
  }

  if (userArray != null) {
    userArray.filter((data) => {
      if (data.email.includes(email) == true) {
        document.getElementById("correct_email").style.display = "block";
        document.getElementById("emailRequired").style.display = "none";
        val = false;
      }
    });
  }

  if (val === false) {
    return false;
  } else {
    var localstorageRegRecord =
      JSON.parse(localStorage.getItem("register_input")) ?? [];
    var localId = localstorageRegRecord.length + 1;

    var localObject = {
      id: localId,
      fname: document.getElementById("name").value,
      lname: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    localstorageRegRecord.push(localObject);
    localStorage.setItem(
      "register_input",
      JSON.stringify(localstorageRegRecord)
    );
    location.reload();
  }
}

// delete data //

function deletedata(userId) {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover your Record!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].id === userId) {
          userArray.splice(i, 1);
          const elementdelete = document.getElementById("user_" + userId);
          elementdelete.remove();
          localStorage.setItem("register_input", JSON.stringify(userArray));
          swal(" Record successfully deleted!", {
            icon: "success",
          });
        }
      }
    } else {
      swal("Your Record is safe!");
    }
  });
}

// update data //

function updaterecord(userId) {
  for (var i = 0; i < userArray.length; i++) {
    if (userArray[i].id === userId) {
      document.getElementById("update_name").value = userArray[i].fname;
      document.getElementById("update_Lname").value = userArray[i].lname;
      document.getElementById("update_email").value = userArray[i].email;
      document.getElementById("update_password").value = userArray[i].password;
      document.getElementById("userId").value = userId;

      $("#updateUserModel").modal("show");
    }
  }
}

const updateData = JSON.parse(localStorage.getItem("register_input"));

var regexx = document.querySelectorAll(".updateEvent");
regexx.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var name = document.getElementById("update_name").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "update_name" && !name.match(regex)) {
      document.getElementById("correctName").style.display = "block";
      document.getElementById("requiredName").style.display = "none";
    } else {
      document.getElementById("correctName").style.display = "none";
      document.getElementById("requiredName").style.display = "none";
    }

    var lname = document.getElementById("update_Lname").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "update_name" && !lname.match(regex)) {
      document.getElementById("correctLname").style.display = "block";
      document.getElementById("requiredLname").style.display = "none";
    } else {
      document.getElementById("correctLname").style.display = "none";
      document.getElementById("requiredLname").style.display = "none";
    }

    var email = document.getElementById("update_email").value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.id == "update_email" && !email.match(pattern)) {
      document.getElementById("correctEmail").style.display = "block";
      document.getElementById("requiredEmail").style.display = "none";
    } else {
      document.getElementById("correctEmail").style.display = "none";
      document.getElementById("requiredEmail").style.display = "none";
    }

    var password = document.getElementById("update_password").value;
    var regex =
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    if (e.target.id == "update_fullname" && !password.match(regex)) {
      document.getElementById("correctPassword").style.display = "block";
      document.getElementById("requiredPassword").style.display = "none";
    } else {
      document.getElementById("correctPassword").style.display = "none";
      document.getElementById("requiredPassword").style.display = "none";
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
      document.getElementById("correctName").style.display = "none";
    } else {
      document.getElementById("requiredName").style.display = "none";
    }

    if (
      e.target.id == "update_email" &&
      document.getElementById("update_email").value == ""
    ) {
      document.getElementById("requiredEmail").style.display = "block";
      document.getElementById("correctEmail").style.display = "none";
    } else {
      document.getElementById("requiredEmail").style.display = "none";
    }

    if (
      e.target.id == "update_Lname" &&
      document.getElementById("update_Lname").value == ""
    ) {
      document.getElementById("requiredLname").style.display = "block";
      document.getElementById("correctLname").style.display = "none";
    } else {
      document.getElementById("requiredLname").style.display = "none";
    }

    if (
      e.target.id == "update_password" &&
      document.getElementById("update_password").value == ""
    ) {
      document.getElementById("requiredPassword").style.display = "block";
      document.getElementById("correctPassword").style.display = "none";
    } else {
      document.getElementById("requiredPassword").style.display = "none";
    }
  });
});

document.getElementById("btn_modelUpdate").onclick = function () {
  var val = true;
  var name = document.getElementById("update_name").value;
  var email = document.getElementById("update_email").value;
  var lname = document.getElementById("update_Lname").value;
  var password = document.getElementById("update_password").value;

  if (name == "") {
    document.getElementById("requiredName").style.display = "block";
    document.getElementById("correctName").style.display = "none";
    val = false;
  }

  if (email == "") {
    document.getElementById("requiredEmail").style.display = "block";
    document.getElementById("correctEmail").style.display = "none";
    val = false;
  }

  if (lname == "") {
    document.getElementById("requiredLname").style.display = "block";
    document.getElementById("correctLname").style.display = "none";
    val = false;
  }

  if (password == "") {
    document.getElementById("requiredPassword").style.display = "block";
    document.getElementById("correctPassword").style.display = "none";
    val = false;
  }

  if (userArray != null) {
    userArray.filter((data) => {
      if (data.email.includes(email) == true) {
        document.getElementById("correctEmail").style.display = "block";

        val = false;
      }
    });
  }

  if (val === false) {
    return false;
  } else {
    var userId = document.getElementById("userId").value;
    updateData.map((user) => {
      if (parseInt(userId) === user.id) {
        user.fname = document.getElementById("update_name").value;
        user.lname = document.getElementById("update_Lname").value;
        user.email = document.getElementById("update_email").value;
        user.password = document.getElementById("update_password").value;
        localStorage.setItem("register_input", JSON.stringify(updateData));
        $("#updateUserModel").modal("hide");
        location.reload();
      }
    });
  }
};

// search user //

var submitSearch = document.getElementById("searchButton");
submitSearch.addEventListener("click", searchUser);

function searchUser() {
  var search = document.getElementById("search").value;

  if (!search) {
    location.reload();
  }
  var regex = /^[a-zA-Z ]{1,30}$/;
  if (!search.match(regex)) {
    document.getElementById("correctSearchName").style.display = "none";
  } else {
    var input = document.getElementById("search");
    var filter = input.value;
    var table = document.getElementById("customtable");
    var tr = table.getElementsByTagName("tr");

    filteredData = userArray?.filter((user) => {
      const fname = user.fname.toLowerCase();

      if (fname.includes(filter)) {
        return fname?.includes(filter.toLowerCase());
      } else {
        document.getElementById("dontDisplay").style.display = "none";
      }
    });

    if (!filteredData.length) {
      document.getElementById("noDataFound").style.display = "block";
    }
    tableInfo = "";
    document.getElementById("customtable").innerHTML = tableInfo;
    renderTable(filteredData);
  }
}
