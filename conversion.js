// to day we learn about conversion operation in javascript
// so what is conversion operation?
// conversion operation is a process of converting one data type into another data type
// there are 2 types of conversion operation in javascript
// 1. implicit conversion
// 2. explicit conversion
// now let see them in detial
// 1. implicit conversion
// implicit conversion is a process of converting one data type into another data type automatically by javascript
let num = 10;
let num1 = "10";
let sum = num + num1;
console.log(sum);
// 2. explicit converstion
// explicit conversion is a process of conversion one data type to another data type manually by javascript
let num2 = 10;
let num3 = "10";
let sum1 = num2 + num3;
console.log(sum1);
let sum2 = num2 + Number(num3);
console.log(sum2);
// let see the type of this example
console.log(typeof Number(num3));
// let see some more example of explicit converstion
let numb = 20;
let numb1 = "20";
let sum3 = numb + numb1;
console.log(sum3);
let sum4 = numb + Number(numb1);
console.log(sum4);
// here comes a question that how we can convert a string data type into a number data type
// so we can convert a string data type into a number data type by using the following methods
// 1.Number()
// 2.parseInt()
// 3.parseFlaot()
let number = "30";
console.log(typeof number);
let number1 = Number(number);
console.log(typeof number1);
let number2 = parseInt(number);
console.log(typeof number2);
let number3 = parseFloat(number);
console.log(typeof number3);
// can we convert a number data in to string , boolean, null, undefined, object and symbole data type by using above methods?
// so the answer is yes we can convert a number data type into string, boolean, null, undefined, object and symbol data type by using above methods
let num4 = 40;
let num5 = String(num4);
console.log(typeof num5);
let num6 = Boolean(num4);
console.log(typeof num6);
let nbr = null;
let nbr1 = String(nbr);
console.log(typeof nbr1);
let nbr2 = Boolean(nbr);
console.log(typeof nbr2);
let nbr3 = Number(nbr);
console.log(typeof nbr3);
let nbr4 = undefined;
let nbr5 = String(nbr4);
console.log(typeof nbr5);
// why we need conversion in javascript? and wher we can use it?
// so we need conversion in javascript to convert one data type to another data type
// we can use conversion in the following ways
// 1. to convert a string data type into a number data type
// here comes a question that why we need to convert a string data type to a number data type why we dont use string data type directly?
// so the answer is we need to convert a string data type into a number data type because we can not perform mathematical operations on string data type.
// if we want to perform mathematical operations then why we dont use number data type directly?
// so the answer is we need to convert a string data type into a number data type because we can not get the value of input field in number data type.
