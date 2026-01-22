// ThisType<T> adalah penanda (marker) untuk bilang ke TypeScript: di dalam object ini, anggap this bertipe T

//PROBLEM
const obj = {
  x: 10,
  move() {
    this.x; // TypeScript bisa bingung / any / error
  },
};
//TypeScript tidak otomatis tahu apa isi this.

//Solusi: ThisType<T>
//ThisType<T> tidak mengubah type apa pun
// Hanya mengatur tipe this
// noImplicitThis harus aktif

//Contoh basic
type MyObject = {
  x: number;
  move(): void;
} & ThisType<{ x: number }>;

const obj2: MyObject = {
  x: 10,
  move() {
    this.x += 1; // this.x = number
  },
};
//ThisType<{ x: number }> memberitahu TS bahwa this punya properti x: number

//Kapan ThisType Dipakai untuk:
// Factory function
// Object literal dengan this
// DSL / config API
// Framework-like pattern (Vue 2 style)

//Tidak perlu jika:
// Class (this sudah otomatis)
// Arrow function (tidak punya this)
// Function biasa dengan parameter eksplisit
