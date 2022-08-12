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


}
