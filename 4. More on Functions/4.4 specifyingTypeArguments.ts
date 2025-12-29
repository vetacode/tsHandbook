function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

// const arr = combine([1, 2, 3], ['hello']); //
const arr = combine(['hello'], [1, 2, 3]); //Type 'number' is not assignable to type 'string'.
