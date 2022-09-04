// if else in arrow function

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


// confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); 


//this in object
let user = {
    name: "John",
    age: 30,
  
    sayHi() {
     
      alert(this.name);
    }
  
  };
  
  user.sayHi(); 

  //or
  let user1 = {
    name: "John",
    age: 30,
  
    sayHi() {
     
      alert(user1.name);
    }
  
  };
  
  user1.sayHi(); 

  let user2 = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert( user2.name ); // leads to an error
    }
  
  };
  
  let admin = user;
  user2 = null; // overwrite to make things obvious
  
  admin.sayHi(); // TypeError: Cannot read property 'name' of null


  let user3 = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert( this.name ); // leads to an error
    }
  
  };
  
  let admin1 = user;
  user3 = null; // overwrite to make things obvious
  
  admin1.sayHi(); //works due to this

  let User={name:"hello"}
  let Admin={name:"admin"}

  function sayhii(){
    alert(this.name)
  }

  User.f=sayhii;
  Admin.f=sayhii;

  User.f();
  Admin.f();
  Admin['f']();



  function sayHi() {
    alert(this);
  }
  
  sayHi(); // undefined because we cant use this ,calling without an object



  let u = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  u.sayHi(); // Ilya


  // using this in object literal
  function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let useR = makeUser();
  
  alert( useR.ref().name ); 


  // create a calculator with using this

  let calculator={

    sum(){

        return this.a+this.b;

    },
    mul(){

        return this.a*this.b;

    },
    read(){

    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);

    }
    
  }
  calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//symbol
//  symbol is a “primitive unique value” with an optional description


let id1 = Symbol("id");
// alert(id1); // TypeError: Cannot convert a Symbol value to a string


let id2 = Symbol("id");
alert(id2.toString()); // Symbol(id), now it works

let id3 = Symbol("id");
alert(id3.description); // id


// comparison by reference
let a = {};
let b = a; 

alert( a == b ); 
alert( a === b ); // true

let v={};
let s={};
alert(v==s); // false



let Us = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, Us);
  
  alert( Us.sizes === clone.sizes ); // true, same object
  
  // Us and clone share sizes
  Us.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 60, get the result from the other one

  //if one object is copied from another than values can be change in obj1 if ob2 changes its value


  //constructor function

  

  function Userr(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let userr = new Userr("Jack");
  
  alert(userr.name); // Jack
  alert(userr.isAdmin); // false


  // return from constructor

  function cons(){
    this.NAME="sanju";
    return{
        NAME:"pranav"
    }
  };
  alert(new cons().NAME);

  // Method of primitive

  let stack= {
    name: "John",
    sayHi: function() {
      alert("Hi!");
    }
  };
  
  stack.sayHi(); // 

//   //find method
//   let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
  
//   let User = users.find(item => item.id == 1);
  
//   alert(User.name); // John

  //task

  function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; 
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); 

  //or
  function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
  }


  // numbers

  let billion = 1e9;  

alert( 7.3e9 );  
// array destructuring

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  alert(title);  
  alert(width);  
  alert(height); 


  let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  

  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); }
  

  for (let amount of recipeMap.values()) {
    alert(amount); 
  }
  
  for (let entry of recipeMap) { 
    alert(entry); 
  }

  

  let obj = {
    name: "John",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  
  alert( map.get('name') );

//json stringif

  let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  alert(typeof json); // we've got a string!
  
  alert(json);



  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };
  
  alert( JSON.stringify(meetup) );
 

  var gVar = 5;

alert(window.gVar);

let gLet = 5;

alert(window.gLet); 


//decorator
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

alert( worker.slow(2) ); // works
alert( worker.slow(2) ); // works, doesn't call the original (cached)

//rest parameter and spread syntax

function sumAll(...args) { 
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); 
alert( sumAll(1, 2) ); 
alert( sumAll(1, 2, 3) ); 

function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

let arr = [3, 5, 1];

alert( Math.max(arr) ); 
//in  array wont work

let Aarr = [3, 5, 1];

alert( Math.max(...Aarr) ); 
//with using spread operaor it will work

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) );

// lost this

let p = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(p.sayHi, 1000);
// That’s because setTimeout got the function user.sayHi, separately from the object. The last line can be rewritten as:

let f = user.sayHi;
setTimeout(f, 1000); // lost user context
// The method setTimeout in-browser is a little special: it sets this=window for the function call (for Node.js, this becomes the timer object, but doesn’t really matter here). So for this.firstName it tries to get window.firstName, which does not exist. In other similar cases, usually this just becomes undefined.


//closure

const outer=(a)=>{
  b=10;
  const inner=()=>{
    let sum=a+b;
    console.log(`the sum of ${sum}`)
  }
   inner();
}
outer(5);


