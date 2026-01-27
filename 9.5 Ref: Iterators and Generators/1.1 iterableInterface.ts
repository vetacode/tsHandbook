//Iterable itu interface di TypeScript yang dipakai buat menandai sesuatu yang bisa di-loop (di-iterasi).

//Contoh hal yang iterable:
// Array
// String
// Set
// Map (yang di-loop itu isinya, bukan key/value langsung)
// hasil generator

function toArray<X>(xs: Iterable<X>): X[] {
  return [...xs];
}

//Artinya:
// Fungsi toArray menerima apa pun selama dia bisa di-loop
// Tipe item di dalamnya adalah X
// Hasil akhirnya selalu array X[]

//Iterable<X> menjamin bahwa xs:
// bisa dipakai di for...of
// bisa di-spread pakai ...

//Contoh pemakaian
toArray([1, 2, 3]); // ✅ Array
toArray('halo'); // ✅ String → ["h","a","l","o"]
toArray(new Set([1, 2])); // ✅ Set

// Tapi ini ❌:
toArray({ a: 1, b: 2 }); // ❌ Object biasa bukan iterable

//Intinya: -> Iterable = kontrak “yang penting bisa di-loop”
