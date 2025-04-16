// let see reduce method in javascript
// reduce method is used to reduce the array to a single value
// it takes a callback function and an initial value as arguments
// the callback function takes two arguments, accumulator and current value
//  the accumulator is the value returned by the percious call of the callback function
//  the current value is the current element of the array
//  let see an example of reduce method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce((accumulation, currentValue) => {
//   return accumulation + currentValue;
// }, 0);
// console.log(sum);
// lets create a card where we can see the sum of item which we buy
const items = [
  { books: 2, price: 80 },
  {
    vegtables: "2kg",
    price: 100,
  },
  { fruits: "1kg", price: 50 },
  { milk: "2l", price: 120 },
  { eggs: "1dozen", price: 60 },
];
const totalPrice = items.reduce((accumulation, currentValue) => {
  return accumulation + currentValue.price;
}, 0);
console.log(totalPrice);
// so our total price is 410
