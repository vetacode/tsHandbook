function doSomething(): number {
  //type function doSomething adalah '() => number'
  return 42;
}

function callMeMaybe(callback: () => void) {
  // type function callback adalah '() => void'
  // Return callback ≠ return function pembungkus
  callback();
}

// Expected an error because 'doSomething' returns number, but 'callMeMaybe' expects void-returning function
// callMeMaybe(doSomething()); //Error coz yg di pass ke callMeMaybe adalah hasil dari function call ('42'), bukan function
// () => number assignable ke () => void
// number tidak pernah assignable ke () => void

//type doSomething() adalah 'number'
//type doSomething adalah '() => number'
//Error: Argument of type 'number' is not assignable to parameter of type '() => void'.

//doSomething ≠ doSomething()
console.log(doSomething()); //42 -> function invocation

console.log(callMeMaybe(doSomething)); // undefined -> ga error coz yg di pass adalah function
console.log(callMeMaybe); //[function: callMeMaybe] -> this only prints reference function (function reference)

let items = [1, 2];
let resItems = items.push(3);
console.log(resItems); //3 (length of returned array)

console.log(callMeMaybe(() => items.push(3))); //undefined
