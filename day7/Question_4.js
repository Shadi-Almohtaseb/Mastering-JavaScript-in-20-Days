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
