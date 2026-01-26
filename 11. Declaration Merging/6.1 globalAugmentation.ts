// Module augmentation → nambal module tertentu
// Global augmentation → nambal lingkup global (seluruh project)

//Contoh Module Augmentation:
declare module './observable' {
  interface Observable<T> {
    map<U>(f: (x: T) => U): Observable<U>;
  }
}

//Artinya:
// “Aku mau nambahin tipe ke module ./observable saja”

// Ciri penting:
// Efeknya lokal ke module itu
// Hanya berlaku kalau file augmentation di-import
// Aman & terkontrol

//Global Augmentation
declare global {
  interface Array<T> {
    toObservable(): Observable<T>;
  }
}
//Artinya:
// “Aku mau nambahin tipe ke global scope TypeScript”

// Dampaknya: Setelah ini, di mana pun dalam project:

[1, 2, 3].toObservable(); // ✅ dikenal TypeScript

// Tanpa import apa pun ke file itu.

//NOTES:
// | Aspek                   | Module Augmentation    | Global Augmentation         |
// | ----------------------- | ---------------------- | --------------------------- |
// | Target                  | Satu module tertentu   | Seluruh project             |
// | Lokasi patch            | `declare module "..."` | `declare global`            |
// | Perlu import agar aktif |   Ya                   |   Tidak (global)            |
// | Risiko konflik          | Rendah                 | Lebih tinggi                |
// | Umum dipakai untuk      | Library / plugin       | Polyfill / prototype global |

//Kenapa declare global harus di dalam module?
export class Observable<T> {}

declare global {
  interface Array<T> {
    toObservable(): Observable<T>;
  }
}

//Kenapa ada export? Karena:
// File harus jadi module
// Kalau tidak, declare global ❌ error

// Rule TS:
// Global augmentation hanya boleh dari dalam module

//Persamaan Module vs Global Augmentation
// “Global augmentations have the same behavior and limits as module augmentations.”

// Artinya:
// Tetap tidak boleh:
// Bikin top-level declaration baru
// Augment default export

//Hanya boleh:
// Menambah property
// Menambah method
// Menambah overload

//APLIKASI di real project
//1. Yang Cocok pakai Global Augmentation
// Array.prototype.last()
// Window.myAppConfig
// Polyfill browser
// Utility global di monorepo internal

declare global {
  interface Window {
    __APP_VERSION__: string;
  }
}

//2. Cocok pakai Module Augmentation
// Express middleware (req.user)
// Axios interceptor
// Plugin berbasis import

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}

//Analogi Singkat
// Module augmentation
//  Renovasi satu rumah tertentu

// Global augmentation
//  Ubah aturan seluruh kota
// (lampu merah sekarang boleh belok kiri )

// Makanya: Global augmentation powerful tapi berbahaya kalau sembarangan
