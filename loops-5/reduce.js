// let see reduce method in javascript
// reduce method is used to reduce the array to a single value
// it takes a callback function and an initial value as arguments
// the callback function takes two arguments, accumulator and current value
//  the accumulator is the value returned by the percious call of the callback function
//  the current value is the current element of the array
//  let see an example of reduce method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initialValue = 0;
const sum = numbers.reduce((accumulation, currentValue) => {
  return accumulation + currentValue;
}, initialValue);
console.log(sum);
