# Day 13: Advanced Scope & Closure

Explore more about the scoping in different cases with assigning a value inside another function or access it.
also using a closure with different scopes like the example provided below.

## Lesson Summary

- The difference between `let` and `const` when we use them in another scope.
- how to update multiple values in a row using [].

## Coding Example

```javascript
function createMessageGenerator(prefix) {
  function generateMessage(name) {
    return `${prefix} ${name}!`;
  }

  return generateMessage;
}

const helloMessageGenerator = createMessageGenerator("Hello,");
const hiMessageGenerator = createMessageGenerator("Hi,");

console.log(helloMessageGenerator("John")); // Output: "Hello, John!"
console.log(hiMessageGenerator("Alice")); // Output: "Hi, Alice!"
```
