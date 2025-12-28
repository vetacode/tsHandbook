// Assertion functions are siblings to Type Guards

declare function assert(value: unknown): asserts value;

declare const maybeStringOrNumber: string | number;
assert(typeof maybeStringOrNumber === 'string');

// With TypeScript 3.7, the code flow analysis can use these
// types of functions to figure out what the code is. So,
// when you hover over the variable below - you can see that
// it has been narrowed from a string or number to
// just a string.

maybeStringOrNumber; //const maybeStringOrNumber: string

// You can use assertion functions to make guarantees of
// your types throughout your inferred code, for example
// TypeScript knows that this function will return a
// number without the need to add types to the parameter
// via the above assert declaration.

function multiply(x: any, y: any) {
  assert(typeof x === 'number');
  assert(typeof y === 'number');

  return x * y;
}

declare const someValue: string | number;

assert(someValue === 42);

function multiply2(x: any, y: any) {
  assert(typeof x === 'number');
  assert(typeof y === 'number');
  return x * y;
}
