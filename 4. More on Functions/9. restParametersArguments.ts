//1. Rest Parameters
function multiply(n: number, ...m: number[]) {
  // rest parameters -> mengumpulkan (kumpulkan semua argumen jadi satu array)
  // posisi di parameter, posisi harus paling akhir
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
console.log(a); //[ 10, 20, 30, 40 ]

//2. Rest Arguments
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2); //spread operator -> memecah array (ambil isi array-nya satu per satu)
//push() mengharapkan number, tapi arr2 adalah number[]
//klo kita passing langsung arr2:
arr1.push(arr2); //Error: Argument of type 'number[]' is not assignable to parameter of type 'number'

// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
const angle = Math.atan2(...args);
// A spread argument must either have a tuple type or be passed to a rest parameter.

//Solution: use 'as const' to inferred as 2-length tuple
const args2 = [8, 5] as const; //give const context on args2 -> becomes tuple readonly
const angle2 = Math.atan2(...args2);

function addNum(a: number, ...b: number[]): number[] {
  return b.map((y) => a + y);
}
console.log(addNum(2, 1, 2, 3, 4)); //3,4,5,6
