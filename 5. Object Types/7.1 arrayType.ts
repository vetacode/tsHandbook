//number[] or string[], are just a shorthand for Array<number> and Array<string>.
function doSomething(value: Array<string>) {
  // ...
}

let myArray: string[] = ['hello', 'world']; //typescript membacanya: let myArray: Array<string> = ['hello', 'world'];

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

interface ExArray<T> {
  push(...items: T[]): number;
}

const arr2: ExArray<number> = [50, 100];
const len2 = arr2.push(1, 2, 3, 4);
console.log(len2); //6

const arr3: ExArray<string> = [];
const len3 = arr3.push('arei', 'aroi', 'arai');
console.log(len3); //3

// NOTES
// Map, Set, dan Promise disebut “generic” karena strukturnya tidak terikat pada satu tipe data tertentu.
// Mereka bisa bekerja dengan tipe apa pun, dan tipe tersebut “diisi” saat kita menggunakannya.

//1. Map<K, V> -> Key-Value pair
//Map menyimpan data dalam bentuk: K = tipe Key, dan V = tipe Value
const ageMap: Map<string, number> = new Map();

ageMap.set('Andi', 25);
ageMap.set('Budi', 35);

let andiAge = ageMap.get('Andi');
//      ^ let andiAge: number | undefined
console.log(andiAge); //25

//2. Set<T> -> kumpulan unique value
//Set menyimpan value tanpa duplikat: T = tipe tiap elemen di dlm set
const numbers: Set<number> = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(2); //ignored (coz duplikat)

console.log(numbers); //Set(2) { 1, 2 }
console.log(numbers.has(1)); //true

//3. Promise<T> -> hasil async in the future
//Promise mereprentasikan value yg blm ada skrg, tapi akan ada nanti -> T = tipe hasil resolve
const promiseNumber: Promise<number> = new Promise((resolve) => {
  resolve(50);
});
console.log(promiseNumber); //Promise { 50 }

//dengan async:
async function getName(): Promise<string> {
  return 'Alibaba';
}
console.log(getName()); //Promise { 'Alibaba' }

// Notes: generic memastikan hasil async tetap aman secara tipe (Promise<string> hasilnya pasti string, etc)
