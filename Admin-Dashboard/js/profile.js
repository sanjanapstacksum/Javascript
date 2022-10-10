
function logout() {
  localStorage.clear();
}
var getData=localStorage.getItem('login_input')
if(getData==null){
   location.href="index.html"
   
}

var getUser = JSON.parse(localStorage.getItem("login_input"));
document.getElementById("profileName").innerHTML =getUser.fname + " " + getUser.lname;

document.getElementById("first_name").value = getUser.fname;
document.getElementById("last_name").value = getUser.lname;
document.getElementById("email").value = getUser.email;
document.getElementById("userId").value = getUser.id;
document.getElementById("password").value = getUser.password;



document.getElementById("save").onclick = function (e) {
  var userId = document.getElementById("userId").value;

  if (parseInt(userId) === getUser.id) {

    getUser.fname = document.getElementById("first_name").value;
    getUser.lname = document.getElementById("last_name").value;
    getUser.email = document.getElementById("email").value;
    getUser.password = document.getElementById("password").value;
    swal("saved Successfully !", "", "success");
    localStorage.setItem("login_input", JSON.stringify(getUser));

    e.preventDefault();

    setTimeout(function () {
      location.reload();
    }, 1000);
  }
};
var localstorageRegRecord = JSON.parse(localStorage.getItem("register_input"));

for (var i = 0; i < localstorageRegRecord.length; i++) {
  if (localstorageRegRecord[i].id === userId) {
    document.getElementById("first_name").value =localstorageRegRecord[i].fname;
    document.getElementById("last_name").value = localstorageRegRecord[i].lname;
    document.getElementById("email").value = localstorageRegRecord[i].email;
    document.getElementById("password").value =localstorageRegRecord[i].password;
    document.getElementById("userId").value = localstorageRegRecord[i].id;
  }
}

var userId = document.getElementById("userId").value;
localstorageRegRecord.map((user) => {
  if (parseInt(userId) === user.id) {
    user.fname = document.getElementById("first_name").value;
    user.lname = document.getElementById("last_name").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    localStorage.setItem("register_input",JSON.stringify(localstorageRegRecord)
    );
  }
});
