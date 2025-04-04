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
