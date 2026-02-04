//TypeScript: unique symbol
// TypeScript punya versi lebih ketat dari symbol → unique symbol

//Apa bedanya?
// symbol → tipe umum
// unique symbol → identitas tunggal & eksklusif

//Bayangkan:
// unique symbol = sidik jari
// symbol = jenis sidik jari

//1. Aturan unique symbol
//HARUS const
const sym1: unique symbol = Symbol();

//Tidak boleh let
let sym2: unique symbol = Symbol();
// ❌ Error: unique symbol harus const
// Kenapa? Karena kalau berubah, identitas uniknya rusak

//2. Mengacu ke unique symbol lain → pakai typeof
const sym1: unique symbol = Symbol();
let sym2: typeof sym1 = sym1; //OK

//typeof sym1 artinya: "tipe symbol yang persis sama dengan sym1"

//3. Unique symbol di class
class C {
  static readonly StaticSymbol: unique symbol = Symbol();
}
//Artinya:
// Symbol ini hanya milik class C
// Tidak bisa ditiru class lain

//4. Kenapa tidak bisa dibandingkan?
const sym2 = Symbol();
const sym3 = Symbol();

sym2 === sym3;

// TypeScript bilang:
// ❌ Perbandingan ini kemungkinan salah
// karena typeof sym2 dan typeof sym3 tidak pernah sama

//Kenapa?
// Masing-masing symbol = identitas unik
// Tidak ada kemungkinan overlap

//NOTES:
// | Konsep              | Penjelasan                                |
// | ------------------- | ----------------------------------------- |
// | `Symbol()`          | Selalu menghasilkan nilai unik            |
// | `Symbol("x")`       | `"x"` hanya label, bukan identitas        |
// | Symbol di object    | Aman dari tabrakan property               |
// | `unique symbol`     | Symbol dengan identitas **100% spesifik** |
// | `unique symbol`     | Harus `const`                             |
// | `typeof sym`        | Cara mereferensikan symbol tertentu       |
// | Perbandingan symbol | Hampir selalu salah                       |
