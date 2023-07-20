function testScope3() {
  var a = 36;
  let b = 100;
  const c = 45;

  console.log([a, b, c]);

  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log([a, b, c]);
  }

  console.log([a, b, c]);
}

testScope3();

/*
    choices:

    A) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 36, 2, 3 ]
    B) [ 36, 100, 45 ] | [1, 2, 3 ] | [ 36, 100, 45 ]
    C) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 1,100, 45 ]
    D) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 1, 2, 3 ]

  */

// The answer is C

// As i mentioned before that var has function scope when it goes into the if statement
// event that a is initialized again it will take the last value assigned to it.
// and that because the two variables `a` has the same memory location.
