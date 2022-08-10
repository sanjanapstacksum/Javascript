// console.log("hello world");

// // const form=document.forms[0];
// const form=document.getElementsByTagName('form')[0];
// console.log(form);

// const f=document.forms[1]
// console.log(f)

// //byname
// // const f=document.forms['myform']
// //const f=document.myform
// // const f=document.getElementbyId(id);


// // const d=document.form3
// // console.log(d.method)

// const d=document.form3
// console.log(d.action)


// //Form events//
// //focus//

// function focusplease(element){
//     element.style.backgroundColor="lime"
// }



// //blur//
// function blurf(element){
//     element.style.backgroundColor=""
// }

// // document.getElementById("text1").addEventListener("blur",bluron);

// // function bluron(){
// //     document.getElementById("text1").style.background="white"

// // }



// document.getElementsByClassName("blurall").addEventListener("blur",bluron);

// function bluron(){
//     const y=document.getElementsByClassName("blurall").style.background="white"
//     console.log(y)

// }





// //input//
// function inputf(element){
//     const h=element.value
//     document.getElementById("line").innerHTML=h;
   
// }
// // change event//

// function changed(element){
//     const h=element.value
//     document.getElementById("line").innerHTML=h;
   

//     //select event//
// }
// function selected(){
//     console.log("you selected!!")

// }


// //submit event//

// function submited(){
//     var z=document.getElementById('text1').value;
//    alert("hello"+ " " +z);
// }

// document.forms.hero.heroname.focus();
const form=document.forms['hero'];
form.addEventListener('submit',validate,false);
var validated=false;
function validate(event){
    const firstLetter=
    form.heroName.value[0]; 
    if(firstLetter.toUpperCase()==='X'){
        event.preventDefault();
        alert('not allowed')
        validated=false;
    }else{
        validated=true;
    }
   
        
    }

form.addEventListener('submit',makeHero,false);



function makeHero(event){
   
    const hero={};
    hero.name=form.heroName.value;
    hero.Category=form.Category.value;
    hero.city=form.city.value;
    hero.origin=form.origin.value

    
hero.powers=[];
for(let i=0;i<form.powers.length; i++){
    if(form.powers[i].checked){
        hero.powers.push(form.powers[i.value]);
    }
}


hero.powers=[...form.powers].filter(box=>box.checked).map(box=>box.checked)
// document.forms.hero.powers[0].checked=true;

    if(validated)
    alert(JSON.stringify(hero));
    return hero;
}

form.powers;

// form.addEventListener('submit',validate,false);

// function validate(event){
//     const firstLetter=
//     form.heroName.value[0]; 
//     if(firstLetter.toUpperCase()==='X'){
//         event.preventDefault();
//         alert('not allowed')
//     }

        
//     }
