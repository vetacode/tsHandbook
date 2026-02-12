//1. Destructuring di parameter function (basic)
type C = { a: string; b?: number };
//Artinya:
// a wajib ada (string)
// b opsional (number)

//Lalu kita bikin function:

function f({ a, b }: C): void {
  // ...
}
//Artinya:
// Parameter function adalah object bertipe C
// Kita langsung ambil a dan b dari object itu (destructuring)

//contoh pakai:
f({ a: 'hello' }); //OK, coz b optional
f({ a: 5 }); //error
//  ^ Type 'number' is not assignable to type 'string'.

//EDGE CASES
//Default untuk seluruh parameter object
function g({ a = '', b = 0 } = {}): void {
  //...
}
// = {} adalah default seluruh parameter
// tanpa = {}, JS akan mencoba destructure undefined -> ERROR

//JADI
({ a = '', b = 0 } = {});
//Artinya:
// Kalau tidak ada argument → pakai {} sebagai default
//Lalu dari {} itu:
// a default ke ""
// b default ke 0

//Sehingga jika kita panggil:
g(); // Aman

//Optional property + default
