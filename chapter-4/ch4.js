console.log("hello")

//defining a function//

function hello(){
    console.log("hello js")

}
hello();


const goodbye = function() {
    console.log('Goodbye');
    };
    goodbye();


    const hi = new Function('console.log("Hello");');
  hi();

function howdy() {
    console.log("fine")
}

const message = howdy();


//function arguments and parameters//

function sumOfTwo(a, b) {
    return a + b;
}
const sum = sumOfTwo(3, 4);
console.log(sum);


// // round function


// function mean (a, b, c) {
//     return (a+b+c) / 3;
//     }

//    const s= mean(1, 3, 6);
//    console.log(s)

//    //function expression//



const someOf3 = function (a, b, c) {
    return a + b + c;
}
const hii = someOf3(3, 4, 5)
console.log(hii);

//arrow function//

const y = (number1, number2) => number1 + number2;

const x = y(3, 4);
console.log(x);

//prior es//

function discount(price, amount = 10) {
    return price * (100 - amount) / 100;
}

const d = discount(15, 20);
console.log(d);

// function hoisting 



hie();

function hie() {
    console.log("happly birthday")
}

// we can only do function call before declaring it 
//in a function declaration and not in a expression or in a arrow function.//


console.log(hello)
var hello = "sanjana"
//in var-undefined
//in let/cost - get error//


//function inside a function//

function app() {

    const sum = (number1, number2) => {
        return number1 + number2;
    }

    const mul = (number1, number2) => number1 * number2;

    console.log("hello world");
    console.log(sum(3, 4));
    console.log(mul(3, 4))

}
app();

// var is a function scope while let and const are a block scope//




{
    var s = "sanju"
}

console.log(s)

// we can do this

{
    let s = "sanju"
}

console.log(s)

// we cant do this

// rest para//

function myfunc(a, b, ...c) {
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}

myfunc(3, 4, 5, 6, 7, 8);


// call back functions//


function myfunc2(a){
    console.log("inside my func 2")
    console.log(`hi ${a}`)
}
   

function myfunc(callback){
    console.log("sanjana")
    callback("hi");
}

myfunc(myfunc2);


// function can return function too//


//array methods//

const num=[1,2,3,4]

function myfunc(number,index){
    console.log(`index is ${index} number is ${number}`)
}
num.forEach(myfunc)


const users=[
    {firstName:"sanjana"},
    {firstName:"san"},
    {firstName:"anjana"},
    {firstName:"sanj"},
    
]

users.forEach(function(user){
    console.log(user.firstName);
})
  
for(let user of users){
    console.log(user.firstName);
}

// map method
//you have to return anything
// creates new array

 const numbers=[2,3,6,7];

function s1(number){
    return number*number;
}

const p=numbers.map(s1)
console.log(p);


//filter method
// creates new array

const all=[2,5,4,6,8]

function even(number){
    return number%2==0;
}
   const final=all.filter(even);
   console.log(final)

   // reduce method

   const f=[3,4,5]

   const odd =f.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
   });

   
   console.log(odd);