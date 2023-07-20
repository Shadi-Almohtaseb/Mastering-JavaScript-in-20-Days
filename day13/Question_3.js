let functions = [];

for (let i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());

//the issue again is in the scope of var it has a function scope not a block scope so if we change it to let
// it well solve the problem, instead of using var and it will execute the loop but just get the last value.
