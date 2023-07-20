const privateCounter = () => {
  const increment = (num) => {
    return (num += 1);
  };
  return (getCount = (num) => {
    return increment(num);
  });
};

const fun = privateCounter();

console.log(fun(0));
