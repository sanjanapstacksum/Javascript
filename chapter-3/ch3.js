// arrays//

// let fruits=["apple", "banana","grapes"]
// console.log(fruits[0]);
// fruits[1]="mango"
// console.log(fruits)

// // push pop shift unshift//

// let fruits=["apple", "banana","grapes"]
// fruits.push("guava")
// fruits.unshift("Guava")
// fruits.shift("c")
// console.log(fruits)

// // primitive and reference types

//  let array1=["item1","item2"]



// console.log(array1===array2)
// array1.push("apple")

// console.log(array1)
// console.log(array2)

// //Splice and slice//

// var array=[1,2,3,4,5];
// console.log(array.splice(2));


// console.log(array);

// var array2=[5,8,9,3,7];
// console.log(array2.splice(2,1));

// console.log(array2.splice(2,0));

// console.log(array2);


// //slice//

// var arr=[1,2,3,4]
// arr.slice(0,3)
// console.log(arr);

// //  loop and conditions//
// // if condition 

// let number=24;

//  if(number%2==0)
// {
//     console.log("number is even");
// }
//  else{
//     console.log("number is odd");
// }


// and , or

fname = "sanjana";
age = 22;

if (fname[0] === "s" && age > 20) {
    console.log("you are in")
}
else {
    console.log("good luck next time!")
}

//elif

num = 18

if (num < 18) {
    console.log("its too low!")
}

else if (num > 18) {

    console.log("too hoigh!")

}
else {
    console.log("you are right!")
}


// switch and break

let day = 2;

switch (day) {
    case 0:
        console.log("sunday");

    case 2:
        console.log("sunday");
        break;
    case 3:
        console.log("sunday");
}


//while

total = 0;
i = 0;

while (i <= 10) {
    total = total + i;
    i++;
}
console.log(total);

// array destructuring//

const myarray = ["value1", "value2", "value3"]

let [m1, m2, m3] = myarray
console.log(m1)


//code

// var n1,n2;
// n1=prompt("enter a number");
// n2=prompt("enter a number");

// if(n1>n2)
// {
//     console.log("bigger number is", n1)
// }
// else{
//     console.log("bigger number is",n2)
// }



let arr = [4, 32, 2, 5, 8];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Sorted array=>", arr);


var m=[2,1,4,3]

d=m.reverse()
console.log(d)