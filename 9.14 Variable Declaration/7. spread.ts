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
