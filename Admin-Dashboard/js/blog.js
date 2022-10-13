function logout() {
  window.localStorage.removeItem('login_input')}

var blogArray = JSON.parse(localStorage.getItem("blog-records"));

var loginUser = JSON.parse(localStorage.getItem("login_input"));
document.getElementById("profileName").innerHTML =
  loginUser.fname + " " + loginUser.lname;

// validation of add modal //

var regex = document.querySelectorAll(".allEvent");
regex.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var title = document.getElementById("title").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "title" && !title.match(regex)) {
      document.getElementById("title_error_msg").style.display = "block";
      document.getElementById("titleRequired").style.display = "none";
    } else {
      document.getElementById("title_error_msg").style.display = "none";
      document.getElementById("titleRequired").style.display = "none";
    }

    var body = document.getElementById("body").value;
    var pattern = /^(?:\b\w+\b[\s\r\n]*){1,3}$/;

    if (e.target.id == "body" && !body.match(pattern)) {
      document.getElementById("bodyRequired").style.display = "none";
    } else {
      document.getElementById("body_error_msg").style.display = "none";
      document.getElementById("bodyRequired").style.display = "none";
    }

    var image = document.getElementById("image").value;
    var regex = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/ 
    if (e.target.id == "image" && !image.match(regex)) {
      document.getElementById("image_error_msg").style.display = "block";
      document.getElementById("imageRequired").style.display = "none";
    } else {
      document.getElementById("image_error_msg").style.display = "none";
      document.getElementById("imageRequired").style.display = "none";
    }
  });
});



function upperCase(title){
 return title[0].toUpperCase() + title.slice(1)
}

var tableInfo = ""; 
const renderTable = (data) => {
  data.forEach((blogs) => {
    var blog_truncate = text_truncate(blogs.body, blogs.blog_slug);
    tableInfo += `
   <tr id="blog_${blogs.id}">
    <td style="text-align:center"> <img class="img-fluid" src="${blogs.image}"style="font-size:10px;width: 50px;"></a></td>
    <td style="text-align:center"><a href="blog-details.html?blog_slug=${blogs.blog_slug}" style="color:gray;">${upperCase(blogs.title)}</a></td>
    <td>${blog_truncate} <a href="blog-details.html?blog_slug=${blogs.blog_slug}">Read More</a></td>
    <td style="text-align:center"><a onclick="updaterecord(${blogs.id})" href="javascript:;"><i class="fa-solid fa-pen-to-square" style="color:green"></i></a> |
    <a onclick="deletedata(${blogs.id})" href="javascript:;" data-id="${blogs.id}" ><i class="fa-sharp fa-solid fa-trash" style="color:red"></i></a></td>
    </tr>`;
  });
  return (document.getElementById("customtable").innerHTML = tableInfo);
};
if (blogArray != null) {
  renderTable(blogArray);
}


// pagination
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("customtable").rows;
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const paginationLimit = 5;
const pageCount =
  blogArray != null ? Math.ceil(blogArray.length / paginationLimit) : 0;
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

var allevent = document.querySelectorAll(".allEvent");
allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (
      e.target.id == "image" &&
      document.getElementById("image").value == ""
    ) {
      document.getElementById("imageRequired").style.display = "block";
    } else {
      document.getElementById("imageRequired").style.display = "none";
    }

    if (
      e.target.id == "title" &&
      document.getElementById("title").value == ""
    ) {
      document.getElementById("titleRequired").style.display = "block";
    } else {
      document.getElementById("titleRequired").style.display = "none";
    }

    if (e.target.id == "body" && document.getElementById("body").value == "") {
      document.getElementById("bodyRequired").style.display = "block";
    } else {
      document.getElementById("bodyRequired").style.display = "none";
    }
  });
});

var submit = document.getElementById("btnSubmit");
submit.addEventListener("click", submitBlog);

function submitBlog() {
  var val = true;
  var image = document.getElementById("image").value;
  var body = document.getElementById("body").value;
  var title = document.getElementById("title").value;
  
 
  
  title = title.toLowerCase();
  key = title.replace(/ /g, "_");

  if (image == "") {
    document.getElementById("imageRequired").style.display = "block";
    val = false;
  }

  if (title == "") {
    document.getElementById("titleRequired").style.display = "block";
    val = false;
  }

  var title = document.getElementById("title").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (!title.match(regex)) {
      document.getElementById("title_error_msg").style.display = "block";
      document.getElementById("titleRequired").style.display = "none";
      val = false;
    } 

    var image = document.getElementById("image").value;
    var regex =  /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/ 
    if ( !image.match(regex)) {
      document.getElementById("image_error_msg").style.display = "block";
      document.getElementById("imageRequired").style.display = "none";
      val = false
    } 
    
  if (body == "") {
    document.getElementById("bodyRequired").style.display = "block";
    val = false;
  }

  if (val === false) {
    return false;
  } else {
    location.reload();
    var uppercase_title = upperCase(title)
    var localStorageBlog =
      JSON.parse(localStorage.getItem("blog-records")) ?? [];
    var localId = localStorageBlog.length + 1;

    var localObject = {
      id: localId,
      image: document.getElementById("image").value,
      body: document.getElementById("body").value,
      title: uppercase_title,
      blog_slug: key,
    };

    localStorageBlog.push(localObject);
    localStorage.setItem("blog-records", JSON.stringify(localStorageBlog));
  }
}

