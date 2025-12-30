function makeDate(timestamp: number): Date; //this is called function overloads
function makeDate(m: number, d: number, y: number): Date; //this is called function overloads
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678); //1970-01-01T03:25:45.678Z
const d2 = makeDate(5, 5, 5); //1905-06-04T16:52:48.000Z
console.log(d1);
console.log(d2);

const d3 = makeDate(1, 3); // No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
console.log(d3); //1970-01-01T00:00:00.001Z

//Overload Signatures and the Implementation Signature

//NOTES:
// The signature of the implementation is not visible from the outside. When writing an overloaded function, you should always have two or more signatures above the implementation of the function.

// 1️⃣ overload signatures (public, terlihat dari luar)
function fn(x: string): string;
function fn(x: number): number;

// 2️⃣ implementation signature (private, tidak terlihat dari luar)
function fn(x: string | number) {
  return typeof x === 'string' ? x.toUpperCase() : x * 2;
}

console.log(fn('Hello World of Andromeda Galaxy')); //HELLO WORLD OF ANDROMEDA GALAXY
