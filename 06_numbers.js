// so today let talk about numbers and math in javascript
// so first talk about numbers how we can use them in javascript and realy time projects what defficulity we can face and how we can solve them
// so first talk about what is number in javascript?
// number is a basically a data type in javascript that is used to store numbers
// so how we can stroe numbers in javascript?
// we can store numbers in javascript by using numbers
// so how we can declare numbers in javascript?
// we can declare numbers in javascript by using numbers
// let me show you how we can declare numbers in javascript
let number = 10;
console.log(number);
// which method we can use in numbers?
// we can use all the methods in numbers that we can use in strings
//  let me show you
console.log(number.toString());
console.log(number.toFixed(0));
console.log(number.toExponential());
console.log(number.toPrecision(2));
// so these are some methods that we can use in numbers
// we can also use sime maths methods in numbers
// let me show
console.log(Math.abs(-20));
// this method id used to get the absolute value of a number we can also use this method in strings and other data types
// in math.abs we can change the sign of a number not all signs but only negitive in to positive
console.log(Math.ceil(4.3));
// this method is used to get the ceil value of a number
console.log(Math.floor(4.3));
// this method is used to get the floor value of a number now what is the difference between ceil and floor?
// ceil is used to get the upper value of a number and floor is used to get the lower value of a number
console.log(Math.round(4.5));
// math.rendom can give us values between 0 and 1  for example 0.1, 0.2,... etc
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// console.log(number);
// so this is how we can declare numbers in javascript
// now its time to talk about some math in javascript and how we can use it in javascript
// first talk about some basic math in javascript
// how we can do addition in javascript?
//  we can do addition in javascript by using + operator
// let me show you some examples
let num = 10 + 10;
console.log(num);
// this is a simple example of addition
// let try some complex addition
let num1 = 500;
let num2 = 100;
let add = num1 + num2;
console.log(add);
// let see subtraction
let sub = num1 - num2;
console.log(sub);
