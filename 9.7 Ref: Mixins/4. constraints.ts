//1. Decorators + Mixins ❌ (Nggak Nyatu di Type System)
// Kasusnya: Decorator dipakai untuk mengembalikan class baru (mirip mixin):
const Pausable = (target: typeof Player) => {
  return class Pausable extends target {
    shouldFreeze = false;
  };
};

@Pausable
class Player {
  x = 0;
  y = 0;
}
//Di Runtime ✅
// JavaScript: Player benar-benar punya shouldFreeze

// Di TypeScript ❌
const player = new Player();
player.shouldFreeze; // ERROR

// Kenapa?
// 📌 TypeScript TIDAK menggabungkan tipe dari decorator
// Decorator jalan setelah type checking
// Compiler nggak tahu decorator mengubah bentuk class

//Solusi Manual (Workaround)
//1. Type composition
type FreezablePlayer = Player & { shouldFreeze: boolean };

//2. Cast manual
const playerTwo = new Player() as FreezablePlayer;
playerTwo.shouldFreeze; // OK
//⚠️ Ini tanggung jawab developer, bukan compiler.

//Intinya (Decorator + Mixin)
// | Aspek      | Hasil        |
// | ---------- | ------------ |
// | Runtime    | ✅ Jalan      |
// | TypeScript | ❌ Nggak tahu |
// | Safety     | ⚠️ Manual    |

// ➡️ Decorator ≠ mixin yang type-safe

// 2. Static Property Mixins ⚠️ (Singleton Problem)
// Ini lebih ke jebakan halus, bukan error langsung.
// Masalahnya: Mixin via class expression:
function Scale(Base) {
  return class extends Base {
    static value = ???;
  };
}
//👉 Class hasil mixin = satu singleton
// Static property nempel ke class
// TypeScript susah bedain tipe static per variasi

// Solusi: Bungkus Class di Function (Factory)
function base<T>() {
  class Base {
    static prop: T;
  }
  return Base;
}
// ➡️ Setiap pemanggilan base<T>() → class baru

// Turunan Generic
function derived<T>() {
  class Derived extends base<T>() {
    static anotherProp: T;
  }
  return Derived;
}

// Pemakaian
class Spec extends derived<string>() {}

Spec.prop;        // string
Spec.anotherProp; // string

//TypeScript tahu:
// prop → string
// anotherProp → string

//Kenapa Ini Bekerja? Karena:
// Function → menghasilkan class baru
// Generic T → terkunci per class
// Static type → nggak bocor ke class lain

//Ringkasan:
//Decorator + Mixin
// ❌ TypeScript nggak merge tipe
// ✅ Runtime OK
// 🔧 Perlu cast / interface manual

//Static Property Mixin
// ⚠️ Class expression = singleton
// 🔧 Pakai factory function
// ✅ Static generic jadi aman

//Kapan Harus Ingat Bagian Ini?
// Kalau pakai decorator buat nambah properti
// Kalau mixin punya static property
// Kalau bikin library / framework TS