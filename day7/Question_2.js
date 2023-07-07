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
