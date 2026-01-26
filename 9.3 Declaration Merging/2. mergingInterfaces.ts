//Di TypeScript, interface dengan nama yang sama bisa dideklarasikan berkali-kali, dan TypeScript akan menggabungkannya (merge) jadi satu interface besar.

// NOTE: Bukan overwrite, tapi digabung.

//Contoh basic
interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
let box: Box = { height: 5, width: 6, scale: 10 }; // Valid aman

//Aturan penting: Non-function members
//HARUS UNIK -> Ini Aman
interface A {
  x: number;
}
interface A {
  y: string;
}

//Kalo nama prop sama, tipenya harus sama. Kalo tipenya beda akan error:
interface A {
  x: number;
}
interface A {
  x: string; // ERROR
  //Subsequent property declarations must have the same type.  Property 'x' must be of type 'number', but here has type 'string'.
}

//Function members = Overload
//-> Kalau yang dimerge adalah method / function, maka Semua method dengan nama yang sama → dianggap overload

declare interface Animal {
  //
}
declare interface Dog {
  //
}
declare interface Cat {
  //
}
declare interface Sheep {
  //
}

interface Cloner {
  clone(animal: Animal): Animal;
}
interface Cloner {
  clone(animal: Sheep): Sheep;
}
interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
}

{
  //Hasil merge:
  interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
    clone(animal: Sheep): Sheep;
    clone(animal: Animal): Animal;
  }

  //Aturan urutan overload: TypeScript membaca overload dari atas ke bawah
  // Interface yang ditulis belakangan → prioritas lebih tinggi
  // Overload dari interface terakhir dinaikkan ke atas

  //    Interface paling akhir
  //              ↓
  //    Interface sebelumnya
  //              ↓
  //    Interface paling awal
}

{
  //Pengecualian: Specialized Signatures (string literal)
  //Aturan khusus: Prioritas
  // Kalau parameter function berupa single string literal:
  ('div'); //
  ('span'); //
  //maka overload itu di-bubble ke paling atas,
  // bahkan mengalahkan aturan “yang belakangan lebih dulu”
}

{
  //Contoh kasus Document.createElement
  interface Document {
    createElement(tagName: any): Element;
  }

  interface Document {
    createElement(tagName: 'div'): HTMLDivElement;
    createElement(tagName: 'span'): HTMLSpanElement;
  }

  interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: 'canvas'): HTMLCanvasElement;
  }

  //Hasil merge:
  interface Document {
    createElement(tagName: 'canvas'): HTMLCanvasElement;
    createElement(tagName: 'div'): HTMLDivElement;
    createElement(tagName: 'span'): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
  }
}

//Kenapa harus ada urutan? apa fungsinya?
//Urutan hasil merge itu krusial karena TypeScript memilih overload dari ATAS ke BAWAH.
// Salah urutan = salah tipe yang dipilih.

function fn(x: string): 'STRING';
function fn(x: any): 'ANY';
function fn(x: any) {
  return x;
}

fn('hello'); //Hasilnya STRING
//string cocok
// dicek duluan
// any nggak pernah dipakai

{
  //Kalo urutannya kebalik:
  function fnc(x: any): 'ANY';
  function fnc(x: string): 'STRING';
  function fnc(x: any) {
    return x;
  }

  fnc('hello'); // Hasilnya 'ANY'
  //"hello" cocok ke any
  // TS berhenti di situ
  // overload string nggak pernah kepakai
}
