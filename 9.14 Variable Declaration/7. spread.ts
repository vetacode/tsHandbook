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
