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

// summary of javascript data types
// there are 2 main types of data types in javascript
// 1. primitive data types
// 2. non-primitive data types
// now let see them in deetial
// 1.primitive data types
// primitive data types are immutable data types that can not be changed
// these are call by value data types
// there are 7 types of primitive data types in javascript
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint
// 2. non-primitive data type or reference data type
// non-primitive data type are mutable data types that can be changed
// there are 3 types of non-primitive data types in java script
// 1. object
// 2.array
// 3.function

// when i use typeof operation in javascript then it will return the data type of a variable like this
// 1.undefined typeof undefined
// 2.null typeof object
// 3.boolean typeof boolean
// 4.number typeof number
// 5.string typeof string
// 6. symbol typeof symbol
// 7. bigint typeof bigint
// 8. object typeof object
// 9. function type of function
// 10. array typeof object
// 11. data type of a variable

// javascript is a dynimic language so we can change the data type of a variable
