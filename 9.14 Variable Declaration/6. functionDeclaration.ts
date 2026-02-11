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