// delete data //

function deletedata(blogId) {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover your Blog!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      for (var i = 0; i < blogArray.length; i++) {
        if (blogArray[i].id === blogId) {
          blogArray.splice(i, 1);
          const elementdelete = document.getElementById("blog_" + blogId);
          elementdelete.remove();
          localStorage.setItem("blog-records", JSON.stringify(blogArray));
          swal(" blog successfully deleted!", {
            icon: "success",
          });
        }
      }
    } else {
      swal("Your blog is safe!");
    }
  });
}

// // update data //

function updaterecord(blogId) {
  for (var i = 0; i < blogArray.length; i++) {
    if (blogArray[i].id === blogId) {
      document.getElementById("update_image").value = blogArray[i].image;
      document.getElementById("update_body").value = blogArray[i].body;
      document.getElementById("update_title").value = blogArray[i].title;
      document.getElementById("blogId").value = blogId;
      var element = document.getElementById("imageBlog");
      element.src =blogArray[i].image
      
      $("#updateUserModel").modal("show");
    }
  }
}

const updateData = JSON.parse(localStorage.getItem("blog-records"));

var regex = document.querySelectorAll(".updateEvent");
regex.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var image = document.getElementById("update_image").value;
    var regex =  /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg|svg)\??.*$/gmi 
    if (e.target.id == "update_image" && !image.match(regex)) {
      document.getElementById("update_image_error").style.display = "block";
      document.getElementById("requiredImage").style.display = "none";
    } else {
      document.getElementById("update_image_error").style.display = "none";
      document.getElementById("requiredImage").style.display = "none";
    }

    var title = document.getElementById("update_title").value;
    var pattern = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "update_title" && !title.match(pattern)) {
      document.getElementById("update_title_error").style.display = "block";
      document.getElementById("requiredTitle").style.display = "none";
    } else {
      document.getElementById("update_title_error").style.display = "none";
      document.getElementById("requiredTitle").style.display = "none";
    }
  });
});

var allevent = document.querySelectorAll(".updateEvent");
allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (
      e.target.id == "update_body" &&
      document.getElementById("update_body").value == ""
    ) {
      document.getElementById("requiredBody").style.display = "block";
    } else {
      document.getElementById("requiredBody").style.display = "none";
    }

    if (
      e.target.id == "update_image" &&
      document.getElementById("update_image").value == ""
    ) {
      document.getElementById("requiredImage").style.display = "block";
    } else {
      document.getElementById("requiredImage").style.display = "none";
    }

    if (
      e.target.id == "update_title" &&
      document.getElementById("update_title").value == ""
    ) {
      document.getElementById("requiredTitle").style.display = "block";
    } else {
      document.getElementById("requiredTitle").style.display = "none";
    }
  });
});

document.getElementById("submit_updateModel").onclick = function () {
  var val = true;
  var image = document.getElementById("update_image").value;
  var body = document.getElementById("update_body").value;


  var title = document.getElementById("update_title").value;
  if (image == "") {
    document.getElementById("requiredImage").style.display = "block";
    val = false;
  }

  if (body == "") {
    document.getElementById("requiredBody").style.display = "block";
    val = false;
  }
  
  var title = document.getElementById("update_title").value;
  var pattern = /^[a-zA-Z ]{2,30}$/;
  if (!title.match(pattern)) {
    document.getElementById("update_title_error").style.display = "block";
    document.getElementById("requiredTitle").style.display = "none";
    val = false;
  }

  if (title == "") {
    document.getElementById("requiredTitle").style.display = "block";
    val = false;
  }

  if (val === false) {
    return false;
  } else {
    var blogId = document.getElementById("blogId").value;

    updateData.map((blog) => {
      if (parseInt(blogId) === blog.id) {
        blog.image = document.getElementById("update_image").value;
        blog.body = document.getElementById("update_body").value;
        blog.title = document.getElementById("update_title").value;
        blog.blog_slug = title.replace(/ /g, "_");

        localStorage.setItem("blog-records", JSON.stringify(updateData));
        $("#updateUserModel").modal("hide");
        location.reload();
      }
    });
  }
};

// // search blog //

var submitSearch = document.getElementById("searchButton");
submitSearch.addEventListener("click", searchBlog);

function searchBlog() {
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

    filteredData = blogArray?.filter((blog) => {
      const title = blog.title.toLowerCase();

      if (title.includes(filter)) {
        return title?.includes(filter.toLowerCase());
      } else {
        document.getElementById("dontDisplay").style.display = "none";
      }
    });

    if (!filteredData.length) {
      document.getElementById("noDataFound").style.display = "block";
    }

   
   tableInfo=''
   document.getElementById("customtable").innerHTML = tableInfo
   renderTable(filteredData)
   
  }
}

function text_truncate(str, blog_slug, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = `.... `;
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}
