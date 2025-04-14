// let start filter today's topic
// filter is a method that creates a new array with all elements that pass the test implemented by the provided function
// let understand filter with example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNbrs = numbers.filter((num) => num > 5);
console.log(newNbrs);
// so filter returns a callback function that returns a new array with all elements that pass the test implemented by the provided function
