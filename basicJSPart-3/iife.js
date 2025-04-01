// immediately invoked function expressions (IIFE)
// when and why we use IIFE?
// an IIFE is a javascript function that is executed immediately after it is defined.
// we use an IIFE to avoid polluting the Global scope. Variables and functions declared inside an IIFE are not accessible outside of it. This helps prevent conflicts with other code.
// syntax of IIFE
(function () {
  console.log("hello iife");
})();
// or
(() => {
  console.log("hello from arrow function");
})();
