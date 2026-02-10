let hello = 'Hello!';

//1. Block-scoping
function f(input: boolean) {
  let a = 100;
  if (input) {
    // Still okay to reference 'a'
    let b = a + 1;
    return b;
  }
  // Error: 'b' doesn't exist here
  return b;
  //Cannot find name 'b'.
}

//same also variables declared inn a catch clause
try {
  throw 'oh no!';
} catch (e) {
  console.log('Oh well.');
}
// Error: 'e' doesn't exist here
console.log(e);
//Cannot find name 'e'.

{
  //have to declared in advanced
  a++; // illegal to use 'a' before it's declared;
  //Block-scoped variable 'a' used before its declaration.
  let a;
}
{
  function foo() {
    // okay to capture 'a'
    return a;
  }
  // illegal call 'foo' before 'a' is declared
  // runtimes should throw an error here
  foo();
  let a;

  //let a sudah ada secara hoisting
  // tapi belum boleh diakses (TDZ)
  // foo() boleh dipanggil
  // error muncul saat a diakses di dalam foo
  // bukan saat foo() dipanggil
}

//2. Re-declarations and Shadowing
//With var declarations, we mentioned that it didn’t matter how many times you declared your variables; you just got one.
function f(x) {
  var x;
  var x;
  if (true) {
    var x;
  }
}
{
  let x = 10;
  let x = 20; // error: can't re-declare 'x' in the same scope
}

{
  function f(x) {
    let x = 100; // error: interferes with parameter declaration
  }
  function g() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
  }
}

{
  function f(condition, x) {
    if (condition) {
      let x = 100;
      return x;
    }
    return x;
  }
  f(false, 0); // returns '0'
  f(true, 0); // returns '100'
}

//SHADOWING
// (variabel di scope dalam menutupi variabel di luar))
//Shadowing itu terjadi saat kita membuat variabel dengan nama yang sama di scope yang lebih dalam, sehingga:
// variabel yang baru “menutupi” (men-shadow) variabel di luar
// variabel luar tidak bisa diakses selama kita berada di scope dalam itu

// Ibaratnya:
// Ada orang bernama i di luar ruangan, lalu di dalam ruangan ada orang lain yang juga bernama i.
// Selama kamu di dalam ruangan, yang kamu lihat cuma i yang di dalam, bukan yang di luar.

function sumMatrix(matrix: number[][]) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];

    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }

  return sum;
}

//Kenapa ini tetap jalan dengan benar?
//Karena:
// let itu block-scoped
// i di loop dalam berbeda variabel dengan i di loop luar
// i yang di dalam meng-shadow i luar

//Artinya:
// loop luar: i = index baris
// loop dalam: i = index kolom
// keduanya tidak saling ganggu
// Makanya hasil penjumlahan tetap benar

//Tapi… ini bahaya secara readability
// Walaupun secara teknis benar, ini tidak disarankan karena:

// ❌ Sulit dibaca
// Orang yang baca (termasuk kamu di masa depan) bisa mikir:
// “Ini i yang mana ya?”

// ❌ Mudah bikin bug
//Kalau suatu saat:
// loop diubah
// atau let diganti var
// atau ada logika tambahan

//bug bisa muncul tanpa sadar

{
  //VERSI YG LEBIH AMAN BEST PRACTICE
  function sumMatrix(matrix: number[][]) {
    let sum = 0;

    for (let row = 0; row < matrix.length; row++) {
      const currentRow = matrix[row];

      for (let col = 0; col < currentRow.length; col++) {
        sum += currentRow[col];
      }
    }

    return sum;
  }
}
