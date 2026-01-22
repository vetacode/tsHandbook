//OmitThisParameter<Type> -> Menghapus parameter this dari sebuah function type

// | Kondisi              | Hasil                    |
// | -------------------- | ------------------------ |
// | Ada `this` parameter | Dihapus                  |
// | Tidak ada `this`     | Type tetap               |
// | Overload             | Ambil signature terakhir |
// | Generic              | Dihapus                  |

function toHex(this: Number) {
  return this.toString(16);
}
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
fiveToHex(); // OK
// typeof toHex → (this: Number) => string
// OmitThisParameter<...> → () => string
// Cocok dengan hasil .bind(5)

//TANPA OmitThisParameter:
const fiveToHex2: typeof toHex = toHex.bind(5);
// Error
// Type '() => string' is not assignable to '(this: Number) => string'
//.bind() → () => string
// typeof toHex → masih butuh this

//APLIKASI: Methoad Object -> Callback
class Counter {
  count = 0;

  inc(this: Counter) {
    this.count++;
  }
}

const c = new Counter();

const safeInc: OmitThisParameter<typeof c.inc> = c.inc.bind(c);

safeInc(); // Aman
//Tanpa OmitThisParameter → error typing

//Event Handler setTimeout
setTimeout(c.inc.bind(c) as OmitThisParameter<typeof c.inc>, 1000);

//Library Wrapper/Utility
function bindSafe<F extends (this: any, ...args: any[]) => any>(
  fn: F,
  thisArg: ThisParameterType<F>,
): OmitThisParameter<F> {
  return fn.bind(thisArg);
}
// this aman
// Type callback bersih
// Tidak ada this bocor ke luar

// | Utility                | Fungsi                       |
// | ---------------------- | ---------------------------- |
// | `ThisParameterType<T>` | Ambil tipe `this`            |
// | `OmitThisParameter<T>` | Hapus `this`                 |
// | `Parameters<T>`        | Ambil argumen (tanpa `this`) |
// | `ReturnType<T>`        | Ambil return                 |
