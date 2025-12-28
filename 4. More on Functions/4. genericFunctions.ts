function firstElement(arr: any[]) {
  return arr[0];
}
console.log(firstElement([1, 3, 5, 7, 9])); //1

// generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature:
function firstElement2<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(firstElement2(['coba', 'array', 'of', 'strings'])); //coba
