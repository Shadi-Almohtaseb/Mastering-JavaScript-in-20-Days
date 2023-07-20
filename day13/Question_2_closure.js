const generateFibonacci = (count) => {
  let prev = 0;
  let current = 1;

  return (nextNum = () => {
    if (count <= 0) {
      return null;
    }
    // assigning the values at the same times.
    [prev, current] = [current, prev + current];
    count -= 1;
    return prev;
  });
};

let count = 15;
let arrOfNumbers = [];

const fibonacciClosure = generateFibonacci(count);

for (let i = 0; i < count; i++) {
  const next = fibonacciClosure();
  arrOfNumbers.push(next);
}

console.log(arrOfNumbers);
