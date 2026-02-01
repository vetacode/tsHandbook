//Masalah di Mixin Sebelumnya
// Di contoh mixin awal (Scale):
function Scale<TBase extends Constructor>(Base: TBase) {}

// 👉 Mixin tidak tahu apa-apa tentang Base

//Artinya:
// Kita tidak bisa yakin Base punya method tertentu
// Kalau kita panggil this.setPos() → TypeScript akan protes
// -> Jadi susah bikin mixin yang bergantung pada fitur tertentu

//1. Solusi: Constrained Mixins
// Kita kasih syarat (constraint):
// “Mixin ini hanya boleh dipakai oleh class yang punya kemampuan tertentu.”

//Constructor dengan Constraint (Generic)
// Versi lama
type Constructor2 = new (...args: any[]) => {};
//Artinya:
// “Class apa pun, aku nggak peduli isinya.”

//Constrained Baru:
type GConstructor<T = {}> = new (...args: any[]) => T;
//Artinya:
// “Class yang instance-nya minimal punya bentuk T.”
// Ini kunci constrained mixin.

//2. Mendefinisikan “Kemampuan” (Bukan Class!)
type Positionable = GConstructor<{
  setPos: (x: number, y: number) => void;
}>;

//Artinya: “Class ini harus punya method setPos(x, y).”

//Bukan peduli:
// class namanya apa
// inheritance-nya bagaimana

//Yang penting punya method itu

// Contoh lainnya:
type Spritable = GConstructor<Sprite>;
// 👉 Harus instance dari Sprite
type Loggable = GConstructor<{ print: () => void }>;
// 👉 Harus punya print()

//3. Mixin dengan Constraint
// Sekarang kita bikin mixin Jumpable:
function Jumpable<TBase extends Positionable>(Base: TBase) {
  return class Jumpable extends Base {
    jump() {
      this.setPos(0, 20);
    }
  };
}
// Yang penting di sini:
// TBase extends Positionable

//Artinya:
// ❌ Tidak semua class boleh pakai mixin ini
// ✅ HANYA class yang punya setPos(x, y)

//4. Kenapa this.setPos() Aman?
//Karena:
// Positionable menjamin
// Base punya setPos

//Jadi TypeScript bilang:
// “Oke, aku percaya. Method ini pasti ada.”

// 🚫 Tanpa constraint → TypeScript error
// ✅ Dengan constraint → type-safe

//5. Contoh Pemakaian (Biar Kebayang)
class Player {
  x = 0;
  y = 0;

  setPos(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
// ✔️ BOLEH
const JumpingPlayer = Jumpable(Player);

// Kalau class tidak punya setPos:
class Tree {
  height = 10;
}

// ❌ ERROR
const JumpingTree = Jumpable(Tree);

// TypeScript langsung cegah 💥
// ➡️ bug ketangkep sebelum runtime

//Analogi Dunia Nyata
// Mixin Jumpable = sepatu lompat
// Syarat: harus punya kaki
// Positionable = "punya kaki"
// Player punya kaki → ✅
// Pohon nggak punya kaki → ❌

//Ringkasan:
// Constrained mixin = mixin dengan syarat
// Pakai:
//  GConstructor<T>
//  Constraint memastikan:
//  - method tertentu pasti ada
//  - TypeScript jadi lebih pintar & aman

//Kapan Pakai constrained mixin? ketika:
// mixin bergantung pada method tertentu
// kamu mau hindari runtime error
// kamu bikin library / framework
