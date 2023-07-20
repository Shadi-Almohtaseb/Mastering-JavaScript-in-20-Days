# Day 12: Scope & Function Expressions

here i learned about the difference function declaration in different cases.
like `function expression` `function named expression`, and `function declaration`.

## Lesson Summary

- function declaration be like: `function myFun() {}`.
- function expression be like: `let myFun = function() {}`.
- function named expression be like: `let myFun = function anotherFun() {}`.

## Coding Example

```javascript
// Function declaration with the name 'myFun'
function myFun() {
  console.log("This is a function declaration.");
}

// Call the function
myFun(); // Output: "This is a function declaration."

/**********************************/

// Function expression assigned to the variable 'myFun'
let myFun = function () {
  console.log("This is a function expression.");
};

// Call the function
myFun(); // Output: "This is a function expression."

/**********************************/

// Function named expression assigned to the variable 'myFun'
let myFun = function anotherFun() {
  console.log("This is a function named expression.");
};

// Call the function
myFun(); // Output: "This is a function named expression."
```
