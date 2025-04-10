// lets talk about higher order array loops
// first is for of loop
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of array) {
  //   console.log(number);
}
// we can also use this loop over strings
// let see how it works on strings
const greeting = "hello world!";
for (const greet of greeting) {
  //   console.log(`each char is ${greet}`);
}
// now lets see what is map and how it works
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
