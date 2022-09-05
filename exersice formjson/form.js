console.log("hello world")
// ----Create a new directory for this in same git repo.
// 1. Create a HTML Form for user details. Try to cover all inputs (Using bootstrap also)
// 2. Accept the data on button click and display in table dynamically
// 3. Add the javascript form validation (For Blank and invalid input)
// 4. Make form interactive
var entry = document.getElementById('btn1')
entry.addEventListener('click', display)
function blurfunction() {

    var fname = document.getElementById('name')

    if (fname.value == "") {
        document.getElementById('firstnameIconStatus').style.display = "block";
        return true;
    }
    else {
        document.getElementById('firstnameIconStatus').style.display = "none";
        return true;
    }

}

function bfunction() {

    var fname = document.getElementById('fullname')

    if (fname.value == "") {
        document.getElementById('fstatus').style.display = "block";
        return true;
    }
    else {
        document.getElementById('fstatus').style.display = "none";
        return true;
    }

}

function emailfunction() {

    var fname = document.getElementById('email')

    if (fname.value == "") {
        document.getElementById('emailfun').style.display = "block";
        return true;
    }
    else {
        document.getElementById('emailfun').style.display = "none";
        return true;
    }
}

function passfunction() {

    var fname = document.getElementById('password')

    if (fname.value == "") {
        document.getElementById('passfun').style.display = "block";
        return true;
    }
    else {
        document.getElementById('passfun').style.display = "none";
        return true;
    }

}
function mobfunction() {

    var fname = document.getElementById('mobileno')

    if (fname.value == "") {
        document.getElementById('mobfun').style.display = "block";
        return true;
    }
    else {
        document.getElementById('mobfun').style.display = "none";
        return true;
    }

}
function cityfunction() {

    var fname = document.getElementById('city')

    if (fname.value == "") {
        document.getElementById('cityfun').style.display = "block";
        return true;
    }
    else {
        document.getElementById('cityfun').style.display = "none";
        return true;
    }

}
function edufunction() {

    var fname = document.getElementById('education')

    if (fname.value == "") {
        document.getElementById('edufun').style.display = "block";
        return true;
    }
    else {
        document.getElementById('edufun').style.display = "none";
        return true;
    }

}
function validatefunc() {

    var option = document.getElementsByName('optradio');
    if (!(option[0].checked || option[1].checked)) {
        document.getElementById('genderfun').style.display = "block";
       return false;

    }
    else{
        document.getElementById('genderfun').style.display = "none"; 
    }
}
function emailvalfun() {
    var form1 = document.getElementById("form");
    var Email = document.getElementById('email').value;
    var text = document.getElementById('emailllfun');
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Email.match(pattern)) {
        document.getElementById('emailllfun').style.display = "none"; 
    }
    else {
        // alert("email is invalid")
        document.getElementById('emailllfun').style.display = "block";
        document.getElementById('Emailfun').style.display = "none";
        document.getElementById('emailfun').style.display = "none";
    }
}

function genderfunction(){
    if (gender.checked){
        newRow.insertCell(2).innerHTML = gender.value;
        document.getElementById('genderfun').style.display = "none";
    }
        
    else{
        newRow.insertCell(2).innerHTML = "";}

}

var row = 1;
function display() {
    var name = document.getElementById('name').value
    var fullname = document.getElementById('fullname').value
    var gender = document.querySelector('input[name="optradio"]:checked');
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var mobileno = document.getElementById('mobileno').value
    var city = document.getElementById('city').value
    var education = document.getElementById('education').value
    var check = true;

    var validate=true;

    if (name == '') {

        document.getElementById('firstnameIconStatus').style.display = "block";
        validate=false;
    }
     if (fullname == '') {
        document.getElementById('fstatus').style.display = "block";
        validate=false;
    }
    
    var form1 = document.getElementById("form");
    var Email = document.getElementById('email').value;

    var text = document.getElementById('emailllfun');
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (!Email.match(pattern)) {
        document.getElementById('emailllfun').style.display = "block";
        validate=false;
    }
  

    if (email == '') {
        document.getElementById('emailfun').style.display = "block";
        document.getElementById('emailllfun').style.display = "none";
        validate=false;
    }
   
     if (password == '') {
        document.getElementById('passfun').style.display = "block";
        validate=false;
        
        
    }

     if (mobileno == '') {
        document.getElementById('mobfun').style.display = "block";
        validate=false;
    }
     if(city == '') {
        document.getElementById('cityfun').style.display = "block";
        validate=false;
    }

     if (education == '') {
        document.getElementById('edufun').style.display = "block";
        validate=false;
    }
   

     if(validate==false){
        return false;
     }

    else {

       var validate = true;
        count = 0;
        var s = document.getElementById('table1')
        var newRow = s.insertRow(row);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        // var cell3 = newRow.insertCell(2);
        if (gender.checked){
            newRow.insertCell(2).innerHTML = gender.value;
            document.getElementById('genderfun').style.display = "none";
        }
            
        else{
            newRow.insertCell(2).innerHTML = "";}
        

        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);

        count = count + 1;

        cell1.innerHTML = name;
        cell2.innerHTML = fullname;
        cell4.innerHTML = email;
        cell5.innerHTML = password;
        cell6.innerHTML = mobileno;
        cell7.innerHTML = city;
        cell8.innerHTML = education;

        row++;
    }

}