//1. Spread pada Array
// Spread itu kebalikan dari destructuring.
// Kalau destructuring itu mengambil isi, spread itu menyebarkan isi.

// Contoh:
let first = [1, 2];
let second = [3, 4];

let bothPlus = [0, ...first, ...second, 5];
// Hasilnya: [0, 1, 2, 3, 4, 5];

//Penting: Shallow Copy
// Spread membuat salinan dangkal (shallow copy).

//Artinya:
// Array baru dibuat
// Tapi kalau isinya object, referensinya tetap sama

let a = [{ x: 1 }];
let b = [...a];

b[0].x = 100;

console.log(a[0].x); //100. x di b dirubah -> x di a juga ikut berubah karena keduanya menunjuk pada referensi yg sama -> coz b hanya melakukan shallow copy variable a

//2. Spread pada OBJECT
let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
let search = { ...defaults, food: 'rich' };
//hasil: -> rich akan mereplace spicy
// {
//   food: "rich",
//   price: "$$",
//   ambiance: "noisy"
// }
//Artinya:
// Masukkan semua isi defaults
// Lalu set food: "rich"
// Property TERAKHIR menang (overwrite) -> urutan itu pengting

//Klo dibalik:
let search2 = { food: 'rich', ...defaults };
//Hasilnya akan:
// {
//   food: "spicy", // ketimpa!
//   price: "$$",
//   ambiance: "noisy"
// }

//3. Method akan hilang saat Spread Class
class D {
  p = 12;
  m() {}
}

let d = new D();
let clone = { ...d };

clone.p; // ok
clone.m(); // error!
//Karena spread object hanya menyalin:
// Own properties
// Enumerable properties

// Method class itu sebenarnya disimpan di prototype, bukan di object langsung.

//Spread hanya menyalin yang langsung di object (p),
// bukan yang di prototype (m).
// Makanya method hilang.

//4. Spread generic Type tdk diizinkan
function clone<T>(obj: T) {
  return { ...obj }; // kadang error
}
//Karena TypeScript tidak selalu tahu:
// Apakah T itu object?
// Apakah T bisa di-spread?
// Apakah T punya properti yang aman disalin?
// Jadi compiler jadi hati-hati.

//SOLUSI = Butuh constraint
function clone2<T extends object>(obj: T) {
  return { ...obj };
}

//Ringkasan:
// Spread Array [...array] -> Menyebarkan isi array
// Spread Object { ...obj } -> Menyalin semua property object

//Aturan Penting
// ✅ Shallow copy
// ✅ Kiri ke kanan
// ✅ Property terakhir menang
// ✅ Hanya own + enumerable property
// ❌ Tidak menyalin method class (prototype)
