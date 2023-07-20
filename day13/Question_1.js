// This is IIFE () Immediately Invoked Function Expression :)

for (var i = 0; i < 5; i++) {
  (function (n) {
    setTimeout(() => console.log("value of [i] is: ", n), 100);
  })(i);
}

// The issue was with the scope of i inside the setTimeOut()
// and this callback function is delay for 100ms, so he will read only the last value witch is 5.

// Or we can simply change the keyword var to let, just like that.
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("value of [i] is: ", i);
  }, 100);
}
