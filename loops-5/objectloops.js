// let see which loops wrks over objects
// lets talk about for in loop
//  for in loop is used to iterate over the properties of an object
// for in loop is used to iterate over the elements of an array
// let learn with examplea
let obj = {
  name: "john",
  age: 30,
  city: "newyork",
};
// for in loop is use to iterate over the properties of an object
for (let key in obj) {
  //   console.log(key + ":" + obj[key]);
}
// can i use for in loop to iterate over the elements of an array?
// let see
let arr = [1, 2, 3, 4, 5];
// for in loop is use to iterate over the elements of an array
for (let key in arr) {
  //   console.log(key + ":" + arr[key]);
}
