const complexCoercion = (input) => {
  if (input === Object(input)) {
    return input;
  } else {
    if (typeof input === "number") {
      return Boolean(input.toString());
    }
    if (typeof input === "string") {
      return Boolean(input);
    }
    if (input === null || input === undefined) {
      return false;
    }
  }
};
