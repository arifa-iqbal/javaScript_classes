// here further more about arrays
// we are talkinhg about 3 operator in an array 1. push() 2. concat() 3. spread
// let learn about push and concat in array
const food = ["baryain", "pizza", "burgur", "rice"];
// console.log(food);
const drinks = ["coke", "mintwater"];
// console.log(drinks);

// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// when we push these 2 arrays it returns array in array
// food.push(drinks);
// console.log(food);
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays but returns a new array.
// const myFood = food.concat(drinks);
// console.log(myFood);
//it concat both arrays
// The spread operator allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
// const all = [...food, ...drinks];
// console.log(all);
// if we have array inside that array we have another like array in array so how we can marge that in to one array let see this
const arrayInArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];
// in this we can use flat
const finalArray = arrayInArray.flat(Infinity);
console.log(finalArray);
