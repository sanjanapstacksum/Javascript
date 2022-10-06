var blogArrExist = localStorage.getItem("blog-record");
let blogArray = [];

if (blogArrExist == null || blogArrExist == undefined) {
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })

  .then(function (blogs) {
    blogArray = blogs
    blogArray.forEach((blog) => {
      blog.image = "images/work-2.jpg";
      delete blog.userId;
    });

    localStorage.setItem('blog-record',JSON.stringify(blogArray))
    displayBlogs(blogArray);

  })
}
else {
  blogArray = JSON.parse(blogArrExist);
  displayBlogs(blogArray);
}
function displayBlogs(blogArray) {

    let output = document.querySelector(".basic-4");
    let out = "";
    let chunkSize = 3;

    for (let i = 0; i < blogArray.length; i += chunkSize) {
      var chunkArray = blogArray.slice(i, i + chunkSize);
      for (let j = 0; j < chunkArray.length; j++) {
      
        if (j == 0) {
          out += '<div class="container" > <div class="row">';
        }
        out += `<div class="col-lg-4" id="blog_${chunkArray[j].id}">`;
        out += `<div class="text-container">`;
        out += `<div class="image-container">`;
        out += `<a href="project.html">`;
        out += `<a href="project.html"> <img class="img-fluid" src="${chunkArray[j].image}" alt="alternative">  </a> </div>`;
        out += `<div class=" bg-gray py-1 px-2">`;
        out += `<span class="text-muted text-capitalize mr-3"><a onclick="deleteSelectedBlog(event,${chunkArray[j].id})" href="javascript:;"  data-id="${chunkArray[j].id}"><i  class="fa-sharp fa-solid fa-trash" style="color:red"></i></a></span></div>`;
        out += `<p><strong>Title:</strong> ${chunkArray[j].title}, <strong>Body:</strong>${chunkArray[j].body} <a class="blue" href="project.html">details</a></p></div></div> `;

        output.innerHTML = out;
        if (j === chunkArray.length - 1) {
          out += `</div></div>`;
        }
      }
    }
};

// validation //

var regexx = document.querySelectorAll(".allEvent");
regexx.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var name = document.getElementById("title").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "title" && !name.match(regex)) {
      document.getElementById("correct_title").style.display = "block";
      document.getElementById("titleRequired").style.display = "none";
    } else {
      document.getElementById("correct_title").style.display = "none";
      document.getElementById("titleRequired").style.display = "none";
    }

    var name = document.getElementById("body").value;
    var regex = /^[a-zA-Z ]{5,30}$/;
    if (e.target.id == "body" && !name.match(regex)) {
      document.getElementById("correct_body").style.display = "block";
      document.getElementById("bodyRequired").style.display = "none";
    } else {
      document.getElementById("correct_body").style.display = "none";
      document.getElementById("bodyRequired").style.display = "none";
    }

    var image = document.getElementById("image").value;
    var regex = /\.(jpe?g|png|gif|bmp)$/i;
    if (e.target.id == "image" && !image.match(regex)) {
      document.getElementById("correct_image").style.display = "block";
      document.getElementById("imageRequired").style.display = "none";
    } else {
      document.getElementById("correct_image").style.display = "none";
      document.getElementById("imageRequired").style.display = "none";
    }
  })
})

var allevent = document.querySelectorAll(".allEvent");
allevent.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (e.target.id == "title" && document.getElementById("title").value == "") {
      document.getElementById("titleRequired").style.display = "block";
    } else {
      document.getElementById("titleRequired").style.display = "none";
    }

    if (
      e.target.id == "body" &&
      document.getElementById("body").value == ""
    ) {
      document.getElementById("bodyRequired").style.display = "block";
    } else {
      document.getElementById("bodyRequired").style.display = "none";
    }

    if (
      e.target.id == "image" &&
      document.getElementById("image").value == ""
    ) {
      document.getElementById("imageRequired").style.display = "block";
    } else {
      document.getElementById("imageRequired").style.display = "none";
    }
})
})

var submit = document.getElementById("btnSubmit");
submit.addEventListener("click", submitUser);
function submitUser() {
  var val = true;
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var image = document.getElementById("image").value;
  

  if (title == "") {
    document.getElementById("titleRequired").style.display = "block";
    val = false;
  }

  if (body == "") {
    document.getElementById("bodyRequired").style.display = "block";
    val = false;
  }

  if (image == "") {
    document.getElementById("imageRequired").style.display = "block";
    val = false;
  }

  if (val === false) {
    return false;
  } else {
    var blogArr = JSON.parse(localStorage.getItem("blog-record"));
    var blogId = blogArr.length + 1;

    let blogObj = {
      id: blogId,
      title: document.getElementById("title").value,
      body: document.getElementById("body").value,
      image: document.getElementById("image").value,
    };

    blogArr.push(blogObj);
    localStorage.setItem("blog-record", JSON.stringify(blogArr));
    location.reload()
    
    
  } 
}
// delete blog //
let deleteSelectedBlog = (event, blogId) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover your data!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      for (var i = 0; i < blogArray.length; i++) {
        if (blogArray[i].id === blogId) {
         
          blogArray.splice(i, 1);
          const element = document.getElementById("blog_" + blogId);
          element.remove();
          localStorage.setItem("blog-record", JSON.stringify(blogArray));
          swal(" Blog successfully deleted!", {
            icon: "success",
          });
        }
      }
    } else {
      swal("Your Blog is safe!");
    }
  });
};
