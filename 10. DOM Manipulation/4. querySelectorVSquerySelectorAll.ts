// 🔎 querySelector dan querySelectorAll
// Kedua method ini digunakan untuk mencari elemen di dalam DOM menggunakan CSS selector.

// Artinya, kita bisa mencari elemen seperti di CSS:
// "li"
// ".class-name"
// "#id-name"
// "div > p"
// dll

// 1. querySelector()
// 👉 Mengambil 1 elemen pertama yang cocok
const first = document.querySelector('li');

// Dengan HTML:

// <ul>
//   <li>First :)</li>
//   <li>Second!</li>
//   <li>Third times a charm.</li>
// </ul>

// Hasilnya:
// Akan mengambil li pertama saja
// Yaitu: <li>First :)</li>
// Jika tidak ada yang cocok → hasilnya null

// Tipe return di TypeScript:
// HTMLElement | null

// Artinya:
// Bisa dapat element
// Bisa juga null → jadi harus hati-hati (cek null)

// Contoh aman:
const first = document.querySelector('li');

if (first) {
  console.log(first.textContent);
}

//2. querySelectorAll()
// 👉 Mengambil SEMUA elemen yang cocok
const all = document.querySelectorAll('li');

// Hasilnya:
// Semua <li> akan diambil
// Bentuknya bukan array biasa
// Tapi NodeListOf<Element>

// Apa itu NodeListOf?
// NodeListOf mirip seperti array, tapi bukan array asli.

// Dia punya:
// length
// item(index)
// forEach()
// bisa pakai index [0]

// Contoh:
const all = document.querySelectorAll('li');
console.log(all.length); // 3

all.forEach((item) => {
  console.log(item.textContent);
});

// Kalau mau jadi array asli:
// const array = Array.from(all);

//Bedanya dengan getElementsByTagName?
//querySelectorAll:
// Lebih fleksibel
// Bisa pakai CSS selector
// Return NodeListOf<Element>

//Sedangkan .childNodes:
// Return NodeList
// Bisa berisi text node, comment, dll

//Tapi querySelectorAll:
// Hanya return Element
// Bukan node lain

//Kenapa TypeScript punya banyak overload seperti ini?
// querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K)

// Supaya TypeScript bisa otomatis tahu tipenya.

// Contoh:
const input = document.querySelector('input');

// TypeScript tahu bahwa:
// input → HTMLInputElement | null

// Bukan cuma HTMLElement.
// Ini disebut generic type inference.

//RINGKASAN
// | Method               | Mengambil        | Return                |
// | -------------------- | ---------------- | --------------------- |
// | `querySelector()`    | 1 elemen pertama | `Element \| null`     |
// | `querySelectorAll()` | Semua elemen     | `NodeListOf<Element>` |
