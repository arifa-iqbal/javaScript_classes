// so today we are going to study about an array in javascript
// now what is an array?
// an array is a special type of object used to store multiple values in a single variable. array can hold elements of any data type it include number, string, object and even other array.
// arrays are dynamic , means their size can be cahnge as elements are added or removed.
// let do some practice by creating an array
// how we can careate an empty array
// let arrEmpty = [];
// console.log(arrEmpty);
// let see with number data type
// let numArry = [1, 2, 3, 4, 5];
// console.log(numArry);
// in console we can observe that the length shown as 5 but the index show 4 this is because in array its start whith 0 index.
// let see what if we did this
// let arr = new Array(5);
// console.log(arr);
// this is arry with specified length but in result it shows the empty arry with length 5.its just for learn perpose

// let further learn about array methods in javascript
// javascript array come with many built-in methods to manipulate and interact with the elements:
// let explan and practic it
//push method Appends new elements to the end of an array, and returns the new length of the array. push(): Adds one or more elements to the end of an array.
let arrMethod = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arrMethod.push(10, 11, 12);
// console.log(arrMethod);
// pop(): Removes the last element from an array.
// arrMethod.pop();
// console.log(arrMethod);
// shift(): Removes the first element from an array.
// arrMethod.shift();
// console.log(arrMethod);
// unshift(): Adds one or more elements to the beginning of an array.
// arrMethod.unshift(2);
// console.log(arrMethod);
// splice(): Adds/removes elements from an array.
// The splice() method is used to add or remove elements from an array. It modifies the original array and returns the removed elements.
// arrMethod.splice(0, 6);
// console.log(arrMethod);
// slice(): Returns a shallow copy of a portion of an array.
// let arr = [1, 2, 3, 4, 5];
// let copy = arr.slice();
// console.log(copy);
