declare namespace D3 {
  export interface Selectors {
    select: {
      (selector: string): Selection;
      (element: EventTarget): Selection;
    };
  }
  export interface Event {
    x: number;
    y: number;
  }
  export interface Base extends Selectors {
    event: Event;
  }
}
declare var d3: D3.Base;


//1. Masalah yang Ingin Diselesaikan
//Library seperti D3:
// ditulis pakai JavaScript biasa

//dipakai lewat:
<script src="d3.js"></script>

// menghasilkan global variable:
d3.select(...)

//Masalahnya di TypeScript:
// TypeScript tidak tahu apa itu d3

//Perlu “diberi tahu bentuknya”

//2. Solusi: Ambient Namespace
// Ambient = hanya deklarasi, tanpa implementasi

// File .d.ts: menjelaskan bentuk API. tidak menghasilkan JavaScript. hanya untuk type checking.
// 📌 Mirip file .h di C/C++

//3. declare namespace D3 {}
declare namespace D3 {
  //...
}
//Artinya: “Akan ada namespace D3 di runtime, tapi bukan saya yang membuatnya”
//TypeScript: // percaya // tidak mencari implementasi

//4. Isi Namespace = Bentuk API
export interface Selectors {
  select: {
    (selector: string): Selection;
    (element: EventTarget): Selection;
  };
}
//Ini menjelaskan:
// d3.select() bisa: // pakai string // pakai element
// return Selection

//Tidak ada kode JS, hanya aturan type

//5. declare var d3: D3.Base
declare var d3: D3.Base;
//Artinya:
// “Di runtime nanti, akan ada variable global d3
// dan bentuknya mengikuti D3.Base”

//Sekarang TypeScript paham:
d3.select("body");
d3.event.x;

//Tanpa error 🎉

//6. Kenapa Namespace Cocok di Sini?
//Karena:
// D3 tidak pakai module
// semua ada di 1 global object
// namespace pas untuk mewakili struktur global

//7. Mental Model PENTING 🧠
//Bayangkan kamu bilang ke TypeScript:
// “Tenang, nanti pas runtime bakal ada d3.
// Ini aku jelasin bentuk & isinya dulu.”

//8. Contoh Mini (Lebih Sederhana)
// myLib.d.ts
declare namespace MyLib {
  function hello(name: string): void;
}
declare var myLib: typeof MyLib;

// Pakai di TS:
myLib.hello("Budi");

//Ringkasan:
// Ambient namespace = deskripsi library JS global
// Ditulis di .d.ts
// Tidak ada implementasi
// Supaya TS tidak error & punya type safety

//Kalimat kunci:
// Ambient namespace = janji tentang sesuatu yang akan ada di runtime