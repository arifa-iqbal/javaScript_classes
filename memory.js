// today we are going to learn about memory in javascript
// so what is memory?
// memory is a stroage area in a compouter sysyem where data is stroed for later use by the computer's processor
// there are 2 types of memory in javascript
// 1. stack memory
// 2. heap memory
// now let see them in detail
// 1. stack memory (primitive data types)
// stack memory is a memory that is used to share the data between the functions in javascript
// stack memory is a memory that is used to store the data in a last in first out order
// stack memory is a memory that is used to store the data in a fixed size
// it is a memory that is used to store the data in a sequential order
// now let see the example of stack memory
// function add(a, b) {
// return a+b;}
// here we have a function add that takes 2 parameters a and b
// now let call this function
// add(10, 20);
// now let see the stack memory of this example
// 1. first of all the function add is called
// 2. then the parameter a is stored in the stack memory
// 3. then the parameter b is stored in the stack memory
// 4. then the function add is executed
// 5. then the result is stored in the stack memory

// 2.heap memory (non-primitive data types)
// heap memory is a memory that is used to store the data in a dynamic size
// it is used to store the data in a random order
// it is used to store the data in a non-sequential order
// it is used to store the data in a last in first out order
// now let see the examples
// let user = {
// name: "arifa",
// age:20,
// isLogin: true}
// here we have a object user that has 3 properties name, age and isLogin
// now let see the heap memory of this example
// 1. first of all the object user id created
// 2. then the property name is stored in the heap memory
// 3. then the property age is stored in the heap memory
// 4. then the property isLogin is stored in heap memory
// 5. then the object user is stored in the heap memory
// 6. then the object user is executed
// 7. then the result is stored in the heap memory
