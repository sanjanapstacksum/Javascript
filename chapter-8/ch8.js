console.log("hello world");

// const form=document.forms[0];
const form=document.getElementsByTagName('form')[0];
console.log(form);

const f=document.forms[1]
console.log(f)

//byname
// const f=document.forms['myform']
//const f=document.myform
// const f=document.getElementbyId(id);


// const d=document.form3
// console.log(d.method)

const d=document.form3
console.log(d.action)


//Form events//
//focus//

function focusplease(element){
    element.style.backgroundColor="lime"
}



//blur//
function blurf(element){
    element.style.backgroundColor=""
}

// // document.getElementById("text1").addEventListener("blur",bluron);

// // function bluron(){
// //     document.getElementById("text1").style.background="white"

// // }



// document.getElementsByClassName("blurall").addEventListener("blur",bluron);

// function bluron(){
//     const y=document.getElementsByClassName("blurall").style.background="white"
//     console.log(y)

// }





//input//
function inputf(element){
    const h=element.value
    document.getElementById("line").innerHTML=h;
   
}