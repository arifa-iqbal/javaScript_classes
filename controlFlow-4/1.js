// to we talk about the control flow in javascript
// and how to use it in javascript
// so the control flow is the order in which the code is executed and its is important to understande how it works in javascript.
// how we can use it in our code
// the code should run on condition if all the code run at the same time it will be a mess
// let see what are the condition we can use in javascript
// the first one is if statement
// the if statement is used to execute a block of code if the condetion is true
//  the syntex of if statement is as follow
// if (condition) {the code to be executed if the condition is true}
// let see an example
// let say we have a variable called age and we want to check if the age is greater than 18 then we will print a message to the console
// let age = 20;
// if (age > 18) {
//   console.log("you are an adult");
// };
// now let see if the age is less than 18
// let age = 16;
// if (age < 18) {
//   console.log("you are not eligible to vote");
// }
// let see if else atatement
// the else statement is used to execute a block of code if the condition is false
// the syntex of else atatement is as follow
//  if (condition) { the code to be executed } else {the code to be executed if the condition is false}
// let see an example an understand it better
let age = 17;
if (age > 18) {
  console.log("you are eligible to vote ");
} else {
  console.log("you are not eligible to vote");
}
// the third one is else if statement the else if statement is used to check multiple conditions
// the syntex of else if statement is as follow
// if (condotion) {the code to be executed if the condition is true } else if (condition){ the code to be executed if the condition is true } else {the code to be executed if the condition is false}
// let see an example
// let say we have a variable called age and we want to check if the age is greater than 18 then we will print a message to the console if the age is less than 18 then we will print a message to the console if the age is equal to 18 then we will print a message to the console
let age1 = 18;
if (age1 > 18) {
  console.log("you are eligible to vote");
}
if (age1 < 18) {
  console.log("you are not eligible to vote");
} else {
  console.log("you are 18 years old");
}
// the forth one is switch statement the switech statement is used to execute a block of code based on different cases
// the syntex of switch statement is as follow
// switch (expression){ case value1: the code to be executed if the expression is equal to value1 break; case value2: the code to be executed if the expression is equal to value2 break; default: the code to be executed if the exepression is not equal to any of the cases}
// let see an example
// let say we have a variable called day and we want to check what day is it and we will print a message to the console
let day = 7;
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thusday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("invalid day");
}
