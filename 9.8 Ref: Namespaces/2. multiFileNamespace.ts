// Validation namespace
// ├─ Validation.ts        (interface)
// ├─ LettersOnlyValidator.ts (class)
// ├─ ZipCodeValidator.ts     (class)

//2. File per File: Apa Perannya?
//Validation.ts
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}
//Fungsi file ini:
// Fondasi namespace
// Mendefinisikan kontrak (interface)
// Tidak bergantung ke file lain

//Ini biasanya file paling awal

//LettersOnlyValidator.ts
/// <reference path="Validation.ts" />
namespace Validation {
  //...
}

//Yang penting di sini:
/// <reference path="Validation.ts" />
// Artinya:
// “File ini butuh tahu isi Validation.ts dulu”

//Karena:
// class ini implements StringValidator
// interface itu ada di Validation.ts

//ZipCodeValidator.ts
// Sama konsepnya:
/// <reference path="Validation.ts" />
//Setiap file:
// ikut namespace yang sama
// nambahin isi namespace

//Test.ts
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

//Artinya:
// Test butuh semuanya
// Urutan penting

//Tanpa reference:
// compiler bisa “tidak kenal” simbolnya

//3. Apa Itu
/// <reference path="..." />
// Petunjuk ke compiler, BUKAN runtime

//Fungsinya:
// Memberi tahu urutan dependensi

//Supaya TypeScript:
// tahu interface
// tahu class
// tahu namespace lengkap

//Ini bukan import ES module

//4️⃣ Kenapa Namespace Bisa “Nyatu” Antar File?

// Karena:
namespace Validation { ... }
//Muncul berkali-kali → TypeScript:
// merge namespace
// gabung semua isi jadi satu

//Ini disebut:
// Declaration Merging

//5. Setelah Compile, JS-nya Seperti Apa?
// Tergantung cara compile 👇

//6. Cara 1: outFile (Digabung Jadi 1 JS)
tsc --outFile sample.js Test.ts

//Hasil:
// satu file sample.js
// urutan otomatis dari reference path

//Cocok untuk:
// script lama
// tanpa bundler
// <script src="sample.js">

//7. Cara 2: Per-File Compilation (Default)
// Setiap .ts → satu .js

<script src="Validation.js"></script>
<script src="LettersOnlyValidator.js"></script>
<script src="ZipCodeValidator.js"></script>
<script src="Test.js"></script>


// ⚠️ URUTAN WAJIB BENAR
//Kalau salah:
// runtime error
// namespace belum terdefinisi

//8. Mental Model PENTING 🧠
//Multi-file namespace itu seperti:
// beberapa orang nulis di papan tulis yang sama
// tapi di ruangan berbeda

//Akhirnya:
// satu namespace utuh
// satu global object

//9. Kenapa Ini Dianggap “Legacy Style”?
//Karena:
// manual urus urutan file
// manual reference path
// tidak scalable untuk app besar

//Inilah kenapa ES module menggantikan namespace di app modern

//Ringkasan Super Pendek
// Namespace bisa dipecah ke banyak file
// Semua file bisa kontribusi ke namespace yang sama
// /// <reference path> = dependency order
// Bisa digabung (outFile) atau load manual (<script>)

//Kalimat Penutup yang Harus Nempel:
// Multi-file namespace itu solusi lama sebelum module system modern ada