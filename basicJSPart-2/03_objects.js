// today we are going to learn about objects in javascript
// first of all let see what is objects and how we can use them in javascript?
// in a javascript, an object is a collection of properties, where each property is defined as a key-value pair.
// we can create an object using object literal syntax oe the object constructor.
// let create an object
// this object is create through object litetal
const mySmb = Symbol("key");
let user = {
  name: "Anila",
  "full name": "anila aman",
  [mySmb]: "mykey1",
  age: 26,
  userid: 123,
  department: "accounts",
};
// console.log(user);
// now we create object through constructor
let student = new Object();
student.name = "mahe";
student.age = 20;
student.gread = 12;

// console.log(student);
// now how we can access object? for accessing objects we have properties using dot notation or bracket notation
// now here is question what is the difference between dot notation and bracket notation ?
// in javascript we can access object properties using either dot notation or breacket notation. both notations serve the same properties but have different use cases and syntax.
// Dot Notation
// DotNotation is most common way to access object properties. it is simple
// the syntax is "object.property"
// let see how to use it
// console.log(user.name);
// console.log(user.age);
// console.log(user.userid);
// so this is the way how we can get the object properties by using dot notation
// Bracket Notation
// bracket notation allows use to access object properties using a string key. this is useful when the property name is dynamic or not a valid identifier.
// it is use for this type of values  in object which we cant access through dot notation   "full name": "anila aman", so let see
// console.log(user["full name"]);

// console.log(user["name"]);
// okay bracket notation is also use when we use symbols in out object let see how to use symbles in object.
// after creating a symbol now let access its value
// console.log(user[mySmb]);
//  now lets talk about how we can change the value of key of an object
// for example we can change the department of a user
// user.department = "sales";
// console.log(user.department);
// we can also freez the object, wehen we dont want any changings in our object so we can use freez
// Object.freeze(user);
// now let see can we change the data
// user.department = "account";
// console.log(user);
// we can also use functions in out objects
//  let see how
user.greeting = function () {
  console.log("hello anila");
};
console.log(user.greeting());
console.log(user);
// string interpolation in javascript
// string interpolation is a method of embedding expressions within string literals, alloweing you to create strings that include dynamic content. let see how its work
user.greetingTwo = function () {
  console.log(`hello our user, ${this.name}`);
};
console.log(user.greetingTwo());
