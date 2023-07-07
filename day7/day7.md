# Day 7: Exercises for closures

It's about the `closure` concept which is the function that return another function, and here is some examples.

## Lesson Summary

- What is closure.
- Function that remember the previous state.
- How to implement closure in different ways.
- calling multi functions.

## Coding Example

```javascript
// EX 1)
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

//*****************************************************

//EX 2)
function createSecretCode() {
  let secretCode = "Open Sesame!";

  return {
    revealSecret() {
      console.log(secretCode);
    },
  };
}

const secret = createSecretCode();
secret.revealSecret(); // Output: Open Sesame!

//*****************************************************

//EX 3)
function createPerson(name) {
  return {
    getName() {
      return name;
    },
    setName(newName) {
      name = newName;
    },
  };
}

const person = createPerson("John");
console.log(person.getName()); // Output: John

person.setName("Jane");
console.log(person.getName()); // Output: Jane
```

#### My Solution

1. ### [Exercises for closures](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md)

```javascript
const createCounter = (start) => {
  let counter = start;
  const increment = () => {
    return counter++;
  };
  return increment;
};

const myFun = createCounter(0);
console.log(myFun()); //0
console.log(myFun()); //1
console.log(myFun()); //2
console.log(myFun()); //3
```

2. ### [Exercises for closures](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md)

```javascript
const calculateAverage = (arr) => {
  const calculate = () => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  };
  return calculate;
};

const myFun = calculateAverage([1, 2, 3, 4, 5]);
console.log(myFun()); //3
```

3. ### [Exercises for closures](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md)

```javascript
const powerOf = (base) => {
  const calculate = (exp) => {
    return base ** exp;
  };
  return calculate;
};

const myFun = powerOf(2);
console.log(myFun(3)); //8
```

4. ### [Exercises for closures](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md)

```javascript
const compose = (...fns) => {
  return (arg) => {
    let result = arg;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
};

const myFunComposed = compose(
  (n) => n * 3,
  (n) => n / 2,
  (n) => n + 4
);

console.log(myFunComposed(2)); // Output: 9
```
