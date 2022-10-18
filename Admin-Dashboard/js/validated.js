var getUser = JSON.parse(localStorage.getItem("login_input"));
if (getUser == null) {
  location.href = "index.html";
}
document.getElementById("profileName").innerHTML =
  getUser.fname + " " + getUser.lname;
var profilePicture = document.getElementById("profilePicture");
if (getUser.image == "" || getUser.image == undefined) {
  profilePicture.src =
    "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";
  document.getElementById("profilePictureUser").value = profilePicture.src;
} else {
  profilePicture.src = getUser.image;
}
