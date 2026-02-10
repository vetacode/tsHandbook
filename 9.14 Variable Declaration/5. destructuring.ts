// Array destructuring
// The simplest form of destructuring is array destructuring assignment:
{
  let input = [1, 2];
  let [first, second] = input;
  console.log(first); // outputs 1
  console.log(second); // outputs 2
  // This creates two new variables named first and second. This is equivalent to using indexing, but is much more convenient:
}

{
  first = input[0];
  second = input[1];
  // Destructuring works with already-declared variables as well:
}

{
  // swap variables
  [first, second] = [second, first];
  // And with parameters to a function:
}

function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f([1, 2]);
// You can create a variable for the remaining items in a list using the syntax ...:

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
// Of course, since this is JavaScript, you can just ignore trailing elements you don’t care about:

let [first] = [1, 2, 3, 4];
console.log(first); // outputs 1
// Or other elements:

let [, second, , fourth] = [1, 2, 3, 4];
console.log(second); // outputs 2
console.log(fourth); // outputs 4
