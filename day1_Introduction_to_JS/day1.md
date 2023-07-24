# Day 1: Introduction to JS

Basics javascript commands, What is the Document Object Model `(DOM)` and how to use it and write simple JavaScript code.

## Lesson Summary

- DOM is a programming interface provided by web browsers that allow JavaScript code to interact with the content and structure of an HTML or XML document.
- Use `let` and `const` to declare variables and make some simple calculations.
- Some operators like += -= _= _=
- Use Document to add, edit and read the elements of the web page, like `document.title` and `document.getElementById("board")` and `document.getElementById("p1-name").textContent = my content`.

## Coding Example

```javascript
function calculateSum(a, b) {
  return a + b;
}
function isEven(number) {
  return number % 2 === 0;
}
function printMessage(message) {
  console.log(message);
}
const num1 = 5;
const num2 = 7;
const sum = calculateSum(num1, num2);
printMessage(`The sum of ${num1} and ${num2} is ${sum}.`);

const checkNumber = 10;
if (isEven(checkNumber)) {
  printMessage(`${checkNumber} is even.`);
} else {
  printMessage(`${checkNumber} is odd.`);
}
```

#### My Solution

1. ### [Compound Assignment With Augmented Multiplication](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)

```javascript
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
```

2. ### [Concatenating Strings with the Plus Equals Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)

```javascript
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
```

3. ### [Use Bracket Notation to Find the Nth-to-Last Character in a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)

```javascript
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
```
