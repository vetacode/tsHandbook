//1. Literal enum member
//Enum disebut literal enum kalau semua member-nya bernilai literal:
// angka (0, 1, 100)
// string ("foo")
// atau -angka

enum ShapeKind {
  Circle, // 0 (literal)
  Square, // 1 (literal)
}

//2. Enum member bisa jadi TYPE
// Kalau enum-nya literal, setiap member enum bisa dipakai sebagai tipe.

interface Circle {
  kind: ShapeKind.Circle; // cuma boleh Circle
  radius: number;
}

//Artinya:
// kind harus persis ShapeKind.Circle
// ShapeKind.Square ❌ error
// Ini bikin TypeScript ngehentikan bug lebih awal.
// 👉 Ini sering dipakai buat discriminated union.

//3. Enum otomatis jadi union type
enum E {
  Foo,
  Bar,
}
// Secara tipe dianggap:
E = E.Foo | E.Bar;
// Jadi TypeScript tahu persis semua kemungkinan nilainya.

//4. Kenapa perbandingan bisa error?
// Contoh:
function f(x: E) {
  if (x !== E.Foo || x !== E.Bar) {
    // ❌ error: This comparison appears to be unintentional because the types 'E.Foo' and 'E.Bar' have no overlap.
  }
}
//Kenapa error?
// Kalau x !== E.Foo → bisa Bar
// Kalau x === E.Foo, maka x !== E.Bar pasti true
// Jadi kondisi ini selalu true → logic salah

//TypeScript sadar:
// “Ini kayaknya salah logika, karena Foo dan Bar gak mungkin terjadi bersamaan”

// ✅ Harusnya pakai:
if (x !== E.Foo && x !== E.Bar) {
}

//SUMMARY:
// Literal enum → member = value tetap
// Member enum bisa jadi TYPE
// Enum = union dari semua member
// TypeScript bisa deteksi kondisi if yang mustahil
