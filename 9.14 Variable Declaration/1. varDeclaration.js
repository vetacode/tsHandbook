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
function f4(shouldInitialize) {
  if (shouldInitialize) {
    var x = 10;
  }
  return x;
}
console.log(f4(true)); // returns '10'
console.log(f4(false)); // returns 'undefined'

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i); //10, 10, 10, 10...
  }, 100 * i);

  //Kenapa semua dapat 10?
  // Karena:
  // var tidak punya scope per-iterasi
  // Semua callback setTimeout menunjuk ke variabel i yang sama
  // Bukan menyimpan nilai i, tapi referensi ke variabel i
}
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i); //1, 2, 3, 4, 5, 6, 7, 8, 9
  }, 100 * i);
  //Kenapa let aman?
  // let punya block scope
  // Setiap iterasi loop → i baru
  // Tidak perlu IIFE
}
