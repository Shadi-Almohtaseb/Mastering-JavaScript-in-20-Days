# Day 8: Async JavaScript and Promises

practicing more about the promises and the asynchronous functions with some exercises.

## Lesson Summary

- How async function work `(async ,await)`.
- The line by line execution for javascript.
- Handling the promises.
- .then .catch block.

## Coding Example

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some data fetched from an API";
      resolve(data);
      reject("Error: Failed to fetch data");
    }, 2000);
  });
}

console.log("Fetching data...");

fetchData()
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

console.log("After fetch call");
```

#### My Solution

1. ### [Exercises for Async JavaScript and Promises](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md)

```javascript
const executeInSequenceWithCBs = async (tasks) => {
  const messages = [];

  for (let i = 0; i < tasks.length; i++) {
    const currentTask = tasks[i];
    await new Promise((resolve) => {
      currentTask((msg) => {
        messages.push(msg);
        resolve();
      });
    });
  }

  return messages;
};

executeInSequenceWithCBs(asyncTasks).then((msg) => console.log(msg));
```

2. ### [Exercises for Async JavaScript and Promises](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md)

```javascript
const executeInParallelWithPromises = async (apis) => {
  const promises = apis.map(async (api) => {
    const res = await fetch(api.apiUrl);
    const data = await res.json();
    return {
      apiName: api.apiName,
      apiUrl: api.apiUrl,
      apiData: data,
    };
  });

  const results = await Promise.all(promises);
  return results;
};

executeInParallelWithPromises(apis)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

3. ### [Exercises for Async JavaScript and Promises](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md)

```javascript
const executeInSequenceWithPromises = async (apis) => {
  const results = await Promise.all(
    apis.map(async (api) => {
      const res = await fetch(api.apiUrl);
      const data = await res.json();
      return {
        apiName: api.apiName,
        apiUrl: api.apiUrl,
        apiData: data,
      };
    })
  );
  return results;
};

executeInSequenceWithPromises(apis)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
```
