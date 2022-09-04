
//regular expression
let str = "We will, we will rock you";

alert( str.match(/we/gi) ); 


//replace string
alert( "We will, we will".replace(/we/i, "I") ); 

alert( "We will, we will".replace(/we/ig, "I") ); 

//alternative or

let regexp = /html|php|css|java(script)?/gi;

let stR = "First HTML appeared, then CSS, then JavaScript";

alert( stR.match(regexp) )



let regexp1 = /Java|JavaScript|PHP|C|C\+\+/g;

let s1 = "Java, JavaScript, PHP, C, C++";

alert( s1.match(regexp1) ); // Java,Java,PHP,C,C


let regexp2= /Java(Script)?|C(\+\+)?|PHP/g;

let str2 = "Java, JavaScript, PHP, C, C++";

alert( str2.match(regexp2) ); // Java,JavaScript,PHP,C,C++


let regex = /".+"/g;

let st= 'a "witch" and her "broom" is one';

alert( st.match(regex) ); // "witch" and her "broom"
// it will detect first " " and last""

let reg = /".+?"/g;

let tr = 'a "witch" and her "broom" is one';

alert( tr.match(reg) ); // "witch", "broom"


let pattern = /"[^"]+"/g;

let string = 'a "witch" and her "broom" is one';

alert( string.match(pattern) ); // "witch", "broom"


let stri = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
let regexpr = /<a href=".*" class="doc">/g;


alert( stri.match(regexpr) ); // <a href="link1" class="doc">... <a href="link2" class="doc">



let pat= "Mary had a little lamb";
alert( /^Mary/.test(pat) ); // true

let z = "its fleece was white as snow";
alert( /snow$/.test(z) ); // true



let str5 = "+7(903)-123-45-67";

let regexp5 = /\d/g;

alert( str5.match(regexp5) ); // array of matches: 7,9,0,3,1,2,3,4,5,6,7

// let's make the digits-only phone number of them:
alert( str5.match(regexp5).join('') ); // 79031234567


// \d – digits.
// \D – non-digits.
// \s – space symbols, tabs, newlines.
// \S – all but \s.
// \w – Latin letters, digits, underscore '_'.
// \W – all but \w.
// . – any character if with the regexp 's' flag, otherwise any except a newline \n.

let patt = /(\w+\.)+\w+/g;

alert( "site.com my.site.com".match(patt) );

let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// results - is not an array, but an iterable object
alert(results); // [object RegExp String Iterator]

alert(results[0]); // undefined (*)

results = Array.from(results); // let's turn it into array

alert(results[0]); // <h1>,h1 (1st tag)
alert(results[1]); // <h2>,h2 (2nd tag)


let stre = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log( stre.match(/^\d/gm) );


//for last digit
let stre1 = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log( stre1.match(/\d$/gm) ); // 1,2,3


// X(?=Y)	Positive lookahead	X if followed by Y
// X(?!Y)	Negative lookahead	X if not followed by Y
// (?<=Y)X	Positive lookbehind	X if after Y
// (?<!Y)X	Negative lookbehind	X if not after Y