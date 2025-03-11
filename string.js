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
// this way is also not recommended because it is also not efficient
// 3. using template literals
let studentFirstName = "jhon";
let studentLastName = "doe";
let studentFullName = `${studentFirstName} ${studentLastName}`;
console.log(studentFullName);
// so this way is recommended because it is efficient and easy to use and understand
// sometime in interview you can ask about string interpolation
// interview question
// what is string interpolation?
// string interpolation is a process of evaluating string literals containing one or more placeholders
// which are replaced with values
// so this is all about string concatenation in js
// now let's talk about string methods
// so what is string methods?
// string method is a bulit in function that is used to perform some operation on string
// there are many string methods in js
// let's see them one by one by real time example and how and where we can use them in programming
// 1. length
let text = "hello world";
let textLength = text.length;
console.log(text);

console.log(textLength);
// this method is used to find out the length of string
// 2. toUpperCase()
let message = "hello world";
let messageInUpperCase = message.toUpperCase();
console.log(messageInUpperCase);
// this method is used to convert string into uppercase
// here you can ask me question that we can also use css for that then why we use this method?
//  we use this method because we can use this method in programming to convert string into uppercase dynamically
// 3. toLowerCase()
let message1 = "HELLO WORLD";
let messageInLowerCase = message1.toLowerCase();
console.log(message1);

console.log(messageInLowerCase);
// this method is used to convert string into lowercase
// 4. charAt()
let text1 = "i am a developer";
let char = text1.charAt(5);
console.log(char);
// this method is used to find out the character at sprcific index
// can interviewer ask question that how we can find out the character at sepcific index without using charAt() method?
// so what is the answer?
let text2 = "i am a developer";
let character = text2[5];
console.log(character);
// what is the difference between charAt() method and using index:
// charAt() method is used to find out the character at specific index while using index is also used to find out the character st a specific index
// 5. indexOf()
let text3 = "i am learning javascript";
let index = text3.indexOf("learning");
console.log(index);
// this method is used too find out the index of a specific word in a string
// 6. lastIndexOf()
let cont = "i am good and i am happy";
let lastIndex = cont.lastIndexOf("am");
console.log(lastIndex);
// this method is used to find out the last index of a specific word in a string
//  7. includes()
let text4 = "i am a developer";
let isIncludes = text4.includes("developer");
console.log(isIncludes);
// this method is used to find out the specific word is present in a string or not and it returns boolean value
// 8. startsWith()
let text5 = "i am a developer";
let isStartsWith = text5.startsWith("i");
console.log(isStartsWith);
// this method is used to find out the string is stsrt with specific word or not and it returns booleans value
// 9. endsWith()
let text6 = "i am not feeling well";
let isEndsWith = text6.endsWith("feeling");
console.log(isEndsWith);
// this method is used to find out the string is ends with specific word or not and it also returns boolean value
// 10. slice
let para = "i am a developer";
let slicedText = para.slice(5, 13);
console.log(slicedText);
// this method is used to slice the string from specific index to specific index
