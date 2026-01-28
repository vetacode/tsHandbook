//Value-based elements adalah JSX dengan huruf besar, misalnya <MyComponent />

//TypeScript mencarinya sebagai identifier yang ada di scope (harus di-import / dideklarasikan)

//Contoh:
// <MyComponent /> ✅ (ada import)
// <SomeOtherComponent /> ❌ (tidak ada)

//Cara TypeScript ngecek tipenya
//Ada 2 jenis komponen:
//1. Function Component
//2. Class Component

//Saat ketemu <MyComponent />, TypeScript:
//1. Coba anggap sebagai Function Component dulu
//2. Kalau gagal → coba sebagai Class Component
//3. Kalau dua-duanya gagal → error

//📌 Intinya:
// Huruf besar = komponen
// Harus ada di scope
// TS cek function dulu, lalu class
