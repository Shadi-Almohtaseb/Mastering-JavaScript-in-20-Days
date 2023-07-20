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
