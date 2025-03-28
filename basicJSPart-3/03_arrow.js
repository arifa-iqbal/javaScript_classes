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
console.log(this);
