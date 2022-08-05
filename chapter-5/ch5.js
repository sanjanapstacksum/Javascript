//console.log("hello");
// object//

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,

    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
}
for (const key in superman) {
    console.log(key + ": " + superman[key]);
}

const entry = {

    firstName: "Sanjana",
    LastName: "patel",
    education: "BE",
    BloodGroup: "a positive"
}
console.log(entry);
entry.home = "ahmedabad"
console.log(entry)

for (let key in entry) {
    console.log(entry[key]);
}

const y = delete entry.firstName
console.log(entry)


//Objects Are Copied By Reference

const colour = {
    name: 'colour',
    // more properties can be here
};
const colourred = colour;
colourred.name = 'Clor';
colour.name
// 'Clor'



const greet = {
    name: "sanjana",
};
const you = greet;
you.name = "khushi";
greet.name
//khushi



//Objects as Parameters to Functions


function ok({ greet1ing, name, age }) {
    return `${greet1ing}! My name is ${name} and I am ${age} years old.`;
}

const final = ok({ greet1ing: `What's up dude?`, age: 22, name: `sanjana` });
console.log(final)


// this//

const dice = {
    sides: 6,
    roll() {

        return Math.floor(this.sides * Math.random()) + 1;
    }
};

//     dice.roll();
//    // << 5
//     dice.roll();
//    // << 3

//     dice.sides = 20;
//     //<< 20

//     dice.roll();
//    // << 12
//     dice.roll();
//     //<< 18


//name spacing//

const myMaths = {
    square(x) {
        return x * x;
    },
}
const g = myMaths.square(4);
console.log(g)

//        o main built-in objects included in JavaScript: arrays and
// functions. JavaScript has a number of other built-in global objects that can be accessed
// from anywhere in a program



//json

const wonderWoman = {
    name: 'Wonder Woman',
    'real name': "Diana Prince",
    height: 182,
    Weight: 165,
    hero: true,
    villain: false,
    allies: ['Wonder Girl', 'Donna Troy', 'Superman'],
    lasso: function () {
        console.log('You will tell the truth!');
    }
}
const json = JSON.stringify(wonderWoman);
console.log(json)

const ls = wonderWoman.lasso();
console.log(ls)

//  The stringify() method does the opposite, taking a JavaScript object and returning a
// string of JSON data, 

// The parse() method takes a string of data in JSON format and returns a JavaScript
// object:



// the math object//

// Mathematical Constants

console.log(Math.PI);

console.log(Math.SQRT2);

console.log(Math.SQRT1_2)

console.log(Math.E)

console.log(Math.LN10)

console.log(Math.LOG2E)

console.log(Math.LOG10E)


//abs

console.log(Math.abs(3))
console.log(Math.abs(-4.6));
// will return positive values


// rounding methods

console.log(Math.ceil(4.2))

console.log(Math.ceil(8));

console.log(Math.ceil(-4.2));

console.log(Math.floor(4.2));

console.log(Math.floor(8));

console.log(Math.floor(-4.2));



//positive value
console.log(Math.trunc(4.9))

console.log(Math.trunc(-4.2))


// The Math.cbrt() method was introduced in ES6, which returns the cube root of numbers:
console.log(Math.cbrt(8));

console.log(Math.cbrt(-1000));

// the date object


const day = new Date();
console.log(day.toString())

// getter and shatter//

class person {
    constructor(firstname, lastname, age) {
        this.firstName = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    get fullname() {
        return `${this.firstName} ${this.lastname}`
    }
}
const person1 = new person("sanjana", "patel", 22)
console.log(person1.fullname);



// class person {
//     constructor(firstname, lastname, age) {
//         this.firstName = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }

//     get fullname() {
//         return `${this.firstName} ${this.lastname}`
//     }

//     set fullName(fullName) {
//         const [firstName, lastName] = fullName.split("");
//         this.firstName=firstName
//         this.lastName=lastName;
//     }


// }

//  const person1 = new person("sanjana", "patel", 22)
// console.log(person1.fullname);

// person1.fullName = "khushi patel";
// console.log(person1)


//longest name

// 3 - Write a function which returns the longest country name from provided array of input
//     e.g. - Input ['India', 'USA', 'UK'] so result here is India


function myfunc() {
    var country = ["india", "US", "UK"]
    var index = 0;
    var length = 0;
    var longestName = "";
    for (var i = 0; i < country.length; i++) {
        if (country[i].length > length) {
            length = country[i].length;
            longestName = country[i];
        }
    }

    console.log(longestName)
}
myfunc();


// #2 - example array input is [1, 2, 1, 5, 6, 2, 3, 1, 2, 5, 8, 9]




function nonrep() {
    var number = [1, 2, 1, 5, 6, 2, 3, 1, 2, 5, 8, 9]
    var i = 0;
    var j = 0;
    var N = [];

    for (i = 0; i < number.length; i++) {
        for (j = 0; j < number.length; j++) {

            if (i === j) {
                continue;

            }
            if (number[i] === number[j]) {
                break;
            }
        }
        if (j === number.length) {
            N.push(number[i]);


        }
    }
    console.log(N);
}

nonrep();


1.// Write a function that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null

const arr = [0, 1, null, 2, 3, undefined];
const f = arr.filter((i) => {
    return i !== null && typeof i !== 'undefined' && i !== 0;
});
console.log(f);


// [1, 0, null, ' ', false, 5, 6, 7, undefined, null, 0, 9, 10]


// #4 - Write a JS function to convert the given number into coins
//      e.g. 46 - 10, 10, 10, 10, 5, 1

function amountTocoins() {

    var num = 46

    var arr1 = [24, 10, 5, 2, 1];
    var str = '';

    for (var i = 0; i < arr1.length; i++) {
        if (num >= arr1[i]) {
            num = num - arr1[i];
            str = str + arr1[i] + ',';
            i--;
        }
    }
    console.log(str)
}

amountTocoins();



var is_array = function (input) {
    if (toString.call(input) === "[object Array]")
        return true;
        return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));