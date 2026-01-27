//Target ES5
// for..of hanya boleh untuk Array.
// Walaupun objek lain punya Symbol.iterator, tetap error.
// TypeScript akan mengubah for..of jadi for biasa (pakai index).

for (let num of numbers)
// ↓ dikompilasi jadi
for (var i = 0; i < numbers.length; i++)

// 👉 Aman untuk browser/engine lama yang belum support iterator.

//Target ES2015 (ES6) ke atas
// for..of pakai iterator bawaan JavaScript.
// Bisa dipakai untuk Array, String, Map, Set, dll.
// Kode for..of tidak diubah, tetap modern.

//NOTES:
// ES5 → aman tapi terbatas (Array only, diubah ke for)
// ES2015+ (ES6) → lebih fleksibel (semua iterable, pakai iterator asli)

