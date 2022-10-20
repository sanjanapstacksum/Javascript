function logout() {
  window.localStorage.removeItem("login_input");
}

var blogArray = JSON.parse(localStorage.getItem("blog-records"));
var loginUser = JSON.parse(localStorage.getItem("login_input"));

// function for subString //
function upperCase(title) {
  return title[0].toUpperCase() + title.slice(1);
}

// render table //
var tableInfo = "";
const renderTable = (data) => {
  data.forEach((blogs) => {
    var blog_truncate = text_truncate(blogs.body, blogs.blog_slug);
    tableInfo += `
   <tr id="blog_${blogs.id}">
    <td style="text-align:center"> <img class="img-fluid rounded" src="${
      blogs.image
    }"style="font-size:10px;width: 60px;"></a></td>
    <td style="text-align:center"><a href="blog-details.html?blog_slug=${
      blogs.blog_slug
    }" style="color:gray;">${upperCase(blogs.title)}</a></td>
    <td>${blog_truncate} <a href="blog-details.html?blog_slug=${
      blogs.blog_slug
    }">Read More</a></td>
    <td style="text-align:center"><a href="blog-edit.html?blog_slug=${
      blogs.blog_slug
    }"><i class="fa-solid fa-pen-to-square" style="color:green"></i></a> |
    <a onclick="deletedata(${blogs.id})" href="javascript:;" data-id="${
      blogs.id
    }" ><i class="fa-sharp fa-solid fa-trash" style="color:red"></i></a></td>
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
    console.log(blogArray);
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
//pagination end //

var allevent = document.querySelectorAll(".allEvent");
allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (
      e.target.id == "image" &&
      document.getElementById("image").value == ""
    ) {
      document.getElementById("imageRequired").style.display = "block";
      document.getElementById("image_error_msg").style.display = "none";
    } else {
      document.getElementById("imageRequired").style.display = "none";
    }

    if (
      e.target.id == "title" &&
      document.getElementById("title").value == ""
    ) {
      document.getElementById("titleRequired").style.display = "block";
      document.getElementById("title_error_msg").style.display = "none";
    } else {
      document.getElementById("titleRequired").style.display = "none";
    }

    if (
      e.target.id == "description" &&
      document.getElementById("description").value == ""
    ) {
      document.getElementById("descriptionRequired").style.display = "block";
      document.getElementById("description_error").style.display = "none";
    } else {
      document.getElementById("descriptionRequired").style.display = "none";
    }
  });
});

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

 // search blog //

var submitSearch = document.getElementById("searchButton");
submitSearch.addEventListener("click", searchBlog);

function searchBlog() {
  var search = document.getElementById("search").value;

  if (!search) {
    location.reload();
  } else {
    var input = document.getElementById("search");
    var filter = input.value;
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

    tableInfo = "";
    document.getElementById("customtable").innerHTML = tableInfo;
    renderTable(filteredData);
  }
}

function text_truncate(blog_description, blog_slug, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = `.... `;
  }
  if (blog_description.length > length) {
    return blog_description.substring(0, length - ending.length) + ending;
  } else {
    return blog_description;
  }
}
