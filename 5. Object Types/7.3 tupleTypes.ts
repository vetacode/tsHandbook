// Tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
// Tuple itu sebenarnya hanyalah “array yang diperketat”.
type StringNumberPair = [string, number];
//it describes arrays whose 0 index contains a string and whose 1 index contains a number.

function doSomething(pair: [string, number]): [string, number] {
  const a = pair[0];
  // const a: string;
  const b = pair[1];
  // const b: number;
  // ...
  return [a, b];
}
console.log(doSomething(['hello', 42]));

//implement generic
function doSomething2<T, K>(pair: [T, K]): [T, K] {
  const a = pair[0];
  // const a: string;
  const b = pair[1];
  // const b: number;
  // ...
  return [a, b];
}
console.log(doSomething2(['hai', 52]));

//indexing past the number of element -> Error
function doSomething3(pair: [string, number]) {
  // ...

  const c = pair[2];
  // Tuple type '[string, number]' of length '2' has no element at index '2'.
}
console.log(doSomething3(['hai', 52]));

//destructuring the tuples
function doSomething4(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;
  console.log(inputString);
  // const inputString: string

  console.log(hash);
  // const hash: number
}
doSomething4(['123', 321]);
//NOTES: This gives us flexibility in whatever we want to name our variables when we destructure them. In the above example, we were able to name elements 0 and 1 to whatever we wanted.

//Konsep dibalik layar

//tuple ini:
type Pair = [string, number];
const p: Pair = ['age', 29];
//arti: index 0 harus string, index 1 harus number, panjang array harus 2

//adalah secara konsep sama dengan interface ini:
interface StringNumberPair2 {
  // specialized properties
  length: 2;
  0: string;
  1: number;

  // Other 'Array<string | number>' members...
  slice(start?: number, end?: number): Array<string | number>;
  slice(): (string | number)[];
}

//Perbedaan dengan array biasa:
const arr: (string | number)[] = ['age', 39];
arr[0] = 100; //ga Error
arr.push('test'); //aman juga
//coz semua index termasuk ke string | number dan length tidak dibatasi

//Klo pake Tuple:
const tuple: [string, number] = ['age', 40];

tuple[0];
tuple[1];
tuple[2]; //Error, index yg diminta ga sesuai dgn variable tuple yg di declare
//    ^ Tuple type '[string, number]' of length '2' has no element at index '2'.

tuple[0] = 123; //Error, index 0 harus string
//   ^ Type 'number' is not assignable to type 'string'.
tuple[1] = 123; //OK, index 1 adlh number
console.log(tuple.push('x')); //3
console.log(tuple); //[ 123, 123, 'x' ]

type Either2dOr3d = [number, number, number?];

//tuples can have optional properties by writing out a question mark ?.
//Optional tuple elements can only come at the end, and also affect the type of length.
function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;
  //           ^ const z: number | undefined

  console.log(`Provided coordinates had ${coord.length} dimensions`);
  //                                              ^ (property) length: 2 | 3
}

//Tuples can also have rest elements, which have to be an array/tuple type.
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

//A tuple with a rest element has no set “length” - it only has a set of well-known elements in different positions.
const a: StringNumberBooleans = ['hello', 1];
const b: StringNumberBooleans = ['beautiful', 2, true];
const c: StringNumberBooleans = ['world', 3, true, false, true, false, true];

//optional and rest elements are useful to correspond tuples with parameter lists
function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}
//basically sama dengan:
function readButtonInput2(name: string, version: number, ...input: boolean[]) {
  // ...
}
// NOTES: This is handy when you want to take a variable number of arguments with a rest parameter, and you need a minimum number of elements, but you don’t want to introduce intermediate variables.
//Tuple dengan optional / rest element dipakai supaya bentuk argumen fungsi bisa dimodelkan sebagai satu kesatuan, tanpa harus memecahnya jadi parameter satu-satu.
