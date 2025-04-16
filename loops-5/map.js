// let see what is map in javascript
// map is a higher order function that takes a function as an agrument and applies it to each element in the array and returns a new array with the results
// map is a non mutating function that does not change the orginal array
// now what is non nutating function?
// non mutating function is a function that does not change the orginal array or object
// let understand this with an example
const numbers = [1, 2, 3, 4, 5, 6];
// const newNums = numbers.map((num) => {
//   return num + 10; // if we use scops in any function , we should use return ststement to return the value of the function other wise it will return undefined
// });

// let see how chaning work in javascript
const newNums = numbers
  .map((num) => num * 10)
  .map((num) => num + 5)
  .filter((num) => num >= 20);
console.log(newNums);
