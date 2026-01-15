//private is like protected, but doesn’t allow access to the member even from subclasses:
class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside the class
console.log(b.x);
//            ^ Property 'x' is private and only accessible within class 'Base'.

class Derived extends Base {
  showX() {
    // Can't access in subclasses
    console.log(this.x);
    //               ^ Property 'x' is private and only accessible within class 'Base'.
  }
}

{
  //Ga bisa juga extends visibility
  class Base {
    private x = 0;
  }
  class Derived extends Base {
    // Class 'Derived' incorrectly extends base class 'Base'.
    //   Property 'x' is private in type 'Base' but not in type 'Derived'.
    x = 1;
  }
}

//Cross-instance private access: TS Allowed
class A {
  private x = 10;

  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}

//Bracket notation access private
//Private is a SOFT PRIVATE
//Di typescript:
class MySafe {
  private secretKey = 12345;
  //secretKey adalah soft private (compile-time only)
}

//Setelah compiled ke JS:
class MySafe2 {
  constructor() {
    this.secretKey = 12345;
  }
}

//secara runtime JS -> aman:
const s = new MySafe();
console.log(s.secretKey); // 12345
//Tapi Error di compile time TS
// coz aturannya: private hanya boleh diakses di dalam class itu sendiri

//Solusi: pake bracket notation untuk akses
console.log(s['secretKey']); //Aman -> coz TS mengalah
//Bracket notation adalah property access dinamis
//TS tidak menerapkan aturan private pada akses dinamis (TypeScript tidak menganggap bracket notation sebagai akses langsung ke member private, karena secara umum property name bisa dinamis.)
// TS tidak bisa membuktikan bahwa ini pelanggaran aturan private. (Bukan karena TS "mendukung bypass", tapi karena batasan sistem tipe)

//HARD Private
class Dog {
  #barkAmount = 0;
  personality = 'happy';
  //Artinya:
  //#barkAmount:
  //tidak bisa diakses dari luar class
  //tidak bisa pakai bracket notation
  //tidak muncul di Object.keys

  // personality -> property normal, public
  constructor() {}
}

//Setelah compile ke JS (ES2022+):
('use strict');
class Dog2 {
  #barkAmount = 0;
  personality = 'happy';
  constructor() {}
  //#barkAmount masih tetap ada
  //nilainya ga diubah
  //Privacy dijaga oleh JS runtime
  // ini disebut HARD PRIVATE
}

//Compile JS (ES2021/kebawah):
('use strict');
var _Dog_barkAmount;
class Dog {
  constructor() {
    _Dog_barkAmount.set(this, 0);
    this.personality = 'happy';
  }
}
_Dog_barkAmount = new WeakMap();
