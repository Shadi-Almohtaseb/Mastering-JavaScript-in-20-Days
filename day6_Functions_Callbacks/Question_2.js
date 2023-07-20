const sumRange = (first, last) => {
  if (first === last) {
    return first;
  } else {
    return sumRange(first + 1, last) + first;
  }
};

console.log(sumRange(0, 5)); // 15
