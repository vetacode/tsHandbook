//  1️⃣ Hirarki: Node → Element → HTMLElement
// Di DOM (Document Object Model), ada struktur pewarisan seperti ini:

// Node (paling dasar)
//    ↓
// Element
//    ↓
// HTMLElement

// Artinya:
// Node = tipe paling dasar (semua yang ada di DOM itu Node)

// Element = turunan dari Node (khusus tag HTML/XML)

// HTMLElement = turunan dari Element (khusus elemen HTML seperti div, p, button, dll)

// Karena HTMLElement mewarisi dari Node, maka semua elemen HTML punya method yang dimiliki Node.

// 2️⃣ appendChild
// Method ini berasal dari Node.

// appendChild<T extends Node>(newChild: T): T;

// Artinya:
// Dia menerima parameter yang bertipe Node
// Mengembalikan Node yang sama

// Contoh:
const app = document.getElementById('app');
const p = document.createElement('p');

app?.appendChild(p);

// Kenapa pakai ?. ?
// Karena:
// getElementById(): HTMLElement | null

// Jadi app bisa saja null kalau id tidak ditemukan.
// Optional chaining (?.) mencegah error kalau app ternyata null.

// 3️⃣ Perbedaan children vs childNodes
// Ini bagian yang sering bikin bingung 🔥

// ✅ children
// Hanya berisi elemen HTML saja
// Tipe: HTMLCollection
// Tidak termasuk text, comment, dll

// ✅ childNodes
// Berisi semua Node
// Tipe: NodeList

// Termasuk:
// Element
// Text node
// Comment node
// dll

//4️⃣ Contoh 1
// HTML:
// <div>
//   <p>Hello, World</p>
//   <p>TypeScript!</p>
// </div>

// JS:
const div = document.getElementsByTagName('div')[0];

div.children;
// HTMLCollection(2) [p, p]

div.childNodes;
// // NodeList(2) [p, p]

// Kenapa sama?
// Karena di dalam div cuma ada dua <p> saja.

//5️⃣ Contoh 2 (lebih penting)
// HTML diubah jadi:

// <div>
//   <p>Hello, World</p>
//   TypeScript!
// </div>

// Sekarang tidak ada <p> kedua, tapi ada teks langsung di dalam div.

// JS:
div.children;
// HTMLCollection(1) [p]

div.childNodes;
// NodeList(2) [p, text]

// Sekarang berbeda
// Karena:
// TypeScript!
// itu dianggap sebagai Text Node, bukan HTMLElement.

// Jadi:
// children ➜ hanya <p>
// childNodes ➜ <p> + text "TypeScript!"

//6️⃣ Visualisasi Sederhana
// Struktur DOM sebenarnya seperti ini:

// div
//  ├── p
//  └── #text ("TypeScript!")

// Text itu benar-benar Node di dalam DOM.

// Makanya:
// | Property   | Isi           |
// | ---------- | ------------- |
// | children   | hanya element |
// | childNodes | semua node    |

// 7️⃣ Ringkasan Singkat
// | children           | childNodes |
// | ------------------ | ---------- |
// | Hanya element HTML | Semua node |
// | Tidak ada text     | Ada text   |
// | HTMLCollection     | NodeList   |

// 🎯 Kapan pakai yang mana?
// Kalau cuma butuh elemen HTML ➜ pakai children
// Kalau mau manipulasi semua node termasuk teks ➜ pakai childNodes
