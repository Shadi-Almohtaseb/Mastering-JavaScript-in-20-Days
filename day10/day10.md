# Day 10: Types and Coercion

Discover how the mathematical operation goes on with javascript and some conversion between types like string number array obj NaN null undefined...

## Lesson Summary

- Primitive types: `undefined`, `string`, `number`, `boolean`, `object`, `symbol`.
- Others behave like a type: `undeclared`, `null`, `function`, `array`, `bigint`.
- The `object`, `function` and `array` are objects in javascript and the other above are not.
- Learn some js functions to check the types like `isNaN` and `typeof`.
- Nan is the only value that is not equal to itself `NanValue !== NanValue` so function Number.isNaN() exist in JS.
- Type of NaN is invalid number (number).
- Also to convert the values like `toString()`, `Number()` and `Boolean()`...
- The implicit casting in js.
- Converting -0 to string will be "0".
- How `==` and `===` works.

## Coding Example

```javascript
let num = 42;
console.log(num); // 42
console.log(typeof num); // "number"

let numAsString = num.toString();
console.log(numAsString); // "42"
console.log(typeof numAsString); // "string"

let numFromStr = Number(numAsString);
console.log(numFromStr); // 42 (converted back to number)
console.log(typeof numFromStr); // "number"

// String type and coercion
let str = "Hello";
console.log(str); // "Hello"
console.log(typeof str); // "string"

let strLength = str.length;
console.log(strLength); // 5 (length property)
console.log(typeof strLength); // "number"

let strConcat = str + " World";
console.log(strConcat); // "Hello World"
console.log(typeof strConcat); // "string"

// Boolean type and coercion
let bool = true;
console.log(bool); // true
console.log(typeof bool); // "boolean"

let boolAsString = String(bool);
console.log(boolAsString); // "true"
console.log(typeof boolAsString); // "string"

let boolFromStr = Boolean(boolAsString);
console.log(boolFromStr); // true (converted back to boolean)
console.log(typeof boolFromStr); // "boolean"

// Coercion with loose equality operator
console.log(42 == "42"); // true (coerces string to number)
console.log(true == 1); // true (coerces boolean to number)

console.log(0 == false); // true (coerces boolean to number)
console.log("" == false); // true (coerces string to boolean)

console.log(null == undefined); // true (both are loosely equal)
console.log(null == 0); // false (null only loosely equals undefined)

// Coercion with strict equality operator
console.log(42 === "42"); // false (no coercion, different types)
console.log(true === 1); // false (no coercion, different types)

console.log(0 === false); // false (no coercion, different types)
console.log("" === false); // false (no coercion, different types)

console.log(null === undefined); // false (no coercion, different types)
console.log(null === 0); // false (no coercion, different types)
```

#### My Solution

1. ### [TYPES AND COERCION EXERCISES](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day1-tasks/tasks.md)

```javascript
function convertStringToNumber(input) {
  if (input !== input.toString()) {
    return {
      input,
      type: typeof input,
    };
  }
  return +input;
}

console.log(convertStringToNumber("5"));
```

2. ### [TYPES AND COERCION EXERCISES](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day1-tasks/tasks.md)

```javascript
const checkNaN = (value) => {
  return isNaN(value);
};

console.log(checkNaN("b / a"));
```

3. ### [TYPES AND COERCION EXERCISES](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day1-tasks/tasks.md)

```javascript
function isEmptyValue(value) {
  return value === undefined || value === null || value === "";
}

console.log(isEmptyValue(""));
```

4. ### [TYPES AND COERCION EXERCISES](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day1-tasks/tasks.md)

```javascript
function compareObjects(input1, input2) {
  if (typeof input1 !== "object" || typeof input2 !== "object") {
    return [input1, input2];
  } else {
    const str1 = JSON.stringify(input1);
    const str2 = JSON.stringify(input2);

    return str1 === str2;
  }
}

console.log(compareObjects({ num: 4 }, { num: 4 }));
```

5. ### [TYPES AND COERCION EXERCISES](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day1-tasks/tasks.md)

```javascript
const complexCoercion = (input) => {
  if (input === Object(input)) {
    return input;
  } else {
    if (typeof input === "number") {
      return Boolean(input.toString());
    }
    if (typeof input === "string") {
      return Boolean(input);
    }
    if (input === null || input === undefined) {
      return false;
    }
  }
};
```
