// dataTypes in JavaScript
// now the question is what is data type?
// so data type is a type of data that can be stored in a variable.
// there are 7 types of data types in javascript
// 1. string
// 2. number
// 3. boolean
//  4. null
// 5. undefined
// 6. boject
// 7. symbol
// now let see them in detail
// 1.string
// string is a data type that is used to store text data
let name = "arifa";
// this ia a string data type
// 2. number
// number is a data type that is used to store numeric data
let age = 20;
// this is a number data type
// 3. boolean
// boolean is a data type that is used to store true or falue value
let isLogin = true;
let isLogout = false;
//  this is a boolean data type
//  4. null
//  null is a data type that is used to store null value
let nullValue = null;
//  this is a null data type
// 5. undefined
// undefined is a data type that is used to store undefined value
let undefinedValue = undefined;
// this is a undefined data type
// 6. object
// object is a data type that is used to store multiple data types
let user = {
  name: "arifa",
  age: 20,
  isLogin: true,
};
//  this is a object data type
// 7. symbol
// symbol is a data type that is used to store unique value
// let id = symbol("id");
// now the question is where we can use this symbol data type
//  so we can use this symbol data type in the following ways
// 1. as a object key
// let id = symbol("id");
// let user1 ={
//     [id]: 123456,

// };
// 2. as a private property
let id = symbol("id");
let user3 = {
  name: "ali",
  [id]: 123456,
};
