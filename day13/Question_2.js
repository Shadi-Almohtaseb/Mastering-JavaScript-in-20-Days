let array = [];
for (let i = 0; i < 5; i++) {
  array.push(i);
  console.log("Current array is: ", array);
}

// the issue was in the declaration of the array inside the loop so it will make the array empty every time the loop executes
