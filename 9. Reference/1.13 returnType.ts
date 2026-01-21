//Tujuan utama ReturnType:
// Supaya tipe data tidak ditulis dua kali dan selalu sinkron dengan function aslinya.
// Kalau function berubah, ReturnType ikut berubah otomatis.

//Yang terjadi di blkg layar
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

// T harus function
// infer R = “tebak tipe return function”
// hasil akhirnya = R

//contoh 1: basic
type T0 = ReturnType<() => string>;
type T0 = string;

//contoh 2: void
type T1 = ReturnType<(s: string) => void>;
type T1 = void;

//contoh 3: generic tanpa function
type T2 = ReturnType<<T>() => T>;
type T2 = unknown;
//T tidak diketahui
// Bisa string, number, dll
// ➡ TypeScript paling aman → unknown

//contoh 4: generic dgn function
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
type T3 = number;

// U dibatasi number[]
// T extends U
// ➡ Return pasti number[]

//contoh 5: mengambil return dari function
declare function f1(): { a: number; b: string };

type T4 = ReturnType<typeof f1>;
type T4 = { a: number; b: string };
//f1 itu value
// ReturnType butuh type function
// ➡ T4 = { a: number; b: string }

//contoh 6: any
type T5 = ReturnType<any>;
// any = “bebas”
// ➡ hasilnya any

//contoh 7: never
type T6 = ReturnType<never>;
//never artinya “tidak pernah ada”
// ➡ hasilnya never

//contoh 8: bukan function
type T7 = ReturnType<string>;
//                    ^ Type 'string' does not satisfy the constraint '(...args: any) => any'.
//Error karena: string bukan function

//Constraint ReturnType:
T extends (...args: any) => any

//contoh 9: Function Type
type T8 = ReturnType<Function>;
//                      ^ Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//                         Type 'Function' provides no match for the signature '(...args: any): any'.

//Error juga karena:
// Function terlalu umum
// Tidak punya signature (...args) => returnType
// Function ≠ callable function type

//Pentingnya ReturnType di aplikasi:
// Tanpa ReturnType (rawan tidak sinkron)
function getUser() {
  return { id: 1, name: "Budi" };
}

type User = {
  id: number;
  name: string;
};
// Kalau function berubah → type bisa ketinggalan
// Dengan ReturnType (aman & DRY)

function getUser() {
  return { id: 1, name: "Budi" };
}

type User = ReturnType<typeof getUser>;
// Selalu sinkron
// Tidak duplikasi type

//Aplikasi di project Async
//API
async function fetchUser() {
  return {
    id: 1,
    name: "Budi",
    role: "admin",
  };
}
//Ambil return type nya:
type FetchUserResult = Awaited<ReturnType<typeof fetchUser>>;
//Hasil:
type FetchUserResult = {
  id: number;
  name: string;
  role: string;
};

