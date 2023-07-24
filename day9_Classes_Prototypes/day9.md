# Day 9: Classes & Prototypes, Wrapping up

Dive into the exciting world of JavaScript classes and prototypes, Solid understanding of how they fit into the realm of object-oriented programming. Discover how they can effectively model and organize data and behavior, and their common application in real-world scenarios.

## Lesson Summary

- Prototypes are a fundamental concept in JavaScript's object-oriented nature. Every object in JavaScript has a prototype, which is another object from which it inherits properties and methods.
- Recap of JavaScript classes and prototypes.
- Applying classes and prototypes in real-world scenarios.
- Best practices and common pitfalls to avoid when working with classes and prototypes.
- Wrapping up the exploration of classes and prototypes.

## Coding Example

```javascript
// Define a class
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log("Engine started");
  }

  stopEngine() {
    console.log("Engine stopped");
  }
}

// Create instances of the Car class
const car1 = new Car("Toyota", "Corolla", 2021);
const car2 = new Car("Honda", "Civic", 2022);

// Accessing instance properties
console.log(car1.make); // Output: Toyota
console.log(car2.model); // Output: Civic

// Calling instance methods
car1.startEngine(); // Output: Engine started
car2.stopEngine(); // Output: Engine stopped
```

#### My Solution

1. ### [Classes & Prototypes, Wrapping up on FreeCodeCamp](https://www.freecodecamp.org/fcc5cff84f8-b8f8-447b-a502-6a86d112447c)
