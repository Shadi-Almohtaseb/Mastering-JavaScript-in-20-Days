function compareObjects(input1, input2) {
  if (typeof input1 !== "object" || typeof input2 !== "object") {
    return [input1, input2];
  } else {
    const str1 = JSON.stringify(input1);
    const str2 = JSON.stringify(input2);

    return str1 === str2;
  }
}

console.log(compareObjects({ num: 4 }, { num: 4 }));
