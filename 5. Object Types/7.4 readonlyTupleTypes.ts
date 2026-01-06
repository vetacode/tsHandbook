//Syntax:
function doSomething(pair: readonly [string, number]) {
  // ...
}

function doSomething2(pair: readonly [string, number]) {
  pair[0] = 'hello!';
  //   ^ Cannot assign to '0' because it is a read-only property.
}

//array literals with const assertions will be inferred with readonly tuple types.
let point = [3, 4] as const; //makes point readonly
//    ^ let point: readonly [3, 4]

function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

distanceFromOrigin(point);
// Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'.
//   The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.
