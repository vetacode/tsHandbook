//Anggap mixin itu seperti “plugin” untuk class: bukan turunan satu arah seperti extends, tapi fungsi yang “menempelkan kemampuan baru” ke class mana pun.

// Class biasa → hanya bisa extends satu class
// Mixin → bisa menambahkan fitur ke banyak class
// Di TypeScript, mixin dibuat sebagai function yang menerima class dan mengembalikan class baru

// Jadi alurnya:
// Class dasar → masuk ke mixin → keluar class baru (lebih canggih)

//1. Class Dasar (Base Class)
class Sprite {
  name = "";
  x = 0;
  y = 0;

  constructor(name: string) {
    this.name = name;
  }
}

//Ini basic:
// Punya name, x, y
// Belum punya kemampuan scale

//2. Constructor Type (Kenapa Perlu Ini?)
type Constructor = new (...args: any[]) => {};

//Artinya: “Aku mau menerima class apa pun, selama itu bisa di-new.”

//Mixin tidak peduli class-nya apa:
// Sprite
// Player
// Enemy

// Asal:
new ClassName(...)

//3. Mixin = Function yang Mengembalikan Class
function Scale<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    _scale = 1;

    setScale(scale: number) {
      this._scale = scale;
    }

    get scale(): number {
      return this._scale;
    }
  };
}

//Apa yang terjadi di sini?
// 1. Scale menerima class // Base
// 2. Lalu meng-extends class itu // class Scaling extends Base
// 3. Menambahkan fitur baru:
//  - property _scale
//  - method setScale
//  - getter scale

//Intinya:
// Mixin = “Aku ambil class lama, lalu aku kembalikan class baru dengan fitur tambahan”

//4. Menggabungkan Class + Mixin
{
const EightBitSprite = Scale(Sprite);
}

// Secara mental, ini setara dengan:
class EightBitSprite extends Sprite {
  _scale = 1;

  setScale(scale: number) {
    this._scale = scale;
  }

  get scale() {
    return this._scale;
  }
}

//Tapi bedanya:
// Ini dinamis
// Bisa dipakai ulang ke class lain