assert(someValue === 42);

function multiply(x, y) {
  assert(typeof x === 'number');
  assert(typeof y === 'number');
  return x * y;
}
