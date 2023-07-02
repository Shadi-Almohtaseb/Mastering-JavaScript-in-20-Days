# Day 1: Introduction to JS

Basics javascript commands, What is the Document Object Model `(DOM)` and how to use it.

## Lesson Summary

- use `let` and `const` to declare variables and make some simple calculation.
- some operators like += -= *= *=
- use Document to add, edit and read the elements of the web page, like `document.title` and `document.getElementById("board")` and `document.getElementById("p1-name").textContent = my content`.

## Coding Exercises

1.

```javascript
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
```

2.

```javascript
let myStr;
```

3.

```javascript
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName; // Change this line
```

1. ### [Compound Assignment With Augmented Multiplication](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)
2. ### [Concatenating Strings with the Plus Equals Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)
3. ### [Use Bracket Notation to Find the Nth-to-Last Character in a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)

#### My Solution

1.

```javascript
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
```

2.

```javascript
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
```

3.

```javascript
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
```
