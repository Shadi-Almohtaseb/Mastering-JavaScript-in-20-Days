function testScope2() {
  console.log(a);
  console.log(b);
  console.log(c);
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
}

testScope2();

/*
  Choices:

    A) undefined, ReferenceError
    B) 1, undefined, ReferenceError
    C)undefined, undefined, ReferenceError
    D) 1, ReferenceError

*/

// The answer is A.

// The first undefined is because the `var` has a globals scope (function scope),
// so it's declared but dose not have a real value yet but the complier consider the undefined value.

// The second undefined is because it has a local scope or block-scoped so the complier dose not know any thing about it.

// and note that the strict mode is enabled here,
// it will cause the code to behave slightly differently.
// In strict mode,so using variables before they are declared will also cause a ReferenceError,
// just like with `let` and `const` variables.
