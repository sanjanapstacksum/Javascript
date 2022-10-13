function logout() {
  localStorage.clear();
}
var blogArray = JSON.parse(localStorage.getItem("blog-records"));
var userArray = JSON.parse(localStorage.getItem("register_input"));
var loginUser = JSON.parse(localStorage.getItem("login_input"));
var userLength = userArray.length;

document.getElementById("countOfUsers").innerHTML = userLength;
if (Array.isArray(blogArray)) {
  document.getElementById("countOfBlogs").innerHTML = blogArray.length;
} else {
  document.getElementById("countOfBlogs").innerHTML = 0;
}

document.getElementById("userName").innerHTML =
  loginUser.fname + " " + loginUser.lname;
document.getElementById("profileName").innerHTML =
  loginUser.fname + " " + loginUser.lname;

var date = new Date();
var current_date =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
var date_time = current_date;
document.getElementById("dateTime").innerHTML = date_time;

timer();

function timer() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var sec = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  var t_str = hours + ":" + minutes + ":" + sec + " ";
  if (hours > 11) {
    t_str += "PM";
  } else {
    t_str += "AM";
  }
  document.getElementById("time").innerHTML = t_str;
  setTimeout(timer, 1000);
}

var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

document.getElementById("greet").innerHTML = greet;
