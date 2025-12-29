function fn(n: number) {
  console.log(n.toFixed()); // 0 arguments
  console.log(n.toFixed(3)); // 1 argument
}

fn(undefined); //Error: Argument of type 'undefined' is not assignable to parameter of type 'number'.

//Solution
//1. Adds ?
function f(x?: number) {
  // ? marks optional => adds undefined
  // ...
}
f(); // OK
f(10); // OK
f(undefined); //OK

//2. provide parameter default
function fx(x = 10) {
  // ...
}

fx(); // OK
fx(5); // OK
fx(undefined); // OK
