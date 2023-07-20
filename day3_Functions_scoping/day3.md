# Day 3: Functions and scoping

Learning how to deal with arrow functions in JavaScript and the scoping of the variables `let` and `const` and applying some functions to the arrays like `push()` and `shift()`.

## Lesson Summary

- Applying arrow functions.
- Differentiate between the scope of let and const.
- Useing the shift() and push() functions on array.

## Quiz Project

- JavaScript was invented in 1995.
- Strings in javascript are not editable values.
- 1 + 1 === 2 is true.
- '1' + '1' === '2' is false.
- typeof ['J', 'S'] === 'array' is false.

## Coding Example

```javascript
// Arrow Functions
const add = (a, b) => a + b;
console.log("Sum:", add(2, 3));

const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log("Product:", multiply(4, 5));

// Scope (let vs const)
function exampleScope() {
  let x = 10;
  const y = 5;

  if (true) {
    let x = 20;
    const y = 8;
    console.log("Inner Block:", x, y);
  }
  console.log("Outer Block:", x, y);
}

exampleScope();

// Using shift() and push() on Array
const numbers = [1, 2, 3, 4, 5];
console.log("Original Array:", numbers);

const shiftedElement = numbers.shift();
console.log("Shifted Element:", shiftedElement);
console.log("Updated Array (after shift()):", numbers);

numbers.push(6);
console.log("Updated Array (after push()):", numbers);
```

## My Solutions

1. ### [Return a Value from a Function with Return](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)

```javascript
const timesFive = (n) => {
  return 5 * n;
};
```

2. ### [Global Scope and Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)

```javascript
// Declare the myGlobal variable below this line
let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

3. ### [Local Scope and Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)

```javascript
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);
```

4. ### [Global vs. Local Scope in Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)

```javascript
// Setup
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();
```

5. ### [Stand in Line](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)

```javascript
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const removedItem = arr.shift();
  return removedItem;
  // Only change code above this line
}
// Setup
let testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```
