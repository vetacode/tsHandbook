//1. void represents the return value of functions which don’t return a value.
//    void is not the same as undefined.
// The inferred return type is void
function noop() {
  //function noop(): void
  return;
}

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
    (a as { b: () => void }).b(); // OK setelah narrowing
  }
}

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
const obj = safeParse(someRandomString); //const obj: unknown => Hati2 dgn obj! boleh menyimpannya di variable
// ga boleh menggunakan obj tanpa narrowing
console.log(obj);
