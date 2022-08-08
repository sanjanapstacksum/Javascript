

document.onclick=function(){ console.log('you clicked on the page')}

document.body.addEventListener('click',dosomething);
addEventListener('click',()=>alert('you Clicked'));
 
function s(){
    alert('something Happened');
}
addEventListener('click',s);


function dosomething(event){
    console.log(event.type);
}
addEventListener( 'click',dosomething);



// const clickParagraph=document.getElementById('click');

// clickParagraph.addEventListener('click',()=> console.log('click'))

// clickParagraph.addEventListener('mousedown',()=> console.log('down' clickParagraph.addEventListener('mouseup',()=>console.log('up'))));

