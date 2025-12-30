//1. void represents the return value of functions which don’t return a value.
//    void is not the same as undefined.
// The inferred return type is void
function noop() {
  //function noop(): void
  return;
}

//2. object: a special type refers to any value that isn’t a primitive (string, number, bigint, boolean, symbol, null, or undefined)
//    object is not Object. Always use object!
//    Object is a global type
//    function types are considered to be objects in TypeScript.

//3. unknown: represents any value.
//    similar to the 'any' type, but 'unknown' is safer coz it is illegal to do anything with unknown value (the TS will always scream)

function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();
  // 'a' is of type 'unknown'.
}
