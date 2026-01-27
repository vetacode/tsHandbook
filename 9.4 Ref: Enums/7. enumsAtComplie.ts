//1 keyof typeof Enum (Enum di compile time)
// Enum itu ada di runtime, tapi:
// keyof Enum ❌ tidak bekerja seperti object biasa
// Harus pakai 👉 keyof typeof Enum

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type Keys = keyof typeof LogLevel;
// "ERROR" | "WARN" | "INFO" | "DEBUG"

// 👉 Gunanya: mendapatkan union string dari nama enum, bukan nilainya.

//2. Reverse mapping (khusus numeric enum)
// Numeric enum punya dua arah mapping:
enum Enum {
  A,
}
Enum.A; // 0
Enum[0]; // "A"

// Di JS hasil compile:
Enum['A'] = 0;
Enum[0] = 'A';

// ⚠️ String enum TIDAK punya reverse mapping
enum Dir {
  Up = 'UP',
}
Dir['UP']; // ❌ tidak ada

//3. const enum (di-inline, tidak ada di runtime)
//const enum:
// Hilang saat compile
// Nilainya langsung di-inline
// Lebih ringan (tidak bikin object enum)
const enum Direction {
  Up,
  Down,
}
let x = Direction.Up;

// Hasil JS:
let x = 0;

//✅ Cocok kalau:
// Mau performa & bundle lebih kecil
// Enum hanya dipakai di project sendiri

//4. Bahaya const enum (ini yang penting!)
//Masalah muncul kalau const enum dipublish / dipakai lintas project:

//⚠️ Risiko utama:
// Value bisa tidak sinkron
// Compile pakai versi A
// Runtime pakai versi B
// Nilai enum beda → bug aneh
// Tidak kompatibel dengan isolatedModules
// Import bisa error di runtime (karena enum tidak benar-benar ada)

//5. Rekomendasi praktis ✅
// Paling aman:
// Jangan pakai const enum untuk library
// Pakai enum biasa atau union type

//Kalau tetap mau const enum:
// ✔️ Hanya untuk internal project
// ✔️ Aktifkan preserveConstEnums saat publish

//🧠 Ringkasan:
// keyof typeof Enum → ambil nama enum
// Numeric enum → ada reverse mapping
// String enum → tidak ada reverse mapping
// const enum → di-inline, cepat, tapi berbahaya kalau dipublish
// Library? ❌ const enum
// App internal? ✅ boleh
