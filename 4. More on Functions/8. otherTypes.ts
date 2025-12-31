//1. void represents the return value of functions which don’t return a value.
//    void is not the same as undefined.
//    The inferred return type is void
function noop() {
  //function noop(): void -> ini adlh hanya deskripsi bentuk function yg boleh mengembalikan type apa saja
  return;
}

//NOTES:
// void adalah type space bukan function (value space)
// contoh type space: string, number, () => void
// contoh value space: 'hello', 123, () => {}
// kita tdk bs gunakan type sebagai value, contoh:

type Car = { speed: number };

// const myCar = Car; //Ini salah, Car itu type/konsep, bukan benda/value
//yg benar:
const fastCar = { speed: 250 };
console.log(fastCar); //{ speed: 250 }

//NOTES:
// void (pada function type assignment, bukan pada function implementation) bukan berarti "return nothing", tapi: caller tidak peduli return value:
function tryVoid(): void {
  //ini function implementation -> ketat, return harus sesuai dgn type return yg di declare (void)
  return 123; //return dgn 'makna' akan error.
  // return undefined; -> aman
  // return; -> aman
}

const func: () => void = () => {
  // void di callback/function type -> longgar
  return 123; //aman tidak error
};

function func2(): () => void {
  return 123;
}

let x = func2();

//2. object: a special type refers to any value that isn’t a primitive (string, number, bigint, boolean, symbol, null, or undefined)
//    object is not Object. Always use object!
//    Object is a global type
//    function types are considered to be objects in TypeScript.

//3. unknown: represents any value.
//    unknown mirip any, tapi lebih aman karena TypeScript melarang penggunaan value tersebut sebelum dilakukan type narrowing.
//    'any' will turn off type checking, 'unknown' type checking tetap aktif

function f1(a: any) {
  a.b(); // OK (ga dicek sama TS)
}
function f2(a: unknown) {
  a.b();
  // Error: 'a' is of type 'unknown'.
}

//Unknown will not scream after type narrowing
function f3(a: unknown) {
  if (typeof a === 'object' && a !== null && 'b' in a) {
    // proses narrowing: null jg object, jd hrs disaring. hasilnya adalah TS tau a: object & { b: unknown }
    //so kita perlu info TS bahwa 'b' adlh function
    (a as { b: () => void }).b(); //hasilnya: a adalah object yang punya method b berupa function (pake type assertion 'as')
    console.log(a); //{ b: [Function: b] }
  }
  //OK setelah narrowing
}

f3({
  b: () => {
    console.log('Printing f3');
  },
});

//OR
f3({ b: function () {} });

//OR
f3({ b() {} });
//b -> value function -> typescript mencocokkan dgn () => void -> cocok -> tdk error

console.log(f3); //[Function: f3]

//unknown cocok digunakan sebagai return type untuk function yang tidak bisa menjamin bentuk data (misalnya JSON.parse), sehingga caller dipaksa melakukan validasi tipe terlebih dahulu sebelum menggunakannya.
// declare const someRandomString: string;
// ---cut---

const someRandomString: string = 'wireMagic';

function safeParse(s: string): unknown {
  return JSON.parse(s); //JSON.parse secara runtime bisa return apa saja
  //Kalau dikembalikan any, caller bisa langsung salah pakai
  //Dengan unknown, memaksa caller hati-hati coz TS bisa scream
}

// Need to be careful with 'obj'!
const obj = safeParse(someRandomString); //const obj: unknown => Hati2 dgn obj! boleh menyimpannya di variable, tapi ga boleh menggunakan obj tanpa narrowing
console.log(obj);
