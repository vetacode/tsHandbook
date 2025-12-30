//RULES
//1. Always prefer parameters with union types instead of overloads when possible

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

len(''); // OK
len([0]); // OK
len(Math.random() > 0.5 ? 'hello' : [0]);
// No overload matches this call.
//   Overload 1 of 2, '(s: string): number', gave the following error.
//     Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
//       Type 'number[]' is not assignable to type 'string'.
//   Overload 2 of 2, '(arr: any[]): number', gave the following error.
//     Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'.
//       Type 'string' is not assignable to type 'any[]'.

//Because both overloads have the same argument count and same return type, we can instead write a non-overloaded version of the function:
function len2(x: any[] | string) {
  return x.length;
}
len2(Math.random() > 0.5 ? 'hello' : [0]);
