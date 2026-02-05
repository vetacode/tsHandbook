var a = 10;

function f() {
  var message = 'Hello, world!';
  return message;
}

function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  };
}
var g = f();
g(); // returns '11'

function f() {
  var a = 1;
  a = 2;
  var b = g();
  a = 3;
  return b;
  function g() {
    return a;
  }
}
f(); // returns '2'

//1. Scoping Rules