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
