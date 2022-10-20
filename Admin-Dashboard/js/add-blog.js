function addBlog() {
  console.log("hello");
  location.href = "add-Blog.html";
}
function logout() {
  window.localStorage.removeItem("login_input");
}

var blogArray = JSON.parse(localStorage.getItem("blog-records"));
var loginUser = JSON.parse(localStorage.getItem("login_input"));

// validation //

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

    var description = document.getElementById("description").value;
    var pattern = /^[a-zA-Z]/;
    if (e.target.id == "description" && !description.match(pattern)) {
      document.getElementById("description_error").style.display = "block";
      document.getElementById("descriptionRequired").style.display = "none";
    } else {
      document.getElementById("description_error").style.display = "none";
      document.getElementById("descriptionRequired").style.display = "none";
    }
  });
});

// function for subString //
function upperCase(title) {
  return title[0].toUpperCase() + title.slice(1);
}

var allevent = document.querySelectorAll(".allEvent");
allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
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

function submitBlog() {
  var value = true;
  var description = document.getElementById("description").value;
  var title = document.getElementById("title").value;

  var description = document.getElementById("description").value;
  var pattern = /^[a-zA-Z]/;
  if (!description.match(pattern)) {
    document.getElementById("description_error").style.display = "block";
    document.getElementById("descriptionRequired").style.display = "none";
    value = false;
  }

  title = title.toLowerCase();
  key = title.replace(/ /g, "_");
  var title = document.getElementById("title").value;
  var regex = /^[a-zA-Z ]{2,30}$/;
  if (!title.match(regex)) {
    document.getElementById("title_error_msg").style.display = "block";
    document.getElementById("titleRequired").style.display = "none";
    value = false;
  }

  if (title == "") {
    document.getElementById("titleRequired").style.display = "block";
    document.getElementById("title_error_msg").style.display = "none";
    value = false;
  }

  if (description == "") {
    document.getElementById("descriptionRequired").style.display = "block";
    document.getElementById("description_error").style.display = "none";
    value = false;
  }

  if (value === false) {
    return false;
  } else {
   
    var uppercase_title = upperCase(title);
    var localStorageBlog =
      JSON.parse(localStorage.getItem("blog-records")) ?? [];
    var localId = localStorageBlog.length + 1;
    var chooseFile = document.getElementById("img-preview");

    var localObject = {
      id: localId,
      image: chooseFile.querySelector("img").currentSrc,
      body: document.getElementById("description").value,
      title: title[0].toUpperCase() + title.slice(1),
      blog_slug: key,
    };

    localStorageBlog.push(localObject);
    localStorage.setItem("blog-records", JSON.stringify(localStorageBlog));
    swal("Blog Added Successfully!", "", "success");
    setTimeout(function () {
      location.reload();
      
    }, 1000);
   
  }
}

// preview Image //
const chooseFile = document.getElementById("choose-file");
const imgPreview = document.getElementById("img-preview");
chooseFile.addEventListener("change", function () {
  getImgData();
});
function getImgData() {
  const files = chooseFile.files[0];

  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      imgPreview.style.display = "block";
      imgPreview.innerHTML = '<img src="' + this.result + '" />';
    });
  }
}
