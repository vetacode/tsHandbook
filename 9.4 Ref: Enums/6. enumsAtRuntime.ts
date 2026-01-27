//Enum di TypeScript itu benar-benar ada saat runtime, bukan cuma tipe buat compile-time.

//Maksudnya -> Saat di-compile ke JavaScript, enum berubah jadi object biasa.
enum E {
  X,
  Y,
  Z,
}

//Di runtime kira-kira jadi object seperti:
{
  X: 0,
  Y: 1,
  Z: 2
}

// Kenapa bisa dikirim ke fungsi?
// Karena E itu object, jadi bisa dipakai sebagai parameter fungsi.

function f(obj: { X: number }) {
  return obj.X;
}
f(E); // ✅ valid

// ✔ E punya properti X
// ✔ X nilainya number
// ✔ Cocok dengan tipe { X: number }

//Kesimpulan:
// enum ada di runtime
// enum = object JavaScript
// Bisa dipassing ke fungsi, dicek propertinya, dll