function testScope1() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a);
  console.log(b); //This will reference an error because the scope of it just in the if statement.
  console.log(c); //This will reference an error because the scope of it just in the if statement.
}

testScope1();

/*
Choices:

A) undefined, undefined, undefined
B) 1, undefined, ReferenceError
C) 1, ReferenceError, ReferenceError
D) 1, ReferenceError
*/

// The answer is C

// the answer should be 1, ReferenceError, ReferenceError because the `var` has a globals scope (function scope).

// note that the strict mode dose not affect on the output,
// because it disallows the use of undeclared variables but the variables here is declared.
