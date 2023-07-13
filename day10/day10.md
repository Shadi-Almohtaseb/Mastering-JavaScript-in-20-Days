# Day 10: Types and Coercion

Discover how the mathematical operation goes on with javascript and some conversion between types like string number array obj NaN null undefined...

## Lesson Summary

-

## Coding Example

```javascript

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
