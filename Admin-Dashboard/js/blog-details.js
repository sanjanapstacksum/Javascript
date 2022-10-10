var loginUser = JSON.parse(localStorage.getItem("login_input"))
document.getElementById("profileName").innerHTML=loginUser.fname+" "+loginUser.lname

var objUrlParams = new URLSearchParams(window.location.search);
console.log(objUrlParams.get('blog_slug'));