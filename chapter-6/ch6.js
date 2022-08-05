console.log("hello world")

//DOM

const body=document.body;
console.log(typeof body)

const h1=document.getElementById('title');
console.log(h1)


const listItems=document.getElementsByTagName('li');
console.log(listItems)

const heroes=document.getElementsByClassName('.hero');
console.log(heroes)



//query selector//

const query=document.getElementById('ulsection');
console.log(query);


const para = document.createElement( "li");
para.textContent= "react";
document.body.appendChild(para);



const listItem = document.querySelector("li:last-child");
console.log(listItem);

    // replace child

    const h2=document.getElementById('title');
    const oldtext=h2.firstChild;
    const newtext=document.createTextNode('hey-sanjana here')
    h2.replaceChild(newtext,oldtext)    


    //style in dom


  const f=  document.getElementById("bats").style.color = "red";
  console.log(f)

  const g=  document.getElementById("title").style.color = "red";
  console.log(g)

  