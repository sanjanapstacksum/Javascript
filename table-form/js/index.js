var getData = JSON.parse(localStorage.getItem("users_records"));
var regexx = document.querySelectorAll(".allEvent");

regexx.forEach((e) => {
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

    var Email = document.getElementById("email").value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.id == "email" && !Email.match(pattern)) {
      document.getElementById("correct_email").style.display = "block";
      document.getElementById("emailRequired").style.display = "none";
    } else {
      document.getElementById("correct_email").style.display = "none";
      document.getElementById("emailRequired").style.display = "none";
    }

    var mobileNo = document.getElementById("mobile-no").value;
    var regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (e.target.id == "mobile-no" && !mobileNo.match(regex)) {
      document.getElementById("correct_MobNo").style.display = "block";
      document.getElementById("mobRequired").style.display = "none";
    } else {
      document.getElementById("correct_MobNo").style.display = "none";
      document.getElementById("mobRequired").style.display = "none";
    }
  });
});

var allevent = document.querySelectorAll(".allEvent");
allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (e.target.id == "name" && document.getElementById("name").value == "") {
      document.getElementById("firstName").style.display = "block";
    } else {
      document.getElementById("firstName").style.display = "none";
    }

    if (
      e.target.id == "email" &&
      document.getElementById("email").value == ""
    ) {
      document.getElementById("emailRequired").style.display = "block";
    } else {
      document.getElementById("emailRequired").style.display = "none";
    }

    if (
      e.target.id == "mobile-no" &&
      document.getElementById("mobile-no").value == ""
    ) {
      document.getElementById("mobRequired").style.display = "block";
    } else {
      document.getElementById("mobRequired").style.display = "none";
    }

    if (
      e.target.id == "college" &&
      document.getElementById("college").value == ""
    ) {
      document.getElementById("collegeRequired").style.display = "block";
    } else {
      document.getElementById("collegeRequired").style.display = "none";
    }

    if (e.target.id == "city" && document.getElementById("city").value == "") {
      document.getElementById("cityRequited").style.display = "block";
    } else {
      document.getElementById("cityRequired").style.display = "none";
    }
  });
});

var submit = document.getElementById("btnSubmit");
submit.addEventListener("click", submitUser);
function submitUser() {
  var val = true;
  var Name = document.getElementById("name").value;
  var Email = document.getElementById("email").value;
  var Mobile = document.getElementById("mobile-no").value;
  var college = document.getElementById("college").value;
  var city = document.getElementById("city").value;

  if (Name == "") {
    document.getElementById("firstName").style.display = "block";
    val = false;
  }

  if (Email == "") {
    document.getElementById("emailRequired").style.display = "block";
    val = false;
  }

  if (Mobile == "") {
    document.getElementById("mobRequired").style.display = "block";
    val = false;
  }

  if (college == "") {
    document.getElementById("collegeRequired").style.display = "block";
    val = false;
  }

  if (city == "") {
    document.getElementById("cityRequired").style.display = "block";
    val = false;
  }

  if (val === false) {
    return false;
  } else {
    //data add in local storage //
    localStorageArr = JSON.parse(localStorage.getItem("users_records")) ?? [];
    localId = localStorageArr.length + 1;

    var obj = {
      id: localId,
      fname: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile-no").value,
      city: document.getElementById("city").value,
      college: document.getElementById("college").value,
    };

    localStorageArr.push(obj);
    localStorage.setItem("users_records", JSON.stringify(localStorageArr));
    location.reload();
  }
}

// add data display//

var tableInfo = "";
const renderTable = (data) => {
  data.forEach((users) => {
    tableInfo += `
    <tr id="user_${users.id}">
    <td> ${users.fname}</a></td>
    <td>${users.email}</td>
    <td>${users.mobile}</td>
    <td>${users.city}</td>
    <td>${users.college}</td>
    <td><a onclick="updaterecord(${users.id})" href="update:;"><i class="fa-solid fa-pen-to-square" style="color:green"></i></a> |
    <a onclick="deletedata(${users.id})" href="deletedata:;" data-id="${users.id}" ><i class="fa-sharp fa-solid fa-trash" style="color:red"></i></a></td>
    </tr>`;
  });
  return (document.getElementById("customtable").innerHTML = tableInfo);
};
let result = renderTable(getData);

const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("customtable").rows;
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const paginationLimit = 3;
const pageCount = Math.ceil(getData.length / paginationLimit);
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

// delete data //

function deletedata(userId) {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover your Records!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      for (var i = 0; i < getData.length; i++) {
        if (getData[i].id === userId) {
          getData.splice(i, 1);
          const elementdelete = document.getElementById("user_" + userId);
          elementdelete.remove();

          localStorage.setItem("users_records", JSON.stringify(getData));
          swal(" Blog successfully deleted!", {
            icon: "success",
          });
        }
      }
    } else {
      swal("Your Blog is safe!");
    }
  });
}

