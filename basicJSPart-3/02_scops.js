// today  we are going to learn about scop in javascript
// in simple word the {} are scop
// Scope in JavaScript:
// in java script scope refers to the accessibility or visibility of variables, functions and objects in different parts of our code. it determines where variables can be accessed or modified.
// the types of scope:
// 1. Global scope: variables declared outside of any function or block are in the global scope.
// 2. function scope: variables declared inside the function. thwy are accessed within function only
// 3. block scope: variables declared with let and const inside a block ({}). accessed in the block only
// let see some examples
// this is globle scope
let a = 20;
// this is function scope
function myNumber() {
  let a = 60;
  //   console.log(a);
}
myNumber();
// this is block scope
{
  let a = 500;
  //   console.log(a);
}
// console.log(a);
// nisted functions and how the scope work in nisted function
function first() {
  const user = "arifa";
  //   the child
  function second() {
    const email = "arifa@gmail.com";

    console.log(user); // here we access the value of parent
  }

  //   console.log(email); //   access the child value. note when we try to access the child value ourside of the second function we find an error here we know that the child can access the value of parent but the parent is unable to access the value of his child.

  second(); //   call the child function
}

first(); // call parent function
