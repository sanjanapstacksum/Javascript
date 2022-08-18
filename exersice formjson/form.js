console.log("hello world")


// ----Create a new directory for this in same git repo.
// 1. Create a HTML Form for user details. Try to cover all inputs (Using bootstrap also)
// 2. Accept the data on button click and display in table dynamically
// 3. Add the javascript form validation (For Blank and invalid input)
// 4. Make form interactive






var entry = document.getElementById('btn1')
entry.addEventListener('click', display)


// var form = document.forms['final']; 

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
function genderfunction() {

    var fname = document.getElementById('gender')

    if (fname.value == "") {
        document.getElementById('genderfun').style.display = "block";
        return true;
    }
    else {
        document.getElementById('genderfun').style.display = "none";
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


var row = 1;

function display() {






    var name = document.getElementById('name').value
    var fullname = document.getElementById('fullname').value
    var gender = document.getElementById('gender').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var mobileno = document.getElementById('mobileno').value
    var city = document.getElementById('city').value
    var education = document.getElementById('education').value
    var check = true;

    if (name == '' || fullname == '' || gender == '' || email == '' || password == '' || mobileno == '' || city == '' || education == '') {
   alert("fill all fields")                    
        check = false;
    }
    else {

        check = true;



        // const validate=document.forms['final'];
        // validate.addEventListener('submit',validate,false);


        var s = document.getElementById('table1')
        var newRow = s.insertRow(row);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);



        cell1.innerHTML = name;
        cell2.innerHTML = fullname;
        cell3.innerHTML = gender;
        cell4.innerHTML = email;
        cell5.innerHTML = password;
        cell6.innerHTML = mobileno;
        cell7.innerHTML = city;
        cell8.innerHTML = education;

        row++;
    }
}
