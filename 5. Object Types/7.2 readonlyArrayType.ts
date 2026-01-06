// it is a special type that describes arrays that shouldn’t be changed.
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push('hello!');
  //      ^ Property 'push' does not exist on type 'readonly string[]'.
}
doStuff(['rina', 'rani', 'roni']); //The first value is rina

//Unlike Array, there isn’t a ReadonlyArray constructor that we can use.
// new ReadonlyArray('red', 'green', 'blue');
//        ^ 'ReadonlyArray' only refers to a type, but is being used as a value here.

//SOLUTION: assign regular Arrays to ReadonlyArrays.
const roArray: ReadonlyArray<string> = ['red', 'green', 'blue'];

//shorthand syntax: ReadonlyArray<Type> === readonly Type[].
function doStuff2(values: readonly string[]) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push('hello!');
  // Property 'push' does not exist on type 'readonly string[]'.
}

//regular Array and ReadonlyArray assignability is not bi-directional
let x: readonly string[] = []; //readonly array -> ga boleh diubah/mutasi
let y: string[] = []; //Mutable array -> bisa diubah
console.log(x === y); //false
console.log(x == y); //false

x = y;
x.push(2); // error hanya di compile time TS
//  ^ Property 'push' does not exist on type 'readonly string[]'.
console.log(x); //[ 2 ] -> di runtime JS tetap jalan
console.log(y); //[ 2 ]

y = x; // error hanya di compile time TS
// ^The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.
y.push('arai');
console.log(y); //[ 2, 'arai' ]
console.log(x); //[ 2, 'arai' ]