//update data //

function updaterecord(userId) {
  for (var i = 0; i < getData.length; i++) {
    if (getData[i].id === userId) {
      document.getElementById("update_name").value = getData[i].fname;
      document.getElementById("update_mobile").value = getData[i].mobile;
      document.getElementById("update_email").value = getData[i].email;
      document.getElementById("update_college").value = getData[i].college;
      document.getElementById("update_city").value = getData[i].city;
      document.getElementById("userId").value = userId;
      $("#updateUserModel").modal("show");
    }
  }
}

const updateData = JSON.parse(localStorage.getItem("users_records"));
// validation of update data//
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

    var Email = document.getElementById("update_email").value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.id == "update_email" && !Email.match(pattern)) {
      document.getElementById("correctEmail").style.display = "block";
      document.getElementById("requiredEmail").style.display = "none";
    } else {
      document.getElementById("correctEmail").style.display = "none";
      document.getElementById("requiredEmail").style.display = "none";
    }

    var fullName = document.getElementById("update_fullname").value;
    var regex = /^[a-zA-Z ]{3,30}$/;
    if (e.target.id == "update_fullname" && !fullName.match(regex)) {
      document.getElementById("correctFullname").style.display = "block";
      document.getElementById("requiredFullname").style.display = "none";
    } else {
      document.getElementById("correctFullname").style.display = "none";
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
      e.target.id == "update_mobile" &&
      document.getElementById("update_mobile").value == ""
    ) {
      document.getElementById("requiredMobile").style.display = "block";
    } else {
      document.getElementById("requiredMobile").style.display = "none";
    }

    if (
      e.target.id == "update_college" &&
      document.getElementById("update_college").value == ""
    ) {
      document.getElementById("required_college").style.display = "block";
    } else {
      document.getElementById("required_college").style.display = "none";
    }

    if (
      e.target.id == "update_city" &&
      document.getElementById("update_city").value == ""
    ) {
      document.getElementById("required_city").style.display = "block";
    } else {
      document.getElementById("required_city").style.display = "none";
    }
  });
});

document.getElementById("btn_modelUpdate").onclick = function () {
  var val = true;
  var Name = document.getElementById("update_name").value;
  var Email = document.getElementById("update_email").value;
  var Fullname = document.getElementById("update_mobile").value;
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
    document.getElementById("requiredMobile").style.display = "block";
    val = false;
  }

  if (college == "") {
    document.getElementById("required_college").style.display = "block";
    val = false;
  }

  if (city == "") {
    document.getElementById("required_city").style.display = "block";
    val = false;
  }

  if (val === false) {
    return false;
  } else {
    var userId = document.getElementById("userId").value;
    updateData.map((user) => {
      if (parseInt(userId) === user.id) {
        user.fname = document.getElementById("update_name").value;
        user.mobile = document.getElementById("update_mobile").value;
        user.email = document.getElementById("update_email").value;
        user.college = document.getElementById("update_college").value;
        user.city = document.getElementById("update_city").value;

        localStorage.setItem("users_records", JSON.stringify(updateData));
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
  var regex = /^[a-zA-Z ]{3,30}$/;
  if (!search.match(regex)) {
    document.getElementById("correctSearchName").style.display = "none";
  } else {
    var input = document.getElementById("search");
    var filter = input.value;
    var table = document.getElementById("customtable");

    searchData = getData?.filter((user) => {
      const fname = user.fname.toLowerCase();

      if (fname.includes(filter)) {
        return fname?.includes(filter.toLowerCase());
      } else {
        document.getElementById("dontDisplay").style.display = "none";
      }
    });

    if (!searchData.length) {
      document.getElementById("noDataFound").style.display = "block";
    }

    var tableData = "";

    const renderTable = (searchData) => {
      searchData.forEach((values) => {
        tableData += `
      <tr id="user_${values.id}">
      <td> ${values.fname}</a></td>
      <td>${values.mobile}</td>
      <td>${values.email}</td>
      <td>${values.college}</td>
      <td>${values.city}</td>
      <td><a onclick="updaterecord(${values.id})" href="update:;"><i class="fa-solid fa-pen-to-square" style="color:green"></i></a> |
      <a onclick="deletedata(${values.id})" href="deletedata:;" data-id="${values.id}" ><i class="fa-sharp fa-solid fa-trash" style="color:red"></i></a></td>
      </tr>`;
      });
      return (document.getElementById("customtable").innerHTML = tableData);
    };
    renderTable(searchData);
  }
}

function deleteAll() {
 
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover your Records!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
       localStorage.clear();
      var clear = document.getElementById("customtable");
      clear.remove();
      document.getElementById("dontDisplay").style.display = "none";
      document.getElementById("noDataFound").style.display = "block";
          swal(" Records successfully deleted!", {
            icon: "success",
          });
        
    } else {
      swal("Your Records are safe!");
    }
  });
}
