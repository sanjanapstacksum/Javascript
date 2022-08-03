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



const greet={
    name:"sanjana",
};
const you=greet;
you.name="khushi";
greet.name
//khushi



//Objects as Parameters to Functions

function greet({ greeting, name, age }) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}

greet({ greeting: `What's up dude?`, age: 10, name: `Bart` });
'What\'s up dude! My name is Bart and I am 10 years old.'



function hello({ greeting, name, age }) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}

hello({ greeting: `What's up dude?`, age: 22, name: `sanjana` });

 
// this//

