//Konsep Inti Namespace di TypeScript.
//1. Apa itu Namespace?
// Namespace = pembungkus nama (name grouping)

//Tujuannya:
// Mengelompokkan kode yang saling terkait
// Mencegah tabrakan nama di global scope

namespace Validation {
  export class ZipCodeValidator {}
}
// Dipakai sebagai:
new Validation.ZipCodeValidator();

//2. Kenapa Namespace Ada?
//Sebelum ES Module populer: Semua JS masuk ke global scope

//Namespace dipakai supaya:
// kode rapi
// tidak bentrok nama
//Sekarang perannya berkurang, tapi masih relevan untuk kasus tertentu

//3. export di Namespace
// export → bisa dipakai dari luar namespace
// tanpa export → hanya internal (private)

namespace A {
  const secret = 123; // private
  export const value = 1; // public
}

//4. Namespace Bisa Dipecah ke Banyak File
// Beberapa file bisa kontribusi ke namespace yang sama
// Diikat dengan:

/// <reference path="file.ts" />

//Ini bukan module system modern, tapi penggabungan manual

//5. Alias (import x = A.B)
// Alias = singkatan nama, bukan import module
// import Geo = Shapes.Polygons;

//Hanya supaya:
// lebih pendek
// lebih readable

//6. Ambient Namespace (declare namespace)
//Dipakai untuk:
// library JS global
// file .d.ts
// <script> based library

declare namespace D3 {}
declare var d3: D3.Base;
// Tidak ada implementasi, hanya bentuk API

//Kesimpulan:
//Namespace itu alat lama untuk ngatur global code
// ❌ Bukan untuk React / app modern
// ✅ Untuk:
// - kode legacy
// - global JS library
// - .d.ts

//Ingat satu kalimat ini:
// “Namespace = grouping global, Module = sistem modern”
