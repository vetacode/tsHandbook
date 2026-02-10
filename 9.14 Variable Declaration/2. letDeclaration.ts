let hello = 'Hello!';

//Block-scoping

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
