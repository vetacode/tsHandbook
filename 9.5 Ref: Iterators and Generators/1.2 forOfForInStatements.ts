//1. for..in :
// Mengiterasi key / property dari sebuah object
// Bisa dipakai di object apa pun
// Pada array, yang didapat adalah index (string)

const list = [4, 5, 6];
for (let i in list) {
  console.log(i); // "0", "1", "2"
}
// ➡️ Cocok untuk inspeksi properti object, bukan untuk ambil nilai array.

//2. for..of :
// Mengiterasi value dari object yang iterable
// Dipakai untuk Array, String, Map, Set, dll
// Mengabaikan properti tambahan

for (let i of list) {
  console.log(i); // 4, 5, 6
}
// ➡️ Cocok untuk loop data / isi koleksi.

//Contoh penting (Set)
let pets = new Set(['Cat', 'Dog', 'Hamster']);
pets['species'] = 'mammals';
// for..in → ambil property: // "species"
// for..of → ambil isi Set: // "Cat", "Dog", "Hamster"

//Kesimpulan:
// for..in = key / property
// for..of = value / data

//💡Best practice:
// Array / Set / Map → for..of
// Object biasa → for..in
