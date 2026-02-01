//Maksud dari Alternative Pattern:
// 👉 Pisahkan dua hal:
// 1. Runtime (JavaScript benar-benar jalan)
// 2. Type system (TypeScript cuma buat cek tipe)
// Lalu digabung manual di akhir.

// 1. Mixin = Class Biasa (Runtime Only)
class Jumpable {
  jump() {}
}

class Duckable {
  duck() {}
}
//Ini adalah:
// Class JS biasa
// Tidak extends apa pun
// Hanya kumpulan method

//2. Base Class Utama
class Sprite {
  x = 0;
  y = 0;
}
// Masih polos, belum bisa jump / duck

//3. Interface untuk “Bohongi” TypeScript
interface Sprite extends Jumpable, Duckable {}
//Artinya ke TypeScript:
// “Percaya deh, Sprite nanti bakal punya jump() dan duck()”
// ⚠️ Ini hanya di level TYPE, bukan runtime

//4. Gabungkan di Runtime (JavaScript)
applyMixins(Sprite, [Jumpable, Duckable]);
//Fungsi ini:
// Mengambil method dari Jumpable.prototype
// Menyalinnya ke Sprite.prototype

//Hasil akhirnya:
new Sprite().jump(); // bisa
new Sprite().duck(); // bisa

//5. Cara Kerja applyMixins (Versi Sederhana)
function applyMixins(derivedCtor, constructors) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
//Intinya:
// Copy-paste method antar prototype

//6. Hasil Akhir
let player = new Sprite();
player.jump();
player.duck();
console.log(player.x, player.y);
// ✔️ Runtime jalan
// ✔️ TypeScript nggak error

//Kenapa Ini Disebut “Alternative / Lama”?
//Karena:
// ❌ TypeScript nggak bantu ngecek
// ❌ Bisa typo → runtime error
// ❌ Interface & runtime harus dijaga sinkron manual

//Contoh bahaya:
interface Sprite extends Jumpable {}
//tapi lupa applyMixins(...)

// -> TypeScript bilang OK -> tapi Error Runtime: 💥 player.jump is not a function

//Comparison:
//Pattern Ini
// Lebih JavaScript style
// Cocok untuk: Legacy code, ES5 / ES6 lama

//Mixin Modern (Class Expression)
// Lebih type-safe
// Compiler bantu cek
// Lebih direkomendasikan sekarang

//Ringkasan:
// Mixin lama = copy method manual
// Interface = janji ke TypeScript
// applyMixins = eksekusi janji di runtime
// Type & runtime terpisah
