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
