//1. Rest Parameters
function multiply(n: number, ...m: number[]) {
  //rest params, posisi di parameter, posisi harus paling akhir
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
console.log(a); //[ 10, 20, 30, 40 ]
