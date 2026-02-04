//1. Apa itu Symbol?
// Sejak ES2015, Symbol adalah tipe data primitif seperti number dan string.

let sym1 = Symbol();
let sym2 = Symbol('key');

//Catatan penting:
// "key" bukan nilainya, hanya label/deskripsi

// Symbol selalu unik
Symbol('key') === Symbol('key'); // ❌ false
//Walaupun tulisannya sama, symbol-nya beda

//2. Kenapa Symbol itu spesial?
// Karena tidak bisa bentrok.

// Biasanya di object:
obj['id'] = 1;
obj['id'] = 2; // ketimpa

// Dengan Symbol:
const id = Symbol();
const obj = {
  [id]: 123,
};
console.log(obj[id]); // 123
// ✔ Aman
// ✔ Tidak bisa ketabrak property lain
// ✔ Tidak muncul saat for...in atau Object.keys()

//3. Symbol sebagai key di class / object
// Symbol bisa dipakai buat method tersembunyi:

const getClassName = Symbol();

class C {
  [getClassName]() {
    return 'C';
  }
}
const c = new C();
c[getClassName](); // "C"

//Method ini:
// Tidak bisa diakses pakai c.getClassName()
// Hanya bisa pakai symbol aslinya
