function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
console.log(longerArray); //[ 1, 2, 3 ]

// longerString is of type 'alice' | 'bob'
const longerString = longest('alice', 'bob');
console.log(longerString); //alice

// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100); // Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
