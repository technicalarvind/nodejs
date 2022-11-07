// 1. Ways to print in JavaScript
// console.log("Hello Arvind");                    // used to print anything or for debugging output
// alert("Me");
// document.write("This is Arvind")

// 2. JavaScript Console API

// console.log("Hello Arvind");

// console.warn("This is a warning message"); // used to throw warning messages

// console.error("This is a error message"); // used to show error messages

// console.clear(); // used to clear console

// console.assert(4 == 6);

// 3. JavaScript Variables

// JS Variables are a containers which stores data in key:value pair
// There are 3 types of variables used in js (let, const, var). var is very old hence its not recommended to use.
// Variables defined with let cannot be Redeclared
// Variables defined with let must be Declared before use
// Variables defined with let have Block Scope.
// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

// let a = 5;
// let b = 6;

// console.log(a + b)

// 4. DATA Types

// 1. Number

// let a = 56;
// let b = 55.5;

// // 2. string

// let c = "Hello";
// let d = "World";

// // 3. object

// const marks = {
//     ravi: 55,
//     yuvi: 89,
//     omi: 88,
//     kanha: 98
// }

// // console.log(marks);

// // 4. Booleans

// let e = true;
// let f = false;

// // 5. Undefined or NULL

// let g = undefined;
// let h = null;

// // console.log(g);
// // console.log(h);

// // There are 2 type of datatypes 1 is primitive and 2nd one is non-primitive or reference data Types.

// // 1. Primitive data types [ undefined, null, number, string, boolean, symbol]
// // 2. Reference data types [ Arrays, Objects ]

// const arr = [1,2,3,4,5,5,6,7,8,8,9,9,0];

// // console.log(arr['3']);

// Operators in JavaScript
// what is operand and operator : + is operator and variable value is operand.
// Arithmetic Operators

// let a = 540;
// let b = 69;

// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a * b is", a*b);
// console.log("The value of a / b is", a/b);
// console.log("The value of a % b is", a%b);

// Assignment Operators

// let c = b;
// c += 2;                 // c = c + 2
// c -= 2;                 // c = c - 2
// c *= 2;                 // c = c * 2
// c /= 2;                 // c = c / 2

// console.log(c);

// Comparison Operators

// let d = 55;
// let e = 66;

// console.log( d == e );
// console.log( d >= e );
// console.log( d <= e );
// console.log( d > e );
// console.log( d < e );

// Logical Opeartors
// and (&&), or (||), not (!) operator

// // & operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// // or || operator
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// // with alt + click we can selecte multiple Cursur

// // not ! operator

// console.log(!true);
// console.log(!false);

// Functions in JavaScript
// DRY Principle : Do not repeat yourSelf.

// function avg(a, b){
//     c = (a + b)/2;
//     return(c);
// }

// c1 = avg(50, 55);

// console.log(c1);

// function license(age) {
//   if (age < 18) {
//     console.log("You are not eligible for Driving License");
//   } else if (age > 60) {
//     console.log("You are out of age for Driving License");
//   } else {
//     console.log("You can apply for Driving License");
//   }
// }

// license(96);

// Conditions in JavaScript

// let age = 26;

// if(age < 18){
//     console.log("You are not eligible for Driving License");
// }
// else if(age > 60){
//     console.log("You are out of age for Driving License")
// }
// else{
//     console.log("You can apply for Driving License");
// }

// Loops    [for loop, while loop]

const arr = ["Volvo", "BMW", "Toyota", "TATA", "Honda", "MG", "Mahindra"];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// while loop

let j = 0;

// while (j<arr.length){
//     console.log(arr[j])
//     j++;
// }

// do while loop

// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

// Break and continue statement

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "TATA") {
//     break;
//   }
//   console.log(arr[i]);
// }

// Continue option skip that object which we pass in our condition and continue 

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "TATA") {
//     continue;
//   }
//   console.log(arr[i]);
// }

// Array Methods
// array.length     : used to find length of array
// array.pop        : used to remove last value of array
// array.push       : Used to add values in the end of array
// array.shift      : used to remove first value of array
// array.unshift    : used to add value from begining of array
// array.toString   : used to convert array values into string
// array.sort       : used to sort array values 

// let myArr = ["Fan", "Lights", 36, null, true];

// console.log(myArr.length);
// myArr.pop();
// myArr.push("arvind");
// // myArr.shift();
// myArr.unshift("Dhiraj");
// console.log(myArr);

// String Methods

// array.length         : used to find length of string
// array.indexOf        : used to find index value of string
// array.lastIndexOf    : used to find index value of last string value
// array.replace        : used to replace value in string, this method replace first occurance.

// let myString = "Yuvi is a Good Boy, He is very Good Boy";

// console.log(myString.length);
// console.log(myString.indexOf("Good"));
// console.log(myString.lastIndexOf("Boy"));

// console.log(myString.slice(0,21));
// console.log(myString.replace("Yuvi", "Omi"));

// Date

// let todaysDate = new Date();

// console.log(todaysDate);
// console.log(todaysDate.getTime());
// console.log(todaysDate.getFullYear());
// console.log(todaysDate.getDay());
// console.log(todaysDate.getMinutes());
// console.log(todaysDate.getHours());

// DOM (Document Object Model) Manipulation 

