// so its time to learn about date and time in javascript
// in javascript, the Date object is used to work with dates and times.Here are some key points about working with dates and time in javascript:
// first of all creat a Date Object
// here we can create a new Date object by using the Date constructor:
let now = new Date();
console.log(now);

// getting date and time components
// we can retrieve various components of a date using methods if the Date object:
// getDate showes date of months (1 - 30 or 31)
console.log(now.getDate());
// getDay showes days of a week in the form of number (0-6 while the 0 is sunday)
console.log(now.getDay());
// getFullyear showes year
console.log(now.getFullYear());
// getMonth showes  months but its starts from (0-11) if its show 0 then it means its Jan
console.log(now.getMonth());
// getMinutes showes minutes (0-59)
console.log(now.getMinutes());
// getSeconds showes seconds (0-59)
console.log(now.getSeconds());
// Milliseconds (0-999)
console.log(now.getMilliseconds());
// Hours (0-23)
console.log(now.getHours());
