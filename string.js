// so today we are going to learn about string in javascript in detial
// so let's start
// string is a data type in javascript which is used to store text value
// string is a sequence of characters
// string is a primitive data type in js
// now here we can learn about hoe to add 2 string data in js
// we call it concatenation
// so let's see how we can do that
// there are 3 ways to concatenate string in js
// 1. using + operator
// 2. using concat() method
// 3. using template literals
// let see practical example of all 3 ways
// 1. using + operator
let firstName = "jhon";
let lastName = "doe";
let fullName = firstName + " " + lastName;
console.log(fullName);
// using this way in programming is not recommended because it is not efficient
// 2. using concat() method
let userFirstName = "jhon";
let userLastName = "deo";
let userFullName = userFirstName.concat(" ", userLastName);
console.log(userFullName);
