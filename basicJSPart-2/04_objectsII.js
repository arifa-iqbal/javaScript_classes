// singleton object
// A singleton object is an object that is created only once and shared everywhere in the program. No matter how many times you try to create it, you'll always get the same object.
// here is an example
const remote = {
  brand: "samsung",
  use: function () {
    console.log("controlling tv..");
  },
};
const remote1 = remote;
const remote2 = remote;
// console.log(remote1 === remote2);
// nested objects
const reglrUser = {
  email: "someone@gmail.com",
  fullname: {
    userfullname: {
      firstname: "anila",
      lastname: "aman",
    },
  },
};
// console.log(reglrUser.fullname.userfullname.firstname);
// how to marg 2 or more objects in one object let see
// first let create an object
const nbrs = {
  1: "a",
  2: "b",
  3: "c",
};
const nbrs2 = {
  4: "d",
  5: "e",
  6: "f",
};
// lets combine them
// const nbrs3 = { nbrs, nbrs2 };
// console.log(nbrs3);
// let see another method assign method
// const nbrs3 = Object.assign({}, nbrs, nbrs2);
// console.log(nbrs3);
// here we are mostly using  spread operator
// const nbrs3 = { ...nbrs, ...nbrs2 };
// console.log(nbrs3);
// de-structure of an object
// Destructuring an object in JavaScript means extracting values from an object and assigning them to variables in a simpler way. It allows you to access object properties without needing to reference the object multiple times.
// let create an object and see how it works
const student = {
  name: "kamal",
  age: 20,
  email: "kamal@gmail.com",
};
// destructuring
const { name, age, email } = student;
console.log(name);
console.log(age);
console.log(email);
