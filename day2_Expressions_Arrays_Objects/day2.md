# Day 2: Expressions, Arrays, Objects

Learning how to use `map` and `filter`, and the `spread operator` and some JavaScript functions.

## Lesson Summary

- Filtering the contact array to check if the first Name matches the name from the props.
- Make a simple validation before returning the contact details.
- Dealing with arrays and JavaScript functions like `arr.slice(2,4)`.
- learn how to use the spread operator on the arrays like `[...fragment]`.

## Coding Example

```javascript
const x = 10;
const y = 5;
const sum = x + y;
const product = x * y;

console.log("Sum:", sum);
console.log("Product:", product);

// Arrays
const numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

const fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits);

const mixedArray = [1, "apple", true, null];
console.log("Mixed Array:", mixedArray);

console.log("First Fruit:", fruits[0]);
console.log("Array Length:", numbers.length);

// Objects
const person = {
  name: "John Doe",
  age: 25,
  isStudent: true,
};

console.log("Person:", person);
console.log("Person Name:", person.name);
console.log("Person Age:", person["age"]);

person.city = "New York";
console.log("Updated Person:", person);
```

#### My Solution

1. ### [Profile Lookup](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)

```javascript
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let contact = contacts.filter((item) => item.firstName === name);

  if (!contact[0]) {
    return "No such contact";
  }
  if (!contact[0][prop]) {
    return "No such property";
  }
  return contact[0][prop];
  // Only change code above this line
}

lookUpProfile("Akira", "address");
```

2. ### [Copy Array Items Using slice()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

```javascript
function forecast(arr) {
  // Only change code below this line
  return arr.slice(2, 4);
}

// Only change code above this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
```

3. ### [Combine Arrays with the Spread Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)

```javascript
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

console.log(spreadOut());
```
