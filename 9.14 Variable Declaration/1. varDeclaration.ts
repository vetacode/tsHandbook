var a = 10;

function f() {
  var message = 'Hello, world!';
  return message;
}

function f2() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  };
}
var g = f2();
g(); // returns '11'
//g() masih “ingat” a = 10
// Ini namanya closure

function f3() {
  var a = 1;
  a = 2;
  var b = g();
  a = 3;
  return b;
  function g() {
    return a;
  }
}
f3(); // returns '2'

//1. Scoping Rules
function f4(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }
  return x;
}
f4(true); // returns '10'
f4(false); // returns 'undefined'

function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}
//inner i akan me-replace outer i karena i refers to function-scoped variable yang sama
