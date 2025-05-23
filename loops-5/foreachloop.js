// let see what is for each loop
// forEach loop is used to iterate over an array
// it takes a callback function as an argument. the callback function is called for each element in the array

// the callback function takes three elements as arguments
// 1. current value
// 2. index of the current value
// 3. the array itself
//the forEach loop does not return anything. it is used to iterate over an array and perform some opration on each element os the array
// let understand this with example
const numbers = [1, 2, 3, 4, 5];
// use foeEach loop to iterate over the array and print each element
numbers.forEach(function (number, index, array) {
  //   console.log(
  //     `the current number is ${number} at index ${index} of array ${array}`
  //   );
});
// let see how to use forEach loop in object multiple arrays within an object
const myCode = [
  { languageName: "javascript", languageCode: "js" },
  {
    languageName: "python",
    languageCode: "py",
  },
  { languageName: "java", languageCode: "java" },
  {
    languageName: "c++",
    languageCode: "cpp",
  },
];
// use forEach loop to iterate over the array and print each element
myCode.forEach((item) => {
  //   console.log(item.languageCode);
  //   console.log(item.languageName);
});
// what if i store the forEach loop in a variable and use it let see
const myCode1 = ["javascript", "pythan", "java", "c++"];
const value = myCode1.forEach((item) => {
  //   console.log(item); //   comment this line to see the out of the code
});
console.log(value); // let see what is the output of this code
// so the output is undefined because forEach loop does not return anything. it is use to iterate over an array and perform some opration on each element as the array.
