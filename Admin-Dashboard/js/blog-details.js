var loginUser = JSON.parse(localStorage.getItem("login_input"));
document.getElementById("profileName").innerHTML =
  loginUser.fname + " " + loginUser.lname;

var objUrlParams = new URLSearchParams(window.location.search);

var blogSlug = objUrlParams.get("blog_slug");
var blogArray = JSON.parse(localStorage.getItem("blog-records"));
var found = false;

blogArray.filter((blog) => {
  if (blog.blog_slug == blogSlug) {
    var element = document.getElementById("imageBlog");
    element.src = blog.image;
    document.getElementById("blogHeading").innerText = blog.title;
    document.getElementById("blogTitle").innerHTML = blog.title;
    document.getElementById("blogDescription").innerHTML = blog.body;
    document.getElementById("blogBreadcrumb").innerHTML = blog.title;
    document.getElementById("noBlogFound").style.display = "none";

    found = true;
  }
  if (found === true) {
    return true;
  } else {
    found = false;
    document.getElementById("noBlogFound").style.display = "block";
   
  }
});

if (!blogSlug) {
  document.getElementById("noBlogFound").style.display = "block";
  document.getElementById("hideDiv").style.display = "none";
}

function findNexPrevBlog() {
  blogArray.map((blog, index) => {
    if (blogSlug == blog.blog_slug) {
      var preBlogIndex = index - 1;
      if (index > 0) {
        document.getElementById("previousBlog").innerHTML =
          blogArray[preBlogIndex].title;
        document.getElementById("prevBlogUrl").href =
          "blog-details.html?blog_slug=" + blogArray[preBlogIndex].blog_slug;
      } else {
        document.getElementById("previousBlog").style.display = "none";
        document.getElementById("previousStatic").style.display = "none";
      }

      if (blogArray.length - 2 >= index) {
        var nextBlogIndex = index + 1;
        document.getElementById("nextBlog").innerHTML =
          blogArray[nextBlogIndex].title;
        document.getElementById("nextBlogUrl").href =
          "blog-details.html?blog_slug=" + blogArray[nextBlogIndex].blog_slug;
      } else {
        document.getElementById("nextBlog").style.display = "none";
        document.getElementById("nextStatic").style.display = "none";
      }
    }
  });
}
findNexPrevBlog();

