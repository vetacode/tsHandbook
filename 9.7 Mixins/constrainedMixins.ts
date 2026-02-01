//Masalah di Mixin Sebelumnya
// Di contoh mixin awal (Scale):
function Scale<TBase extends Constructor>(Base: TBase) {}

// 👉 Mixin tidak tahu apa-apa tentang Base

//Artinya:
// Kita tidak bisa yakin Base punya method tertentu
// Kalau kita panggil this.setPos() → TypeScript akan protes
// -> Jadi susah bikin mixin yang bergantung pada fitur tertentu

//Solusi: Constrained Mixins
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

//Mendefinisikan “Kemampuan” (Bukan Class!)
type Positionable = GConstructor<{
  setPos: (x: number, y: number) => void;
}>;

//Artinya: “Class ini harus punya method setPos(x, y).”

//Bukan peduli:
// class namanya apa
// inheritance-nya bagaimana

//Yang penting punya method itu
