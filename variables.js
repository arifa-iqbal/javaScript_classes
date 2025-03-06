// there are 3 ways to declare a variables in javascript
// 1. var
// 2.let
// 3.const
// var is a global scope variable
// let is a balock scope variable
// const is a constant variable
// var is a function scope variable
// let is a block scope variable
// const is a block scope variable
// var can be redeclesred and updated
// let can be updated but not redundent
// const can not be updated and redundent
// var can be hosted
// let can not be hosted
// const can not be hosted
// lwt see the examples of var, let and const
// var
var name = "arif";
console.log(name);
// let
let name1 = "arif";
console.log(name1);
// const
const name2 = "arife";
console.log(name2);
var name = "kasim";
console.log(name);
// let name1 = "kasim";
// console.log(name1); can not be redecelared

// const name2 = "kasim";
// console.log(name2); can not be redecelared
name = "khan";
console.log(name);
console.table({ name, name1, name2 });
// some more examples of var, let and const . let create a user data by using varible and store the folloing data in it
let userName = "ali";
let userEmail = "ali123@gmail.com";
let userPassword;
const accountId = 123456;
var userPhone = 1234567890;
city = "karachi";
console.table({
  userName,
  userEmail,
  userPassword,
  accountId,
  userPhone,
  city,
});
