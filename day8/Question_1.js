const task1 = (cb) =>
  setTimeout(() => {
    const message = "Task 1 has executed successfully!";
    cb(message);
  }, 3000);

const task2 = (cb) =>
  setTimeout(() => {
    const message = "Task 2 has executed successfully!";
    cb(message);
  }, 0);

const task3 = (cb) =>
  setTimeout(() => {
    const message = "Task 3 has executed successfully!";
    cb(message);
  }, 1000);

const task4 = (cb) =>
  setTimeout(() => {
    const message = "Task 4 has executed successfully!";
    cb(message);
  }, 2000);

const task5 = (cb) =>
  setTimeout(() => {
    const message = "Task 5 has executed successfully!";
    cb(message);
  }, 4000);

const asyncTasks = [task1, task2, task3, task4, task5];

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
