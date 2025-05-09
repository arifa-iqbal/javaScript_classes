// today we will start loops. loops are also called iteration
// loops are used to repeat a block of code multiple times
// there are 3 types of loops in javascript
// 1. for loop
// 2. while loop
// 3. do while loop
//  let start with for loop
// for loop is used to repead a block of code a specific number of times
// for loop has 3 parts
// 1. initialization: this is where we initialize the loop counter
// 2. condition: this is where we check if the loop should continue or not
// 3. increment: this is where we increment the loop counter
// for loop syntex
// for(initialization; condition; increment){code to be executed}
// for example we want to print number from 1 to 10
// we will use for loop to do that
// we will use console to print the numbers
// let see the code
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// what if i print a message instead number
// let see
for (let i = 1; i <= 10; i++) {
  //   console.log("wellcome to javascript loops");
}
// let use loop in loop
for (let i = 0; i <= 10; i++) {
  //
  for (let k = 0; k <= 10; k++) {
    // console.log(`inner loop ${k} and outer loop ${i}`);
    // let creat a table using loop
    // console.log(`${i} * ${k} = ${i * k}`);
  }
}
// let see how for loop work with array
// let creat an array of students
const students = ["ahmed", "ali", "sara", "mohammed"];
// let print the loop
for (let i = 0; i < students.length; i++) {
  const student = students[i];

  //   console.log(student);
  //    console.log(`student name ${i + 1} is ${students[i]}`);
}
// let see what id break and continue statement through the loop understand with example
// by the name we can understand that break is used to break the loop and continue is used to continue the loop
// let see example
//  let creat an array of name of famous books
const books = [
  "the alchemist",
  "the power of now",
  "the power of positive thnking",
  "the art of been alone",
  "the art of war",
  "the art of happiness",
];
for (let i = 0; i < books.length; i++) {
  const book = books[i];
  // if the book name is the art of been alone then break the loop
  if (book == "the art of war") {
    // break; // break will brake the loop and exit the loop
    continue; // continue will skip the current iteration and continue to the next iteration
  }

  console.log(book);
}
