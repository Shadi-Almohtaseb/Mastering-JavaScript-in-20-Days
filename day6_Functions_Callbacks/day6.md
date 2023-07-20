# Day 6: JavaScript: The Hard Parts, V2

It's includes `Introduction`, `JavaScript Principles`, and `Functions & Callbacks` witch is so important to work with javascript and to know more about the interview questions.

## Lesson Summary

- What is generalized function.
- Learn what is the `callback function` and how to use it.
- How to implement the `higher order function` and passing the callback to it.
- Writing the callback as an arrow function.
- doing a simple recursion function.

## Coding Example

```javascript
// my own code test
function operationGenerator(a, b, instructions) {
  return instructions(a, b);
}

console.log(operationGenerator(5, 3, (a, b) => a + b)); // Output: 8
console.log(operationGenerator(10, 4, (a, b) => a - b)); // Output: 6
console.log(operationGenerator(2, 6, (a, b) => a * b)); // Output: 12
console.log(operationGenerator(15, 3, (a, b) => a / b)); // Output: 5

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
function map(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    console.log(callback(array[i]));
  }
}

// see for yourself if your forEach works!
let alphabet = "";
const addChar = (char) => (alphabet += char);
forEach(["a", "b", "c", "d"], addChar);

// Challenge 5
function mapWith(array, callback) {
  forEach(array, callback);
}
mapWith([1, 2, 3], addTwo);
```

#### My Solution

1. ### [Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)

```javascript
const squareList = (arr) => {
  return arr
    .map((item) => {
      if (item > 0 && Number.isInteger(item)) {
        return item * item;
      }
      return null;
    })
    .filter((item) => item != null);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

2. ### [Apply Functional Programming to Convert Strings to URL Slugs](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)

```javascript
// Only change code below this line
const arr = [];
function urlSlug(title) {
  return title
    .trim()
    .split(" ")
    .filter((item) => item !== "")
    .join("-")
    .toLowerCase();
}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));
```

3. ### [Exercises for functions and callbacks Question 1](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day1-tasks/tasks.md)

```javascript
const mapAsync = (arr, callback) => {
  return new Promise((resolve, reject) => {
    if (arr) {
      resolve(arr.map((item) => callback(item)));
    } else {
      reject("something went wrong!");
    }
  });
};

mapAsync([1, 2, 3, 4, 5], (item) => item * 2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

3. ### [Exercises for functions and callbacks Question 2](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day1-tasks/tasks.md)

```javascript
const sumRange = (first, last) => {
  if (first === last) {
    return first;
  } else {
    return sumRange(first + 1, last) + first;
  }
};

console.log(sumRange(0, 5)); // 15
```
