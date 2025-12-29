function fn(n: number) {
  console.log(n.toFixed()); // 0 arguments
  console.log(n.toFixed(3)); // 1 argument
}

function f(x?: number) {
  // ? marks optional
  // ...
}
f(); // OK
f(10); // OK
