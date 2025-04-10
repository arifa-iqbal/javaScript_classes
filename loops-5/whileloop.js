// lets talk about while loop in javascript
// while loop is used to execute a block of code as long as the condition is true
// while loop is used when we dont know how many times the loop will run
// while loop syntax as follows
//while(condition){code to be executed}

// example of ewhile loop
// let i = 0;
// while (i < 5) {
//   console.log("i is less than 5", i);
//   i++;
// }
// let i = 0;
// while (i <= 20) {
//   console.log(`the value of i is ${i}`);
//   i++;
// }
// let see while loop with array
// we ha an array of brands and we want to print the brands in the array
// let brands = ["apple", "samsung", "nokia", "huawei", "oppo", "vivo", "realme"];
// let brnd = 0;
// while (brnd < brands.length) {
//   console.log(brands[brnd]);
//   brnd++;
// }
// let talk about do while loop
// do while loop is used to execute a block of code at least once and then repeat the loop as long as the condition is true
// do while loop syntax as follows
// do{code to be executed}(condition);
// let understand with example
let i = 0;
do {
  console.log(`the value if i is ${i}`);
  i++;
} while (i < 5);
// let see do while loop with array
// we have an array of brands and we want to print the brand in the array
let brands = ["apple", "samsung", "nokia", "oppo", "vivo"];
let brnd = 0;
do {
  console.log(brands[brnd]);
  brnd++;
} while (brands.length > brnd);
