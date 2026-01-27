//Iterable itu adalah objek yang bisa di-loop satu per satu (pakai for...of, spread ..., dll).

//Syaratnya cuma satu: 👉 objek tersebut punya property Symbol.iterator

//Symbol.iterator ini adalah fungsi khusus yang memberi tahu JavaScript:
// “Kalau aku di-loop, nilai apa saja yang harus dikeluarkan dan urutannya gimana”

//Contoh paling sederhana (built-in):

//1. Array (sudah iterable)
const arr = [1, 2, 3];

for (const value of arr) {
  console.log(value);
}

Output: 1;
2;
3;

// Kenapa bisa? ➡️ Karena Array sudah punya Symbol.iterator

// Coba cek:
console.log(arr[Symbol.iterator]);

// Hasilnya:
// ƒ values() { [native code] }

//Artinya: array sudah tahu cara “mengeluarkan” elemen-elemennya satu per satu.

// 2. String (juga iterable)
const text = 'Hi';

for (const char of text) {
  console.log(char);
}

Output: 'H';
('i');

// String iterable karena Symbol.iterator-nya mengembalikan tiap karakter.

//Contoh bikin iterable sendiri (biar makin kebayang)

//Misalnya kita punya object biasa:

const myObj = {
  a: 1,
  b: 2,
};

//❌ Ini bukan iterable:

for (const x of myObj) {
  console.log(x); // TypeError
}

// 3. Menjadikan object iterable
// Kita tambahkan Symbol.iterator:

const myObj2 = {
  values: [10, 20, 30],

  [Symbol.iterator]() {
    let index = 0;
    const data = this.values;

    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        }
        return { done: true };
      },
    };
  },
};

// Sekarang bisa di-loop 👇
for (const v of myObj2) {
  console.log(v);
}

Output: 10;
20;
30;

//👉 Inilah maksud kalimat:
// "Symbol.iterator function on an object is responsible for returning the list of values to iterate on"
// Fungsi itu menentukan nilai apa saja yang keluar saat di-iterate.

//Ringkasan:
// Iterable = objek yang bisa di-loop dengan for...of
// Syarat: punya Symbol.iterator
// Symbol.iterator:
//    adalah fungsi
//    mengembalikan “cara ngambil data satu per satu”
// Contoh iterable bawaan:
//    Array
//    String
//    Map
//    Set
