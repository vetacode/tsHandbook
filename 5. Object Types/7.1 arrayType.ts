//number[] or string[], are just a shorthand for Array<number> and Array<string>.
function doSomething(value: Array<string>) {
  // ...
}

let myArray: string[] = ['hello', 'world'];

// either of these work!
doSomething(myArray);
doSomething(new Array('hello', 'world'));

//Array type is a generic type
// @noLib: true
interface Number {}
interface String {}
interface Boolean {}
interface Symbol {}
// ---cut---

interface Array<Type> {
  /**
   * Gets or sets the length of the array.
   */
  length: number;

  /**
   * Removes the last element from an array and returns it.
   */
  pop(): Type | undefined;

  /**
   * Appends new elements to an array, and returns the new length of the array.
   */
  push(...items: Type[]): number;

  // ...
}

//pop(): Type | undefined !== pop?(): Type;
//why?
//1. pop(): Type | undefined -> artinya method pop selalu ada, tapi hasil return bs Type atau undefind
//undefined dsini adlh hasil operasi
let arr: number[] = [];
const x = arr.pop(); //pop() tetap dipanggil tapi nilainya bisa tdk ada (undefined) krn array kosong
//    ^ const x: number | undefined

//2. pop?(): Type -> artinya props pop mungkin tdk ada sama skali, tp jika ada pasti return Type
//optional method
type Stack<T> = {
  pop?(): T;
};

const s1: Stack<number> = {};
const s2: Stack<number> = {
  pop() {
    return 123;
  },
};

s1.pop; //ga ada
s2.pop; //ada, dan return number(bukan undefined)

//NOTES
//Kenapa undefined tidak muncul di pop?(): Type? -> Karena ? tidak memodifikasi return type.
// ? hanya berarti:
// pop?: (() => Type) | undefined
// bukan pop(): Type | undefined

//berikut menggambarkan dua-dua nya
//obj.pop bisa tidak ada, kalau ada, memanggilnya bisa return undefined
type Weird<T> = {
  pop?(): T | undefined;
};
