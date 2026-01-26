//ThisParameterType<Type>
//Mengambil tipe this dari sebuah function type
// Jika function tidak punya this parameter, hasilnya unknown

function toHex(this: Number) {
  return this.toString(16);
}
//Function ini harus dipanggil dengan this bertipe Number

//Ambil type this:
type T = ThisParameterType<typeof toHex>;
// T = Number

//Contoh lanjutan:
function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
//Lalu, diproses TS menjadi
function numberToString(n: Number) {
  return toHex.apply(n);
}

//Ga boleh langsung hard code:
function numberToString(n: Number) {
  return toHex.apply(n);
}
//Karena juka toHex diganti:
function toHex(this: BigInt) {}
//numberToString tidak ikut update
// Type jadi out of sync

//Contoh KALO GA PAKE this:
function hello(name: string) {
  return 'Hello ' + name;
}

type T = ThisParameterType<typeof hello>;
// T = unknown
//Karena tidak ada kontrak this
// TypeScript tidak bisa menebak dengan aman

//APLIKASI: Wrapper function
function callWithThis<F extends Function>(
  fn: F,
  thisArg: ThisParameterType<F>,
) {
  return fn.apply(thisArg);
}
//thisArg pasti cocok
//Tidak bisa salah passing object

// | Utility                | Fungsi                     |
// | ---------------------- | -------------------------- |
// | `ThisParameterType<T>` | Ambil tipe `this`          |
// | `OmitThisParameter<T>` | Hapus `this` dari function |
// | `Parameters<T>`        | Ambil parameter biasa      |
// | `ReturnType<T>`        | Ambil return               |
