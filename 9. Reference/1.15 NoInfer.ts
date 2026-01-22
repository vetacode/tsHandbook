// NoInfer<Type> = jangan pakai tipe ini sebagai sumber inferensi
// Tidak mengubah tipe
// Hanya memengaruhi bagaimana TypeScript menebak (infer) generic

//PROBLEM:
// TypeScript menginfer generic dari SEMUA parameter fungsi.
// Kadang ini tidak kita inginkan.
function createStreetLight<C extends string>(colors: C[], defaultColor?: C) {}
createStreetLight(['red', 'yellow', 'green'], 'blue'); // Salah, tapi bisa lolos!
//Karena:
// colors → "red" | "yellow" | "green"
// defaultColor → "blue"
// TypeScript menggabungkan dua sumber inferensi -> C = "red" | "yellow" | "green" | "blue"

{
  //SOLUTION: NoInfer<C>
  function createStreetLight2<C extends string>(
    colors: C[],
    defaultColor?: NoInfer<C>,
  ) {}

  createStreetLight2(['red', 'yellow', 'green'], 'red'); // OK
  createStreetLight2(['red', 'yellow', 'green'], 'blue'); // Error
}

//Aplikasi: API Config
function createConfig<K extends string>(keys: K[], initialKey: NoInfer<K>) {}
//initialKey harus berasal dari keys,
// bukan menciptakan key baru.

//Wrapper function
function withDefault<T>(value: T, defaultValue: NoInfer<T>): T {
  return value ?? defaultValue;
}
//defaultValue tidak boleh memperluas T

//Kapan pakai NoInfer:
// Ada lebih dari 1 parameter generic
// Salah satu parameter harus mengikuti, bukan menentukan
// Kamu ingin satu sumber kebenaran inferensi

//Kapan ga NoInfer perlu:
// Fungsi sederhana
// Hanya 1 parameter generic
// Tidak ada konflik inferensi
