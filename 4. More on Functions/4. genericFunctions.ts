function firstElement(arr: any[]) {
  return arr[0];
}
console.log(firstElement([1, 3, 5, 7, 9])); //1
// tapi: function firstElement(arr: any[]): any

// generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature:
function firstElement2<T>(arr: T[]): T | undefined {
  return arr[0];
}
console.log(firstElement2(['coba', 'array', 'of', 'strings'])); //coba.
// type: function firstElement2<string>(arr: string[]): string | undefined

//Removing undefined
function firstElement3<T>(arr: [T, ...T[]]): T {
  //[Type, ...Type[]] = tuple non-empty
  return arr[0];
}
console.log(firstElement3([20, 30, 40, 70, 90])); //20
// type: function firstElement3<number>(arr: [number, ...number[]]): number
