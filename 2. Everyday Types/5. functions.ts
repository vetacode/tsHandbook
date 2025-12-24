//1. Parameter Type Annotation
function greet(name: string) {
  console.log('Hello, ' + name.toUpperCase() + '!!');
}

// Would be a runtime error if executed!
greet(42);
// Argument of type 'number' is not assignable to parameter of type 'string'.

//2. Return Type Annotation
//Return type annotations added after the parameter list
function getFavoriteNumber(): number {
  return 26;
}

//3. Functions Which Return Promise
async function getFavoriteName(): Promise<string> {
  return 'Donny';
}
