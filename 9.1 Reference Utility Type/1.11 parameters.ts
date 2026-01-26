//Parameters<T>
// Input: function type
// Output: tuple berisi tipe parameter function tersebut

//Yang terjadi di blkg layar:
export type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

//Artinya:
// T harus function
// infer P = TypeScript “menyadap” tipe parameter function
// Hasilnya: P → tuple

//1. Function tanpa parameter
type T0 = Parameters<() => string>; // function kosong
//hasil:
type T0 = []; //tuple kosong

//2. Function dg 1 parameter
type T1 = Parameters<(s: string) => void>;
//hasil:
type T1 = [s: string]; // tuple
//Kenapa tuple?
// Karena function bisa punya lebih dari satu parameter
// Urutan penting → tuple, bukan object

//3. Generic function
type T2 = Parameters<<T>(arg: T) => T>;
//hasil:
type T2 = [arg: unknown]; //tuple
//Kenapa unknown, bukan T?
// Parameters<> belum tahu nilai generic T (coz function blm dipanggil)
// Jadi fallback ke unknown
// Ini desain TS supaya aman

//4. Mengambil parameter dari function yg sdh di declare
declare function f1(arg: { a: number; b: string }): void;
type T3 = Parameters<typeof f1>;
//hasil: -> mengambil type function, bukan value
type T3 = [
  {
    a: number;
    b: string;
  },
];

//EDGE CASES
//1. any
type T4 = Parameters<any>;
type T4 = unknown[];

//2. never
type T5 = Parameters<never>;
type T5 = never;

//3. Bukan function -> error
type T6 = Parameters<string>;
//                      ^ Type 'string' does not satisfy the constraint '(...args: any) => any'.
//Parameters<> hanya boleh function
// string bukan function
// Maka hasilnya never

//4. Function (type umum JS)
type T7 = Parameters<Function>;
type T7 = never;

//Function di TS terlalu umum
// Tidak menjamin ada signature (...args) => any
// Jadi tidak kompatibel

//Best practice:
// Hindari Function
// Pakai (...args: any[]) => any

//REAL USAGE di Aplikasi
//1. Bikin wrapper function (logging, caching, auth)
function withLog<F extends (...args: any[]) => any>(fn: F) {
  return (...args: Parameters<F>): ReturnType<F> => {
    console.log('called with:', args);
    return fn(...args);
  };
}
//Parameter asli tetap aman & sinkron

//2. Reusable callback type
type ApiFn = (id: number, token: string) => Promise<User>;

type ApiArgs = Parameters<ApiFn>;
// [number, string]
// Dipakai ulang tanpa nulis ulang tipe.

//3. Dipakai bareng ReturnType
function fetchUser(id: number, token: string) {
  return Promise.resolve({ id, name: 'Budi' });
}

type Args = Parameters<typeof fetchUser>;
type Result = ReturnType<typeof fetchUser>;
//Full sync antara function & type

//NOTES:
// | Input          | Output          |
// | -------------- | --------------- |
// | Function       | Tuple parameter |
// | `() => void`   | `[]`            |
// | `(a: string)`  | `[string]`      |
// | Generic        | `unknown`       |
// | `any`          | `unknown[]`     |
// | `never`        | `never`         |
// | Bukan function | `never / error` |
