//Module augmentation dipakai untuk: Ngasih tahu TypeScript bahwa sebuah module sudah ditambah isinya di tempat lain.

//Bukan nambah behavior runtime (itu tetap JS), tapi nambah informasi tipe ke compiler.

//Module asli:
// observable.ts
export class Observable<T> {
  // belum ada map
}

//Patch + Augment
// map.ts
import { Observable } from './observable';

declare module './observable' {
  interface Observable<T> {
    map<U>(f: (x: T) => U): Observable<U>;
  }
}

Observable.prototype.map = function (f) {
  // implementasi JS sebenarnya
};

//declare module "./observable"
// Artinya:
// “Aku mau menambah deklarasi tipe untuk module ./observable”

//interface Observable<T> { ... }
// Karena:
// Observable adalah class
// Class di TypeScript punya interface instance
// Interface ini akan di-merge dengan definisi class aslinya

//Hasil akhir di TS:
class Observable<T> {
  map<U>(f: (x: T) => U): Observable<U>;
}

//Consumer
import { Observable } from './observable';
import './map'; // penting!
//import "./map":
// yang menjalankan prototype patch
// Sekaligus memuat augmentation supaya compiler tahu

//Kenapa Ini Disebut "Augmentation"?
// Karena: BUKAN bikin module baru
// BUKAN override
// Tapi menambal (patch) module yang sudah ada

//Ibaratnya:
// Class asli = rumah
// Augmentation = nambah kamar, bukan bangun rumah baru 🏠

//Batasan Penting (yang sering bikin error)
//1. Tidak boleh bikin deklarasi top-level baru
declare module './observable' {
  class Foo {} // salah
  function bar() {} // salah
}

//YANG BOLEH:
// Menambah method
// Menambah property
// Menambah overload
// Karena augmentation itu patch, bukan define ulang module.


//2. Tidak bisa augment default export
export default class Observable {}

// Lalu:

declare module "./observable" {
  interface Observable { ... } // ❌ gak bisa
}

//Kenapa?
// default itu bukan nama
// Augmentation perlu nama yang bisa direferensikan

//SOLUSI -> Gunakan named export:
export class Observable<T> {}
