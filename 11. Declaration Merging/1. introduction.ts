//Declaration merging => TypeScript menggabungkan beberapa deklarasi dengan nama yang sama menjadi satu definisi.

interface User {
  name: string;
}

interface User {
  age: number;
}

{
  //Hasil akhir
  interface User {
    name: string;
    age: number;
  }
  //Inilah declaration merging.
}
//Declaration Merging berguna banget saat:
// Nambah type ke library existing
// Extend API tanpa ubah source aslinya
// Typing JavaScript legacy

//3 environment/dunia dalam declarasi TS:
// | Environment   | Artinya                                   |
// | ------------- | ----------------------------------------- |
// | **Namespace** | Untuk akses pakai `.` (misal `MyLib.foo`) |
// | **Type**      | Untuk pengecekan tipe saat compile        |
// | **Value**     | Yang beneran ada di JavaScript runtime    |

//Deklarasi ini hidup di dunia mana aja?
// | Deklarasi   | Namespace  | Type  | Value  |
// | ----------- | ---------- | ----- | ------ |
// | `namespace` | ✅         | ❌    | ✅     |
// | `class`     | ❌         | ✅    | ✅     |
// | `enum`      | ❌         | ✅    | ✅     |
// | `interface` | ❌         | ✅    | ❌     |
// | `type`      | ❌         | ✅    | ❌     |
// | `function`  | ❌         | ❌    | ✅     |
// | `variable`  | ❌         | ❌    | ✅     |

//Contoh
//1. Interface → hanya hidup di dunia type
interface User {
  name: string;
}
// Tidak ada di JS
// Tidak bisa dipakai runtime
// Bisa di-merge

interface User {
  age: number;
}
//-> ini akan Digabung jadi satu tipe User

//2. Class → hidup di type DAN value
class Person {
  name: string;
}
//Artinya:
// Type: buat cek tipe
// Value: ada JS class-nya

// -> itulah sebabnya class bisa:
const p: Person = new Person();

//3. Function → hanya value
function hello() {}
//Ada di JS
//Tidak bikin tipe baru
//Tidak bisa di-merge kayak interface

//Penting karena: Yang di-merge itu tergantung dia hidup di dunia mana
// interface + interface →  merge
// namespace + namespace →  merge
// class + interface → bisa merge type-nya, tapi value-nya tetap satu
//TypeScript nggak asal gabung, dia gabung per dunia.
