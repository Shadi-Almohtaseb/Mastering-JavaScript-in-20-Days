const powerOf = (base) => {
  const calculate = (exp) => {
    return base ** exp;
  };
  return calculate;
};

const myFun = powerOf(2);
console.log(myFun(3)); //8
