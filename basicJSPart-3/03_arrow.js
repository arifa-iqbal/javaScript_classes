// arrow functions and this concept
// what is "this" in function
// "this" refers the current context for example
const user = {
  name: "arifa ",
  email: "arifa@gamil.com",
  welcommessage: function message() {
    console.log(`${this.name}, welcome `); // for using current context we can use "this"

    // console.log(this);  //  what if we use only "this" it returns all the context in side the variable
  },
};

user.welcommessage(); // here we find the same value
// but what if i change the value of the name? what is the ans let see
user.name = "iqbal";
// let call the function again
user.welcommessage();
// and the ans is the current value means this returns the current value "iqbal"
// what if use "this" out here
// console.log(this);
// now let see can w use "this " in normal and in arrow function
// normall function
function data() {
  let user1 = "arifa";
  console.log(this.user1);
}

data();
// here we find undefind because we cant use this methed in functions
// let see what is arrow function
// the syntext of arrow function is
// const addNum = (num1, num2) => {
//   return num1 + num2;
// };

// now what is implicit return in js ?
// in javascript implicit return refers to the behaviour of arrow function where the return keyword can be omitted if the function body consists of a single expression.
// use this

// const addNum = (num1, num2) => num1 + num2; // or

// this
const addNum = (num1, num2) => num1 + num2;
console.log(addNum(20, 60));
