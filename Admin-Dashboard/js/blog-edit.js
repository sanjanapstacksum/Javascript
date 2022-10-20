var blogArray = JSON.parse(localStorage.getItem("blog-records"));
var loginUser = JSON.parse(localStorage.getItem("login_input"));

var chooseFile = document.getElementById("img-preview");
var objUrlParams = new URLSearchParams(window.location.search);
var blogSlug = objUrlParams.get("blog_slug");

for (var i = 0; i < blogArray.length; i++) {
  var objUrlParams = new URLSearchParams(window.location.search);
  var blogSlug = objUrlParams.get("blog_slug");
  if (blogArray[i].blog_slug == blogSlug) {
    document.getElementById("update_description").value = blogArray[i].body;
    document.getElementById("update_title").value = blogArray[i].title;
    var displayImage = document.getElementById("displayImage");
    displayImage.src = blogArray[i].image;
    document.getElementById("blogBreadcrumb").innerHTML = blogArray[i].title;
  }
}

// validation //

const updateData = JSON.parse(localStorage.getItem("blog-records"));
var regex = document.querySelectorAll(".updateEvent");
regex.forEach((e) => {
  e.addEventListener("keyup", (e) => {
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
      e.target.id == "update_description" &&
      document.getElementById("update_description").value == ""
    ) {
      document.getElementById("requiredDescription").style.display = "block";
    } else {
      document.getElementById("requiredDescription").style.display = "none";
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
  var value = true;
  var description = document.getElementById("update_description").value;
  var title = document.getElementById("update_title").value;

  if (description == "") {
    document.getElementById("requiredDescription").style.display = "block";
    value = false;
  }

  var title = document.getElementById("update_title").value;
  var pattern = /^[a-zA-Z ]{2,30}$/;
  if (!title.match(pattern)) {
    document.getElementById("update_title_error").style.display = "block";
    document.getElementById("requiredTitle").style.display = "none";
    value = false;
  }

  if (title == "") {
    document.getElementById("requiredTitle").style.display = "block";
    value = false;
  }

  if (value === false) {
    return false;
  } else {
    // successfully edited //

    updateData.map((blog) => {
      if (blogSlug === blog.blog_slug) {
        var chooseFile = document.getElementById("img-preview");
        if (chooseFile.innerHTML != "") {
          blog.image = chooseFile.querySelector("img").currentSrc;
        }
        blog.body = document.getElementById("update_description").value;
        blog.title = document.getElementById("update_title").value;
        blog.blog_slug = title.replace(/ /g, "_");
        localStorage.setItem("blog-records", JSON.stringify(updateData));
        swal("Updated Successfully!", "", "success");
        setTimeout(function () {
          location.reload();
          location.href = "blog.html";
        }, 1000);
      }
    });
  }
};

// preview Image //
var chooseFile = document.getElementById("choose-file");
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
