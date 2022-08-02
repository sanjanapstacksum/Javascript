// hello this is short comment//
/* hello this 
is big comment*/


console.log("hello ");

//data types//

var x=23
console.log(typeof(x));

var x="sanjana"
console.log(typeof(x));

var x= 2==2;
console.log(typeof(x));

var x={x:"san"}
console.log(typeof(x));


const y="sanjana";
y="pranav"
console.log(y); // wont change//

const s={value:"hello"};
s.value="pranav";
console.log(s.value);

// Global Scope ,local scope//

var x="sanjana" // global//

console.log(y);
f1();
function f1(){
    var y="pranav" // local//
    console.log(x);
}

 
const a = 8;
let b = a; // a = 8, b = 8
b = 9; // a = 8, b = 9


const c = { value: 8 };
let d = c; // c.value = 8, d.value = 8
d.value = 9; // c.value = 9, d.value = 9 