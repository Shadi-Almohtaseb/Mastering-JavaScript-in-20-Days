// Example object
const obj = {
  name: "John",
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}!`);
  },
};

const preserveThis =
  (func) =>
  (...arg) => {
    return func.apply(obj, arg);
  };

// Wrap the greet function using preserveThis
const preservedGreet = preserveThis(obj.greet);

// Call the wrapped function as a method of the object
preservedGreet("Hello"); // Output: "Hello, John!"
