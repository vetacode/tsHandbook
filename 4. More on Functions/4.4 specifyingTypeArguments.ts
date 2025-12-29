function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const arr = combine([10, 20, 30], [1, 2, 3, 4]);
console.log(arr); //[10, 20, 30, 1, 2,  3,  4]

// const arr = combine([1, 2, 3], ['hello']); //Type 'string' is not assignable to type 'number'.
// const arr = combine(['hello'], [1, 2, 3]); //Type 'number' is not assignable to type 'string'.

//SOLUTION: manually specify Type
const combineArr = combine<number | string>([1, 2, 3], ['hello']);
console.log(combineArr); //[ 1, 2, 3, 'hello' ]
