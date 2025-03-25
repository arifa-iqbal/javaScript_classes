// today we are going to learn about functions in javascript, how founctions can work? why they are important?
// lets learn with realy life examples
// first let see what is function?
// so functions in javascript is a block of code designed to perform a particular task. for example
function greet() {
  console.log("hello world");
}
greet();
// function greet() {console.log("hello world");} this pice of code can not work util we call the function to execute the function it is importent to call the function and we can call function  greet(); like this
// lets learn more about function let see how we can add numbers in a function
function addNumbers(nbr1, nbr2) {
  let result = nbr1 + nbr2;
  return result;
}
const result = addNumbers(20, 10);
console.log(" the result is:", result);
// this is the way how we can add nbrs in functions
// today we are going to lear more about functions
// let start with restoperator in javascript
// the rest operator (...) allows us to represent an indefinite number of arguments as an array. it is usde in a function parameters to geather all remaining arguments into an array.
// the rest operater is represented by three dots (...) let see how it works
function count(...numbers) {
  return numbers;
}
console.log(count(400, 400, 200, 20, 10, 80));
// some time we have this type of function wher we become so confused
function myValues(vlu1, vlu2, ...vlu3) {
  return vlu3;
}

console.log(myValues(500, 200, 400, 300, 100));
// so what doyou think what should be the answer of this? let see the answer is [400,300,100] but were are the first two perameters ?  the first two values are  captured by vlu1 and vlu2
// the argument we passed: 500, 200, 400, 300, 100
// captured by vlu1: 500
// captured by vlu2: 200
// capture by vlu3: [400, 300,100]
// let see how to use objects in a function
function user(firstUser) {
  console.log(`userName is ${firstUser.name} and the id is ${firstUser.id}`);
}
user({
  name: "faizan",
  id: 30,
});
//we can use arrays in function
// const myArray = [100, 20, 30, 60, 80];

function getSecondValue(myValue) {
  return myValue[1];
}
// console.log(getSecondValue(myArray)); we can also do this same like

console.log(getSecondValue([100, 20, 30, 60, 80]));
