console.log("hello world")


// ----Create a new directory for this in same git repo.
// 1. Create a HTML Form for user details. Try to cover all inputs (Using bootstrap also)
// 2. Accept the data on button click and display in table dynamically
// 3. Add the javascript form validation (For Blank and invalid input)
// 4. Make form interactive


var entry=document.getElementById('btn1')
entry.addEventListener('click',display)

var row=1;

function display(){
    var name=document.getElementById('name').value
    var fullname=document.getElementById('fullname').value
    var gender=document.getElementById('gender').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var mobileno=document.getElementById('mobileno').value
    var city=document.getElementById('city').value
    var education=document.getElementById('education').value
 
    if(!name || !fullname || !gender || !email || !password || !mobileno || !city || !education){
        alert("please fill all the details")
     

    }

     var s =document.getElementById('table1')
     var newRow=s.insertRow(row);

     var cell1=newRow.insertCell(0);
     var cell2=newRow.insertCell(1);   
     var cell3=newRow.insertCell(2);
     var cell4=newRow.insertCell(3);
     var cell5=newRow.insertCell(4);
     var cell6=newRow.insertCell(5);
     var cell7=newRow.insertCell(6);
     var cell8=newRow.insertCell(7);



     cell1.innerHTML=name;
     cell2.innerHTML=fullname;
     cell3.innerHTML=gender;
     cell4.innerHTML=email;
     cell5.innerHTML=password;
     cell6.innerHTML=mobileno;
     cell7.innerHTML=city;
     cell8.innerHTML=education;

     row++;
}
