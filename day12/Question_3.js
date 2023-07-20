function outer1() {
  var x = 10;

  var inner1 = function () {
    console.log(x);
  };

  inner1();
}
outer1(); // Output: 10

// in this example we have a global variable x inside outer function and we have inner function called form the outer
// the inner function (function expression) print the value of x witch is 10 and the we called the outer function.
// just, as simple as it :)

// ***********************************************

function outer2() {
  var x = 10;

  var inner2 = function () {
    var x = 20;
    console.log(x);
  };

  inner2();
}
outer2(); // Output: 20

// here there is a little different that the global var x at line 19 is useless because in side the
// inner2 we declared anther one
// and then we simply did as before :)
